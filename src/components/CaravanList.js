import { Container } from "../components/styles/LayoutComponents";
import { StyledMain } from "../components/styles/CaravanList.styled";
import CaravanCard from "../components/CaravanCard";

const CaravanList = ({ caravans }) => {
  return (
    <Container>
      <StyledMain>
        {caravans.map((caravan, index) => (
          <CaravanCard key={index} caravan={caravan} />
        ))}
      </StyledMain>
    </Container>
  );
};

export default CaravanList;
