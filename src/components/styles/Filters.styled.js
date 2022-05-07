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

export const Icon = styled.img`
  margin: 0 0 1rem 0.5rem;
`;

export const Typeboxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  & > div {
    padding: 1rem 0;
  }

  @media (min-width: 400px) {
    grid-template-columns: 25% 55% 20%;

    & > div {
      padding: 1rem;

      &:not(:last-child) {
        border-right: 1px solid #edeae3;
      }

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }
  }
`;
