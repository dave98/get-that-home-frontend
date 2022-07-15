import styled from "@emotion/styled";
import { colors } from "../../style/colors";
import { typography } from "../../style/typography";

export const UserContainer = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  width: 240px;
  height: 273px;
`
export const ImgContainerUser = styled.div`
  background-color: ${colors.black};
  display: flex;
  justify-content:center;
  border-radius: 8px;
  width: 180px;
  height: 180px;
`
export const ImgUser = styled.img`
  background-color: ${colors.white};
  border-radius:100%;
  width: 180px;
  height: 180px;
`
export const UserText = styled.p`
  font-seze: ${typography.head.xs};
  color: ${colors.grays.dark};
`
export const InformationUser = styled.div`
  color: ${colors.grays.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const RedesContainer = styled.div`
  display: flex;
  align-items: center;
`
export const RedesContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 112px;
  height: 40px;
`