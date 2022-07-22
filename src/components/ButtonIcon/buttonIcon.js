import { ButtonIconContainer, ButtonIconImage, ButtonIconLabel, ButtonIconLabelContainer } from "./style";

export default function ButtonIcon({radius, rotate, children, image, onClick}){
    return (
        <ButtonIconContainer 
            radius={radius}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 1.3}}
            onClick={onClick}
        >
            {
                image
                    ? <ButtonIconImage 
                        src={image}
                        whileTap={ rotate ? {
                            scale: 0.2,
                            rotate: -270,
                            opacity: 0
                        } : null}
                    />
                    : null
            }
            <ButtonIconLabelContainer>
                <ButtonIconLabel>
                    {children}
                </ButtonIconLabel>
            </ButtonIconLabelContainer>

        </ButtonIconContainer>
    )
}