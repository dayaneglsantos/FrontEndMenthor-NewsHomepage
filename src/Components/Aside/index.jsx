import { AsideContainer, Item, SectionTitle } from "./styles";

const Aside = () => {
  return (
    <AsideContainer>
      <SectionTitle>New</SectionTitle>
      <Item>
        <h4>Hydrogen VS Eletric Cars</h4>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </Item>
      <Item className="border">
        <h4>The Downsides of AI Artistry</h4>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </Item>
      <Item>
        <h4>Is VC Funding Drying Up?</h4>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </Item>
    </AsideContainer>
  );
};

export default Aside;
