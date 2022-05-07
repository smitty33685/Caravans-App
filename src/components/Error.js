import { StyledError } from "../components/styles/Error.styled";

const Error = ({ text }) => {
  return (
    <StyledError>
      <p>{text}</p>
    </StyledError>
  );
};

export default Error;
