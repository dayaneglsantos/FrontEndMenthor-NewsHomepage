import {
  ButtonOpenMenu,
  CloseButton,
  Container,
  MenuContainer,
} from "./styles";
import closeButton from "../../assets/Images/icon-menu-close.svg";
import menu from "../../assets/Images/icon-menu.svg";

import { useState } from "react";

const MenuMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ButtonOpenMenu onClick={() => setMenuOpen(true)}>
        <img src={menu} alt="Menu Icon" />
      </ButtonOpenMenu>
      <Container menuOpen={menuOpen} onClick={() => setMenuOpen(false)}>
        <MenuContainer>
          <CloseButton onClick={() => setMenuOpen(false)}>
            <img src={closeButton} alt="" />
          </CloseButton>
          <nav>
            <ul>
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
          </nav>
        </MenuContainer>
      </Container>
    </>
  );
};

export default MenuMobile;
