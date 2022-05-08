import { Container, Flex, Heading2 } from "../components/styles/LayoutComponents";
import { StyledSection, Grid, Icon, Typeboxes, InputWrapper } from "../components/styles/Filters.styled";
import Typebox from "../components/Typebox";
import Error from "../components/Error";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const Filters = ({
  type,
  rangePrice,
  showPriceAlert,
  onClick,
  onSelectChange,
  onInputMinChange,
  onInputMaxChange,
  onInputRangeChange,
}) => {
  const boxData = [
    { type: "Campervan", heading: "Campervan", paragraph: "Obytka s rozměry osobáku, se kterou dojedete všude." },
    { type: "Intergrated", heading: "Integrál", paragraph: "Král mezi karavany. Luxus na kolech." },
    { type: "BuiltIn", heading: "Vestavba", paragraph: "Celý byt geniálně poskládaný do dodávky." },
    { type: "Alcove", heading: "Přívěs", paragraph: "Tažný karavan za vaše auto. Od kapkovitých až po rodinné." },
  ];

  return (
    <StyledSection>
      <Container>
        <Grid>
          <div>
            <Heading2>Cena za den</Heading2>
            <InputRange
              maxValue={10000}
              minValue={100}
              value={{ min: rangePrice.min, max: rangePrice.max }}
              onChange={value => onInputRangeChange(value)}
            />
            <Flex>
              <InputWrapper>
                <input
                  type="number"
                  id="minNum"
                  value={rangePrice.min}
                  min="100"
                  max="10000"
                  onChange={event => onInputMinChange(event)}
                />
                <p>Kč</p>
              </InputWrapper>
              <InputWrapper>
                <input
                  type="number"
                  id="maxNum"
                  value={rangePrice.max}
                  min="100"
                  max="10000"
                  onChange={event => onInputMaxChange(event)}
                />
                <p>Kč</p>
              </InputWrapper>
            </Flex>
            {showPriceAlert && <Error text="Cena musí být mezi 100kč a 10000kč" />}
          </div>
          <div>
            <Heading2>Typ karavanu</Heading2>
            <Typeboxes>
              {boxData.map((box, index) => (
                <Typebox
                  heading={box.heading}
                  paragraph={box.paragraph}
                  activeClass={box.type === type}
                  key={index}
                  onClick={() => onClick(box.type)}
                />
              ))}
            </Typeboxes>
          </div>
          <div>
            <Flex>
              <Heading2>Okamžitá rezervace</Heading2>
              <Icon src="icon-booking.svg" alt="Booking icon"></Icon>
            </Flex>

            <select name="reservation" id="reservation" defaultValue={1} onChange={event => onSelectChange(event)}>
              <option value={1}>Ano</option>
              <option value={0}>Ne</option>
            </select>
          </div>
        </Grid>
      </Container>
    </StyledSection>
  );
};

export default Filters;
