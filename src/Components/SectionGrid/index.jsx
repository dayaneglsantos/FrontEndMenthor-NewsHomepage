import retroPc from "../../assets/Images/image-retro-pcs.jpg";
import game from "../../assets/Images/image-gaming-growth.jpg";
import laptop from "../../assets/Images/image-top-laptops.jpg";
import { GridContainer, GridItem } from "./styles";

const SectionGrid = () => {
  return (
    <GridContainer>
      <GridItem>
        <img src={retroPc} alt="Retro Pc" />
        <div>
          <span>01</span>
          <h5>Reviving Retro PCs</h5>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </GridItem>
      <GridItem>
        <img src={laptop} alt="Laptop" />
        <div>
          <span>02</span>
          <h5>Top 10 Laptops of 2022</h5>
          <p>Our best picks for various needs and budgets</p>
        </div>
      </GridItem>
      <GridItem>
        <img src={game} alt="Retro Pc" />
        <div>
          <span>03</span>
          <h5>The Growth of Gaming</h5>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </GridItem>
    </GridContainer>
  );
};

export default SectionGrid;
