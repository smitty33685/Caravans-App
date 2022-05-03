import { Container, Heading2, Heading3, Paragraph } from "../components/styles/LayoutComponents";
import { StyledSection, Grid, Flex } from "../components/styles/Filters.styled";

const Filters = () => {
  return (
    <StyledSection>
      <Container>
        <Grid>
          <div>
            <Heading2>Cena za den</Heading2>
            <Flex>
              <input type="number" id="minNum" value="888" />
              <input type="number" id="maxNum" value="999" />
            </Flex>
          </div>
          <div>
            <Heading2>Typ karavanu</Heading2>
            <Flex>
              <div>
                <Heading3>Campervan</Heading3>
                <Paragraph>Obytka s rozměry osobáku, se kterou dojedete všude.</Paragraph>
              </div>
              <div>
                <Heading3>Integrál</Heading3>
                <Paragraph>Král mezi karavany. Luxus na kolech.</Paragraph>
              </div>
              <div>
                <Heading3>Vestavba</Heading3>
                <Paragraph>Celý byt geniálně poskládaný do dodávky.</Paragraph>
              </div>
              <div>
                <Heading3>Přívěs</Heading3>
                <Paragraph>Tažný karavan za vaše auto. Od kapkovitých až po rodinné.</Paragraph>
              </div>
            </Flex>
          </div>
          <div>
            <Heading2>Okamžitá rezervace</Heading2>
            <select name="reservation" id="reservation">
              <option value="yes">Ano</option>
              <option value="no">Ne</option>
            </select>
          </div>
        </Grid>
      </Container>
    </StyledSection>
  );
};

export default Filters;
