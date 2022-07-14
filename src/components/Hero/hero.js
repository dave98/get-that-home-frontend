import { colors } from "../../style";
import Button from "../Button";
import CustomSelect from "../CustomSelect";
import { Heading } from "../typography";
import PlacesAutocomplete from "react-places-autocomplete";
import scriptLoader from "react-async-script-loader";
import {
  HeroContainer,
  HeroSearchBar,
  HeroWrapper,
  InputHero,
  InputHeroContainer,
  InputLabelHero,
} from "./style";
import { useState } from "react";

const Hero = ({ isScriptLoaded, isScriptLoadSucceed }) => {
  const [address, setAddress] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
  };

  const imgPath = "/home-img.jpg";
  if (isScriptLoaded && isScriptLoadSucceed) {
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
            <PlacesAutocomplete
              value={address}
              onChange={setAddress}
              onSelect={setAddress}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <InputHeroContainer>
                  <InputLabelHero>WHERE</InputLabelHero>
                  <InputHero
                    {...getInputProps({
                      placeholder: "Please enter the place you want to live",
                    })}
                  />
                  <div>
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const style = {
                        backgroundColor: "#f5f5f5",
                        padding: "0.5rem",
                        borderRadius: "0.25rem",
                        margin: "0.5rem",
                        cursor: "pointer",
                      };
                      return (
                        <div {...getSuggestionItemProps(suggestion, { style })}>
                          {suggestion.description}
                        </div>
                      );
                    })}
                  </div>
                </InputHeroContainer>
              )}
            </PlacesAutocomplete>
            <Button onClick={handleClick}>SEARCH</Button>
          </HeroSearchBar>
        </HeroContainer>
      </HeroWrapper>
    );
  } else {
    return <h1>loading...</h1>;
  }
};

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GTH_MAP_API}&libraries=places`,
])(Hero);
