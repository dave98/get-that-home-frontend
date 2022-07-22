import PropertyImageSlice from "../components/PropertyImageSlice/index"
import PropertyLocation from "../components/PropertyLocation/index"
import PropertyMutableComponent from "../components/PropertyMutableComponent/index"
import ShowPropertyData from "../components/ShowPropertyData/index"
import { ShowPropertyContainer, ShowPropertyWrapper } from "./pages-styles"


const ShowProperty = ({property}) => {

    return (
      <ShowPropertyWrapper>
        <ShowPropertyContainer>
            <PropertyImageSlice />
            <ShowPropertyData />
            <PropertyLocation />
        </ShowPropertyContainer>
            <PropertyMutableComponent />
      </ShowPropertyWrapper>
    )
  }
  
  export default ShowProperty