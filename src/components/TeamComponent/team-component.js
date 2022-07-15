import { colors } from "../../style/colors";
import { Heading } from "../typography";
import { TeamComponentWrapper, TeamContainer } from "./style";

const TeamComponent = () => {
  return (
    <TeamComponentWrapper>
      <Heading size="lg" weight="600" color={colors.blues.light}>
        Meet the team
      </Heading>
      <TeamContainer></TeamContainer>
    </TeamComponentWrapper>
  );
};

export default TeamComponent;
