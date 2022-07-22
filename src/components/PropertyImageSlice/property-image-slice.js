import { useEffect, useState } from "react";
import { MdArrowBackIosNew,MdOutlineArrowForwardIos } from "react-icons/md";
import { ButtonArrow, ImagesImage, ImgesContainer, SlicesWrapper } from "./style";

const PropertyImageSlice = ({imgs = []}) => {
    const [images, setImages] = useState(imgs);
    const [currentImage, setCurrentImage] = useState(0);

    function handleNextPage(){
        if(images.length){
            setCurrentImage( (currentImage + 1) % images.length);
        }
    }
    
    function handlePrevPage(){
        if(images.length){
            let tCurrent = currentImage - 1;
            setCurrentImage(tCurrent < 0 
                ? (((tCurrent % images.length)  + images.length) % images.length) 
                : tCurrent % images.length 
            )
        }
    }

    return( 
        <SlicesWrapper>
            <ButtonArrow
                onClick={() => {handlePrevPage()}}
                whileHover={{scale: 1.3}}
                whileTap={{scale: 1.6}}
            >
                <MdArrowBackIosNew  size={30}/>
            </ButtonArrow>
            <ImgesContainer>
                {
                    images.length 
                    ? <ImagesImage src={images[currentImage]}/>
                    : <ImagesImage src="/empty-street-rafiki.svg"/>
                }
            </ImgesContainer>
            <ButtonArrow
                onClick={() => {handleNextPage()}}
                whileHover={{scale: 1.3}}
                whileTap={{scale: 1.6}}
            >
                <MdOutlineArrowForwardIos size={30} />
            </ButtonArrow>
        </SlicesWrapper>
    )
};

export default PropertyImageSlice;  
