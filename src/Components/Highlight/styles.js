import styled from "styled-components";
import imgDesktop from "../../assets/Images/image-web-3-desktop.jpg";
import imgMobile from "../../assets/Images/image-web-3-mobile.jpg";
import { colors } from "../../Styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 600px;
  }
`;

export const Img = styled.div`
  width: 100%;
  height: 60%;
  background-image: url(${imgDesktop});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    background-image: url(${imgMobile});
    height: 100%;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 16px;
  }

  h2 {
    font-size: 50px;
    font-weight: 900;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p {
    font-size: 14px;
    color: ${colors.darkGray};
    text-align: justify;

    @media (max-width: 768px) {
      margin: 24px 0;
      line-height: 20px;
    }
  }

  a {
    padding: 12px 16px;
    background-color: ${colors.darkBlue};
    text-transform: uppercase;
    text-decoration: none;
    color: ${colors.white};
    letter-spacing: 2px;
    font-size: 14px;
    cursor: pointer;
    width: 150px;
    text-align: center;

    &:hover {
      background-color: ${colors.red};
    }

    @media (max-width: 768px) {
      background-color: ${colors.red};
    }
  }
`;
