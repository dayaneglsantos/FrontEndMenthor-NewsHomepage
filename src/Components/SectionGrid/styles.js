import styled from "styled-components";
import { colors } from "../../Styles/colors";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 60px;
  }
`;

export const GridItem = styled.div`
  display: flex;
  gap: 16px;

  img {
    height: 120px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  span {
    color: ${colors.gray};
    font-size: 26px;
    font-weight: bold;
  }

  h5 {
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      color: ${colors.red};
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  p {
    font-size: 14px;
    color: ${colors.darkGray};
  }
`;
