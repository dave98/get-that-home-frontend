// import { useState } from "react";
import { MdArrowBackIosNew,MdOutlineArrowForwardIos } from "react-icons/md";
import { ButtonArrow, ImgesContainer, SlicesWrapper } from "./style";

const PropertyImageSlice = ({images}) => {
    // const [images, setImages] = useState([]);
    // const [currentImage, setCurrentImage] = useState([]);

    const handleNextPage = () => {
    //   setCurrentImage(>)
}

    const handlePrevPage = () => {
    //   setCurrentImage(<)
    }

    return( 
      <SlicesWrapper>
        <ButtonArrow><MdArrowBackIosNew /></ButtonArrow>
        <ImgesContainer></ImgesContainer>
        <ButtonArrow><MdOutlineArrowForwardIos /></ButtonArrow>
        </SlicesWrapper>
    )
};

export default PropertyImageSlice;  
