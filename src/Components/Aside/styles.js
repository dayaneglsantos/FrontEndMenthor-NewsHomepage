import styled from "styled-components";
import { colors } from "../../Styles/colors";

export const AsideContainer = styled.aside`
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  padding: 24px;
`;

export const SectionTitle = styled.h3`
  color: ${colors.orange};
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const Item = styled.div`
  margin-bottom: 16px;

  h4 {
    margin-bottom: 8px;
    font-size: 18px;

    cursor: pointer;
    &:hover {
      color: ${colors.orange};
    }
  }

  p {
    font-size: 14px;
    margin-bottom: 24px;
    color: ${colors.gray};
  }

  &.border {
    border-bottom: 1px solid ${colors.gray};
    border-top: 1px solid ${colors.gray};
    padding-top: 24px;
  }
`;
