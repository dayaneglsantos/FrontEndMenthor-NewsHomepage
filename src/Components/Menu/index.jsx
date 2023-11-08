import Link from "../LinkMenu";
import { Container } from "./styles";

const Menu = () => {
  return (
    <Container>
      <Link>Home</Link>
      <Link>New</Link>
      <Link>Popular</Link>
      <Link>Trending</Link>
      <Link>Categories</Link>
    </Container>
  );
};

export default Menu;
