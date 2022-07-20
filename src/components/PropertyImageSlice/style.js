import styled from "styled-components";
import { colors } from "../../style";
import { RedesContainer } from "../Usercard/style";



export const SlicesWrapper = styled.div`
  width: 830px;
  height: 384px;
  background-color: ${colors.grays.shallow};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
`
export const ButtonArrow = styled.button`
  width: 16px;
  heigth: 18px;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: ${colors.grays.light};
  font-size: 12px;
  &:hover {
    color: ${colors.grays.dark};
    font-size:24px;
    transition: 0.3s ease-in;
  }
}
`
export const ImgesContainer = styled.div`
  background-color: ${colors.blues.shallow};
  width: 512px;
  height: 384px;
  padding: 20px 0;
`



