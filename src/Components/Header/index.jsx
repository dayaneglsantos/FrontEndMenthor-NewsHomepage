import logo from "../../assets/Images/logo.svg";
import Menu from "../Menu";
import { ContainerHeader } from "./styles";
import MenuMobile from "../MenuMobile";

const Header = () => {
  return (
    <ContainerHeader>
      <img src={logo} alt="Logo" />
      <Menu />
      <MenuMobile />
    </ContainerHeader>
  );
};

export default Header;
