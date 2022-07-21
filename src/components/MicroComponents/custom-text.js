import { useEffect, useRef, useState } from "react";
import { TextInputContainer, TextInputFooter, TextInputMainContainer, TextInputMainLabel, TextInputText } from "./styles";

export default function CustomText({name, label, value, onChange, placeholder, error, footer, isTouched,  onBlur, ...props}){
    const textAreaRef = useRef(null);
    const [currentValue, setCurrentValue] = useState(value)


    useEffect(() => {
        if(textAreaRef.current){
            textAreaRef.current.style.height = "76px";
            const scrollHeight = textAreaRef.current.scrollHeight;
            textAreaRef.current.style.height = scrollHeight + "px";
        }
    }, [value])

    return (
        <TextInputMainContainer>
            { label && <TextInputMainLabel>{label}</TextInputMainLabel> }
            <TextInputContainer>
                <TextInputText 
                    ref={textAreaRef}
                    autoCapitalize="sentences" 
                    id={name}
                    name={name}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </TextInputContainer>
            {footer && <TextInputFooter>{footer}</TextInputFooter>}
        </TextInputMainContainer>

    )
}