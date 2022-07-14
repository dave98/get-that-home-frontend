import { colors } from "../../style";
import Button from "../Button";
import CustomSelect from "../CustomSelect";
import { Heading } from "../typography";
import {
  HeroContainer,
  HeroSearchBar,
  HeroWrapper,
  InputHero,
  InputHeroContainer,
  InputLabelHero,
} from "./style";

const Hero = () => {
  const imgPath = "/home-img.jpg";
  return (
    <HeroWrapper img={imgPath}>
      <HeroContainer>
        <Heading color={colors.white} size={"xl"} weight={300}>
          Meet your new Home
        </Heading>
        <Heading
          color={colors.white}
          size={"xs"}
          weight={400}
          style={{ marginBottom: "4rem" }}
        >
          The easiest way to find where you belong
        </Heading>
        <HeroSearchBar initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <CustomSelect
            label={"I'M LOOKING FOR"}
            name={"property_type"}
            options={["Apartments", "Houses", "Offices"]}
          />
          <CustomSelect
            label={"I WANT TO"}
            name={"property_type"}
            options={["Rent", "Buy", "Sell"]}
          />
          <InputHeroContainer>
            <InputLabelHero>WHERE</InputLabelHero>
            <InputHero placeholder="Enter a location here"></InputHero>
          </InputHeroContainer>
          <Button>SEARCH</Button>
        </HeroSearchBar>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
