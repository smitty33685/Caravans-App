import { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";
import Filters from "../src/components/Filters";
import CaravanList from "../src/components/CaravanList";
import Error from "../src/components/Error";
import Loader from "../src/components/Loader";
import Button from "../src/components/Button";
import styled from "styled-components";

const Home = () => {
  const DEFAULT_MIN_PRICE = 100;
  const DEFAULT_MAX_PRICE = 10000;
  const CARAVAN_TO_SHOW = 3;
  const [type, setType] = useState("Intergrated");
  const [reservation, setReservation] = useState(true);
  const [rangePrice, setRangePrice] = useState({ min: DEFAULT_MIN_PRICE, max: DEFAULT_MAX_PRICE });
  const [caravans, setCaravans] = useState([]);
  const [filteredCaravans, setFilteredCaravans] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [showError, setShowError] = useState(false);
  const [caravansToShow, setCaravansToShow] = useState(CARAVAN_TO_SHOW);
  const [shownCaravans, setShownCaravans] = useState([]);

  const filterCaravans = () => {
    setFilteredCaravans(
      caravans.filter(
        caravan =>
          caravan.vehicleType === type &&
          caravan.instantBookable === reservation &&
          caravan.price <= rangePrice.max &&
          caravan.price >= rangePrice.min,
      ),
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

  const correctPriceRange = () => {
    return (
      rangePrice.min >= DEFAULT_MIN_PRICE &&
      rangePrice.min <= DEFAULT_MAX_PRICE &&
      rangePrice.max >= DEFAULT_MIN_PRICE &&
      rangePrice.max <= DEFAULT_MAX_PRICE
    );
  };

  useEffect(() => {
    if (correctPriceRange()) {
      setCaravansToShow(CARAVAN_TO_SHOW);
      filterCaravans();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, reservation, rangePrice, caravans]);

  useEffect(() => {
    setShownCaravans(filteredCaravans.slice(0, caravansToShow));
  }, [filteredCaravans, caravansToShow]);

  useEffect(() => {
    getCaravans();
  }, []);

  return (
    <PageWrapper>
      <Navbar />
      <Filters
        showPriceAlert={!correctPriceRange()}
        type={type}
        rangePrice={rangePrice}
        reservation={reservation}
        onClick={type => setType(type)}
        onSelectChange={event => setReservation(Boolean(Number(event.target.value)))}
        onInputMinChange={event => setRangePrice({ ...rangePrice, min: Number(event.target.value) })}
        onInputMaxChange={event => setRangePrice({ ...rangePrice, max: Number(event.target.value) })}
        onInputRangeChange={value => setRangePrice(value)}
      />
      {showError && <Error text="Něco se pokazilo" />}
      {!shownCaravans.length && !showLoader && !showError && <Error text="Nic nenalezeno" />}
      {showLoader ? <Loader /> : <CaravanList caravans={shownCaravans} />}
      {filteredCaravans.length > caravansToShow ? (
        <ButtonWrapper>
          <Button text="Načíst další" handleClick={() => setCaravansToShow(caravansToShow + CARAVAN_TO_SHOW)} />
        </ButtonWrapper>
      ) : null}
    </PageWrapper>
  );
};

const PageWrapper = styled.div``;
const ButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export default Home;
