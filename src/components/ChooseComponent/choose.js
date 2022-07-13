import SimpleCard from "../SimpleCard/simple-card";
import {
  SignUpCardContainer,
  SignUpHomeHeadSubtitle,
  SignUpHomeHeadTitle,
} from "./style.js";

const cardsData = [
  {
    title: "Landlord",
    description: "You want to rent or sell a property",
    img: "/for-sale-cuate.svg",
    route: "/join/landlord",
  },
  {
    title: "Home Seeker",
    description: "You want to find a property",
    img: "/house-searching-cuate.svg",
    route: "/join/home-seeker",
  },
];

const ChooseComponent = () => {
  return (
    <>
      <SignUpHomeHeadSubtitle>
        Choose the profile that most identifies you
      </SignUpHomeHeadSubtitle>
      <SignUpHomeHeadTitle>What are you looking for?</SignUpHomeHeadTitle>
      <SignUpCardContainer>
        {cardsData.map((card) => (
          <SimpleCard key={card.title} {...card} />
        ))}
      </SignUpCardContainer>
    </>
  );
};

export default ChooseComponent;
