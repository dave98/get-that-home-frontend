import CreatePropertyForm from "../components/CreateProperty";
import { EditPropertyWrapper, FriendlyImage, FriendlyImageContainer } from "./pages-styles";

export default function CreatePropertyPage(){
    return(
        <EditPropertyWrapper>
            <CreatePropertyForm/>
            <FriendlyImageContainer  initial={{ scale: 0 }} animate={{ scale: 1 }}>
                <FriendlyImage src="/select-house-rafiki.svg"/>
            </FriendlyImageContainer>
        </EditPropertyWrapper>
    )
}