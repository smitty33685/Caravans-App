import { Container } from "../components/styles/LayoutComponents";
import { StyledMain } from "../components/styles/CaravanList.styled";
import CaravanCard from "../components/CaravanCard";

const CaravanList = ({ caravans }) => {
  return (
    <StyledMain>
      <Container>
        {caravans.map((caravan, index) => (
          <CaravanCard key={index} caravan={caravan} />
        ))}
      </Container>
    </StyledMain>
  );
};

export default CaravanList;
