import styled from "styled-components";
import { colors } from "../../Styles/colors";

export const Container = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.menuOpen ? "flex" : "none")};
`;

export const MenuContainer = styled.div`
  z-index: 1;
  width: 70%;
  background-color: ${colors.white};
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  padding: 24px;

  nav {
    margin-top: 70px;
    font-size: 20px;

    li {
      margin-bottom: 24px;
      color: ${colors.darkBlue};
    }
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  position: fixed;
  right: 24px;
  top: 36;
`;

export const ButtonOpenMenu = styled.button`
  background: none;
  border: none;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;
