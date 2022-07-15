import { useNavigate } from "react-router-dom";
import { colors } from "../../style/colors";
import Button from "../Button";
import { Heading } from "../typography";
import { CallToActionWrapper } from "./style";

const CallToAction = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("join");
  };

  return (
    <CallToActionWrapper>
      <Heading color={colors.grays.dark} weight={400}>
        Getting someone to rent your apartment has never been this easy
      </Heading>
      <Button onClick={handleClick}>CREATE AN ACCOUNT NOW</Button>
    </CallToActionWrapper>
  );
};

export default CallToAction;
