import { Heading3, Paragraph } from "../components/styles/LayoutComponents";
import { StyledDiv } from "../components/styles/Typebox.styled";

const Typebox = ({ activeClass, heading, paragraph, onClick }) => {
  return (
    <StyledDiv className={activeClass ? "active" : null} onClick={onClick}>
      <Heading3>{heading}</Heading3>
      <Paragraph>{paragraph}</Paragraph>
    </StyledDiv>
  );
};

export default Typebox;
