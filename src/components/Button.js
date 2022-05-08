import { StyledButton } from "../components/styles/Button.styled";

const Button = ({ text, handleClick }) => {
  return <StyledButton onClick={handleClick}>{text}</StyledButton>;
};

export default Button;
