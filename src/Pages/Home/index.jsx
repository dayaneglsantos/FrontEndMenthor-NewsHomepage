import SectionGrid from "../../Components/SectionGrid";
import Header from "../../Components/Header";
import Main from "../../Components/Main";

import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <Header />
      <Main />
      <SectionGrid />
    </Container>
  );
};

export default Home;
