import styled from "styled-components";
import { colors } from "../../style";



export const MutableComponentWarrper = styled.div`
  background-color: ${colors.grays.shallow};
  padding: 32px;
  width: 290px;
  height: 248px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const MutableComponentContainer = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 22px;
  gap: 16px;
  width: 226px;
  height: 184px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`