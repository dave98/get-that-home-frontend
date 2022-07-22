import { useEffect } from "react";
import CreatePropertyForm from "../components/CreateProperty";
import { useIndividualProperty } from "../contexts/individual-property-context";
import { EditPropertyWrapper, FriendlyImage, FriendlyImageContainer } from "./pages-styles";

export default function CreatePropertyPage(){
    const {setCurrentOperation} = useIndividualProperty();

    useEffect(() => {
        setCurrentOperation("create");
    }, [])

    return(
        <EditPropertyWrapper>
            <CreatePropertyForm/>
            <FriendlyImageContainer  initial={{ scale: 0 }} animate={{ scale: 1 }}>
                <FriendlyImage src="/select-house-rafiki.svg"/>
            </FriendlyImageContainer>
        </EditPropertyWrapper>
    )
}