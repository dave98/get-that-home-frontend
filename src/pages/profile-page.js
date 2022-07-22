import { Fragment } from "react";
import { useAuth } from "../contexts/auth-context";
import { FriendlyImage, LostImageContainer, ProfileContainer, ProfileDescription, ProfileDescriptionContainer, ProfileImage, ProfileImageContainer, ProfileName } from "./pages-styles";

export default function Profile(){
    const {user} = useAuth();
    return (
        <ProfileContainer>
            {
                user 
                ?   
                    <Fragment>

                        <ProfileImageContainer initial={{y:20, opacity: 0}} animate={{y:0, opacity: 1}} transition={{delay: 0.1}}>
                            <ProfileImage src={user.avatar_url}/>
                        </ProfileImageContainer>
                        
                        <ProfileDescriptionContainer initial={{y:20, opacity: 0}} animate={{y:0, opacity: 1}} transition={{delay: 0.4}}>
                            <ProfileName>{user.name}</ProfileName>
                            <ProfileDescription>{user.email}</ProfileDescription>
                        </ProfileDescriptionContainer>

                    </Fragment> 
                : 
                    <LostImageContainer height={600}>
                        <FriendlyImage src="/lost-bro.svg"/>                        
                        <ProfileName>Well... apparently there is nothing to show</ProfileName>
                    </LostImageContainer>
            }   

                

        </ProfileContainer>
    )
}