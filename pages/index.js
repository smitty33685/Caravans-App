import { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";
import Filters from "../src/components/Filters";
import styled from "styled-components";

const Home = () => {
  const [type, setType] = useState("Intergrated");
  const [reservation, setReservation] = useState(true);
  const [rangePrice, setRangePrice] = useState({ min: 100, max: 10000 });
  const [caravans, setCaravans] = useState([]);
  const [filteredCaravans, setFilteredCaravans] = useState([]);

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
      const response = await fetch("/api/data");
      const data = await response.json();

      setCaravans(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    filterCaravans();

    // TODO figure out warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, reservation, rangePrice, caravans]);

  useEffect(() => {
    getCaravans();

    // TODO figure out warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageWrapper>
      <Navbar />
      <Filters
        rangePrice={rangePrice}
        reservation={reservation}
        onClick={type => setType(type)}
        // TODO handle boolean in select
        onSelectChange={event => setReservation(event.target.value === "true" ? true : false)}
        onInputMinChange={event => setRangePrice({ ...rangePrice, min: Number(event.target.value) })}
        onInputMaxChange={event => setRangePrice({ ...rangePrice, max: Number(event.target.value) })}
        onInputRangeChange={value => setRangePrice(value)}
      />
    </PageWrapper>
  );
};
const PageWrapper = styled.div``;

export default Home;
