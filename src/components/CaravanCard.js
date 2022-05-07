import {
  StyledDiv,
  Image,
  Icon,
  Equipment,
  Price,
  Heading2,
  StyledSection,
  Heading3,
  Paragraph,
  Count,
  PriceFrom,
  DayPrice,
} from "../components/styles/CaravanCard.styled";
import { Flex } from "../components/styles/LayoutComponents";

const CaravanCard = ({ caravan }) => {
  return (
    <StyledDiv>
      <Image src={caravan.pictures[0]} alt="Caravan image"></Image>
      <StyledSection>
        <Heading2>{caravan.vehicleType}</Heading2>
        <Heading3>{caravan.name}</Heading3>
        <Paragraph>{caravan.location}</Paragraph>
        <Equipment>
          <Icon src="icon-human.svg" alt="Human icon"></Icon>
          <Count>{caravan.passengersCapacity}</Count>
          <Icon src="icon-bed.svg" alt="Bed icon"></Icon>
          <Count>{caravan.sleepCapacity}</Count>
          {caravan.toilet && <Icon src="icon-toilet.svg" alt="Toilet icon"></Icon>}
          {caravan.shower && <Icon src="icon-shower.svg" alt="Shower icon"></Icon>}
        </Equipment>
        <Price>
          <PriceFrom>Cena od</PriceFrom>
          <Flex>
            <DayPrice>{caravan.price}Kč/den</DayPrice>
            {caravan.instantBookable && <Icon src="icon-booking.svg" alt="Booking icon"></Icon>}
          </Flex>
        </Price>
      </StyledSection>
    </StyledDiv>
  );
};

export default CaravanCard;
