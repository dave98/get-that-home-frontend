import styled from "styled-components";
import { colors, typography } from "../../style";

export const CreateUserFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background.light};
  min-height: 468px;
  height: fit-content;
  width: 388px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 0px 1rem;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);
`;

export const CreateUserFormTitle = styled.h1`
  ${typography.head.sm}
  ${typography.weight[400]}
  color: ${colors.black};
  margin: 1rem;
  cursor: default;
`;
