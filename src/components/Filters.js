import { Container, Flex, Heading2 } from "../components/styles/LayoutComponents";
import { StyledSection, Grid, Icon, Typeboxes } from "../components/styles/Filters.styled";
import Typebox from "../components/Typebox";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const Filters = ({
  type,
  rangePrice,
  reservation,
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
              <input
                type="number"
                id="minNum"
                value={rangePrice.min}
                min="100"
                max="10000"
                onChange={event => onInputMinChange(event)}
              />
              <input
                type="number"
                id="maxNum"
                value={rangePrice.max}
                min="100"
                max="10000"
                onChange={event => onInputMaxChange(event)}
              />
            </Flex>
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

            <select name="reservation" id="reservation" value={reservation} onChange={event => onSelectChange(event)}>
              <option value={true}>Ano</option>
              <option value={false}>Ne</option>
            </select>
          </div>
        </Grid>
      </Container>
    </StyledSection>
  );
};

export default Filters;
