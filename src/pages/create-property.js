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
            <FriendlyImageContainer  
                initial={{ x: 30, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }}
                transition={{delay: 0.3}}
            >
                <FriendlyImage src="/select-house-rafiki.svg"/>
            </FriendlyImageContainer>
        </EditPropertyWrapper>
    )
}