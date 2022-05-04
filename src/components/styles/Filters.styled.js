import styled from "styled-components";

export const StyledSection = styled.section`
  border-bottom: 1px solid #edeae3;

  input[type="range"] {
    width: 100%;
    margin-bottom: 1rem;
  }

  input[type="number"],
  select {
    width: 100%;
    padding: 14px 12px;
    border: 1px solid #edeae3;
    border-radius: 8px;

    &:first-child {
      margin-right: 1rem;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 25% 55% 20%;

  & > div {
    padding: 1rem;

    &:not(:last-child) {
      border-right: 1px solid #edeae3;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
`;
