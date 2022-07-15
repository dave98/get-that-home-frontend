import { colors } from "../../style/colors";
import { Heading } from "../typography";
import UserCard from "../Usercard";
import { TeamComponentWrapper, TeamContainer } from "./style";

const teamMembers = [
  {
    name: "Enrique Vizarra",
    src: "/avatar-1.svg",
    github: "https://github.com/enriquevizarra",
    linkedin: "https://www.linkedin.com/in/vizarra-matta-enrique/",
  },
  {
    name: "Dave Mamani",
    src: "/avatar-2.svg",
    github: "https://github.com/dave98",
    linkedin: "https://www.linkedin.com/in/jose-david-mamani-vilca-4032b6119/",
  },
  {
    name: "Kevin López",
    src: "/avatar-3.svg",
    github: "https://github.com/Revocod3",
    linkedin: "https://www.linkedin.com/in/kevin-lopez-full-stack/",
  },
];

const TeamComponent = () => {
  return (
    <TeamComponentWrapper>
      <Heading size="lg" weight="600" color={colors.blues.light}>
        Meet the team
      </Heading>
      <TeamContainer>
        {teamMembers.map((member) => (
          <UserCard
            key={member.name}
            name={member.name}
            src={member.src}
            github={member.github}
            linkedin={member.linkedin}
          />
        ))}
      </TeamContainer>
    </TeamComponentWrapper>
  );
};

export default TeamComponent;
