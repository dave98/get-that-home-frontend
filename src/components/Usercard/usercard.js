import { UserContainer, ImgUser, RedesContainer } from "./style";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { Heading } from "../typography";
import { colors } from "../../style/colors";

function UserCard({ name, src, github, linkedin }) {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <UserContainer>
      <ImgUser src={src} alt={name} />
      <Heading size="sm" weight="400" color={colors.grays.dark} font="primary">
        {name || "Nombre Apellido"}
      </Heading>
      <RedesContainer>
        <AiOutlineGithub
          size={28}
          onClick={() => handleClick(github)}
          style={{ cursor: "pointer" }}
        />
        <AiFillLinkedin
          size={28}
          onClick={() => handleClick(linkedin)}
          style={{ cursor: "pointer" }}
        />
      </RedesContainer>
    </UserContainer>
  );
}

export default UserCard;
