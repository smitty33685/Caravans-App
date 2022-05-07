import styled from "styled-components";

export const StyledDiv = styled.div`
  max-width: 100%;

  @media (min-width: 400px) {
    max-width: 380px;
  }
`;

export const StyledSection = styled.section`
  padding: 1rem;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border: 1px solid #edeae3;
`;

export const Heading2 = styled.h2`
  margin-bottom: 5px;
  font-size: 12px;
  color: #ff5e55;
  text-transform: uppercase;
  font-weight: 700;
`;

export const Heading3 = styled.h3`
  font-size: 24px;
  color: #1f2244;
  font-weight: 700;
  padding-bottom: 7px;
  margin-bottom: 5px;
  border-bottom: 1px solid #edeae3;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  color: #1f2244;
  margin: 10px 0;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: fill;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  @media (min-width: 400px) {
    max-width: 380px;
    height: 285px;
  }
`;

export const Icon = styled.img`
  &:nth-of-type(3) {
    margin-right: 13px;
  }
`;

export const Equipment = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 14px;
  border-bottom: 1px solid #edeae3;
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const PriceFrom = styled.p`
  color: #9c8c8c;
`;

export const DayPrice = styled.p`
  color: #1f2244;
  font-weight: 700;
  margin-right: 8px;
`;

export const Count = styled.p`
  margin: 0 13px 0 4px;
`;
