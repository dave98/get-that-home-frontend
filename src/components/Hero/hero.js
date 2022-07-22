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
  SugestionsItem,
  SugestionsWrapper,
} from "./style";
import { useState } from "react";
import { useProperties } from "../../contexts/properties-context";

const Hero = ({ isScriptLoaded, isScriptLoadSucceed }) => {
  const [address, setAddress] = useState("");
  const { filteredProperties } = useProperties();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      address: address,
      propertyType: e.target.property_type.value,
      transactionType: e.target.transaction_type.value,
    };
    filteredProperties(data);
  };

  const imgPath = "/hero-cover.svg";
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
          <HeroSearchBar
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onSubmit={handleSubmit}
          >
            <CustomSelect
              label={"I'M LOOKING FOR"}
              name={"property_type"}
              options={["aparment", "house"]}
            />
            <CustomSelect
              label={"I WANT TO"}
              name={"transaction_type"}
              options={["rent", "sale"]}
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
                  <SugestionsWrapper>
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion, i) => {
                      return (
                        <SugestionsItem
                          key={`${i}-itemID`}
                          {...getSuggestionItemProps(suggestion)}
                        >
                          {suggestion.description}
                        </SugestionsItem>
                      );
                    })}
                  </SugestionsWrapper>
                </InputHeroContainer>
              )}
            </PlacesAutocomplete>
            <Button type="submit">SEARCH</Button>
          </HeroSearchBar>
        </HeroContainer>
      </HeroWrapper>
    );
  } else {
    return <h1>loading...</h1>;
  }
};

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=AIzaSyA5kEmbyBuoEHTi0lcQ9Ytr73QWePlFhow&libraries=places`,
])(Hero);
