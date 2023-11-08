import Aside from "../Aside";
import Highlight from "../Highlight";
import { MainContainer } from "./styles";

const Main = () => {
  return (
    <MainContainer>
      <Highlight />
      <Aside />
    </MainContainer>
  );
};

export default Main;
