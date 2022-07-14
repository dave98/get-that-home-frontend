import { UserContainer, ImgContainerUser,
       ImgUser, UserText, InformationUser, 
       RedesContainer, RedesContainer2} from "./style";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai"

function UserCard(){
  return(
    <UserContainer>
      <ImgContainerUser>
        <ImgUser/>
      </ImgContainerUser>
      <InformationUser>
        <UserText>asjkdh asdds</UserText>
        <RedesContainer>
          <RedesContainer2>
            <AiOutlineGithub/>
            <AiFillLinkedin/>
          </RedesContainer2>
        </RedesContainer>
      </InformationUser>
    </UserContainer>
  )
}

export default  UserCard ;