import styled from "styled-components";
import { colors } from "../../Styles/colors";

export const ContainerLink = styled.div`
  color: ${colors.darkGray};
  cursor: pointer;

  &:hover {
    color: ${colors.red};
  }
`;
