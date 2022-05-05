import { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";
import Filters from "../src/components/Filters";
import styled from "styled-components";

const Home = () => {
  const [type, setType] = useState("");
  const [reservation, setReservation] = useState("yes");
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [rangePrice, setRangePrice] = useState({ min: 100, max: 10000 });

  const getData = async () => {
    const response = await fetch("/api/data");
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PageWrapper>
      <Navbar />
      <Filters
        min={minPrice}
        max={maxPrice}
        rangePrice={rangePrice}
        onClick={type => setType(type)}
        onSelectChange={event => setReservation(event.target.value)}
        onInputMinChange={event => setMinPrice(Number(event.target.value))}
        onInputMaxChange={event => setMaxPrice(Number(event.target.value))}
        onInputRangeChange={value => setRangePrice(value)}
      />
    </PageWrapper>
  );
};
const PageWrapper = styled.div``;

export default Home;
