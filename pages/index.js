import { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";
import Filters from "../src/components/Filters";
import CaravanList from "../src/components/CaravanList";
import Error from "../src/components/Error";
import Loader from "../src/components/Loader";
import Button from "../src/components/Button";
import styled from "styled-components";

const Home = () => {
  const [type, setType] = useState("Intergrated");
  const [reservation, setReservation] = useState(true);
  const [rangePrice, setRangePrice] = useState({ min: 100, max: 10000 });
  const [caravans, setCaravans] = useState([]);
  const [filteredCaravans, setFilteredCaravans] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [showError, setShowError] = useState(false);
  const [caravansToShow, setCaravansToShow] = useState(6);

  const filterCaravans = () => {
    setFilteredCaravans(
      caravans
        .filter(
          caravan =>
            caravan.vehicleType === type &&
            caravan.instantBookable === reservation &&
            caravan.price <= rangePrice.max &&
            caravan.price >= rangePrice.min,
        )
        .slice(0, caravansToShow),
    );
  };

  const getCaravans = async () => {
    try {
      setShowError(false);
      setShowLoader(true);
      const response = await fetch("/api/data");
      const data = await response.json();

      setCaravans(data.items);
    } catch {
      setShowError(true);
    } finally {
      setShowLoader(false);
    }
  };

  useEffect(() => {
    if (rangePrice.min <= 100 || rangePrice.max >= 10000) {
      filterCaravans();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, reservation, rangePrice, caravans, caravansToShow]);

  useEffect(() => {
    getCaravans();
  }, []);

  return (
    <PageWrapper>
      <Navbar />
      <Filters
        type={type}
        rangePrice={rangePrice}
        reservation={reservation}
        onClick={type => setType(type)}
        // TODO handle boolean in select
        onSelectChange={event => setReservation(event.target.value === "true" ? true : false)}
        onInputMinChange={event => setRangePrice({ ...rangePrice, min: Number(event.target.value) })}
        onInputMaxChange={event => setRangePrice({ ...rangePrice, max: Number(event.target.value) })}
        onInputRangeChange={value => setRangePrice(value)}
      />
      {showError && <Error text="Něco se pokazilo" />}
      {!filteredCaravans.length && !showLoader && !showError && <Error text="Nic nenalezeno" />}
      {showLoader ? <Loader /> : <CaravanList caravans={filteredCaravans} />}
      {filteredCaravans.length && (
        <ButtonWrapper>
          <Button text="Načíst další" handleClick={() => setCaravansToShow(caravansToShow + 6)} />
        </ButtonWrapper>
      )}
    </PageWrapper>
  );
};

const PageWrapper = styled.div``;
const ButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export default Home;
