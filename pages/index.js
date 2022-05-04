import { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";
import Filters from "../src/components/Filters";
import styled from "styled-components";

const Home = () => {
  const [type, setType] = useState("");

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
      <Filters onClick={type => setType(type)} />
    </PageWrapper>
  );
};
const PageWrapper = styled.div``;

export default Home;
