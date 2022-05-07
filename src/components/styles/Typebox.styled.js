import styled from "styled-components";

export const StyledDiv = styled.div`
  flex: 1;
  padding: 12px;
  border: 2px solid #edeae3;
  border-radius: 8px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    border-color: #119383;
  }

  &.active {
    border-color: #119383;
  }
`;
