import styled from "styled-components";

export const StyledMain = styled.main`
  margin: 2rem 0;
  display: grid;
  grid-gap: 2rem;

  @media (min-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  }
`;
