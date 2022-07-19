import styled from "styled-components"
import { colors, typography } from "../../style";
import { RiUserReceived2Fill } from "react-icons/ri";
import { BsSuitHeart } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";

import Button from "../../components/Button/index";

export const PropertydetailWrapper = styled.div`
  background-color: ${colors.white};
  padding: 0px 120px;
  display: flex;
  justify-content: center;
  gap: 16px;
`
export const PropertydetailWrapper2 = styled.div`
background-color: ${colors.grays.light};
padding: 32px;
display: flex;
flex-direction:column;
justify-content: center;
`
export const ImgPropertyWapper = styled.div`
background-color: ${colors.white};
display: flex;
justify-content: center;
align-items: center;
gap: 70px
`
export const ImgsProperty = styled.img`
  width: 512px;
  height: 384px;
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`

// 

export const DatePropertyWapper = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const DatePropertyContainer = styled.div`
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const DatePropertyContainer2 = styled.div`
  background-color: ${colors.background};
  display: flex;
  justify-content: center;
  gap:50px;
`
export const TextAddrres = styled.h5`
  margin: 0px;
  padding:0px;
  font-size: ${typography.head.l};
  color: ${colors.grays.dark};
  font-weight:${typography.weight[400]}
`
export const TextRegion = styled.p`
  font-size: ${typography.subtitle[1]};
  color: ${colors.grays.light};
  font-weight:${typography.weight[400]}
`
export const ContainerFlexStart = styled.div`
background-color: ${colors.background};
display: flex;
flex-direction: column;
justify-content: flex-start;
`
export const ContainerFlexCenter = styled.div`
background-color: ${colors.background};
display: flex;
flex-direction: column;
justify-content: center;
gap: 16px;

`
// contac 
export const ContactWrapper = styled.div`
padding: 32px 16px;
width: 290px;
height: 248px;
`
export const ContactWrapper2 = styled.div`
padding: 16px 20px;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
gap: 20px;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
border-radius: 8px;
flex-wrap: nowrap;
`
export const TextContact = styled.p`
  font-size: ${typography.body.sm}
`
export const TextHeadingL = styled.h3`
  font-size: ${typography.head.l}
  color: ${colors.grays.regular}
`
export const ContainerFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`


export function LoginIn(){
  return(
    <ContactWrapper>
        <ContactWrapper2>
          <TextContact>
            Log in or Join to contact the advertiser
          </TextContact>
          <Button><RiUserReceived2Fill/>Login</Button>
        </ContactWrapper2>
      </ContactWrapper>
  )
}
export function ContactAdvertiser(){
  return(
    <ContactWrapper>
        <ContactWrapper2>
          <Button>ContactAdvertiser</Button>
          <BsSuitHeart/>
          <TextContact>
          Add to favorites
          </TextContact>
        </ContactWrapper2>
      </ContactWrapper>
  )
}
export function ContactInformation(){
  return(
    <ContactWrapper>
        <ContactWrapper2>
              <TextAddrres>Contact Information</TextAddrres>
            <ContainerFlexColumn>
              <TextAddrres>Email</TextAddrres>
              <TextRegion>team6@gmail.com</TextRegion>
            </ContainerFlexColumn> 
            <ContainerFlexColumn>
              <TextAddrres>Email</TextAddrres>
              <TextRegion>team6@gmail.com</TextRegion>
            </ContainerFlexColumn> 
        </ContactWrapper2>
      </ContactWrapper>
  )
}

export function EditProperty(){
  return(
    <ContactWrapper>
          <Button><TiEdit/>Edit Property</Button>
      </ContactWrapper>
  )
}

