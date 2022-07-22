import { Fragment, useEffect } from "react";
import CreatePropertyForm from "../components/CreateProperty";
import { useIndividualProperty } from "../contexts/individual-property-context";
import { EditPropertyWrapper, FriendlyImage, FriendlyImageContainer, LostImageContainer, LostImageHelperText } from "./pages-styles";

export default function EditProperty(){
    const {setCurrentOperation, selected} = useIndividualProperty();

    useEffect(() => {
        setCurrentOperation("edit");
    }, [])

    return (
        <Fragment>
            {   selected 
                ? 
                    <EditPropertyWrapper>
                        <CreatePropertyForm/>
                        <FriendlyImageContainer 
                            initial={{ x: 30, opacity: 0 }} 
                            animate={{ x: 0, opacity: 1 }}
                            transition={{delay: 0.3}}
                        >
                            <FriendlyImage src="/build-your-home-rafiki.svg"/>
                        </FriendlyImageContainer>
                    </EditPropertyWrapper>
                :   
                <LostImageContainer initial={{scale: 0}} animate={{scale: 1}}>
                    <FriendlyImage src="/lost-bro.svg"/>
                    <LostImageHelperText>Oops! We couldn't find what you are trying to edit...</LostImageHelperText>
                </LostImageContainer>
            }
        </Fragment>
    )
}