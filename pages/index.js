import Navbar from "../src/components/Navbar";
import Filters from "../src/components/Filters";
import styled from "styled-components";

const Home = () => {
  return (
    <PageWrapper>
      <Navbar />
      <Filters />
    </PageWrapper>
  );
};
const PageWrapper = styled.div``;

export default Home;
