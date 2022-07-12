import styled from "@emotion/styled";
import { fonts, typography } from "../style/typography";

export const Text = styled.p`
  font-family: ${fonts.secondary};
  ${(props) => typography.subtitle[props.size] || typography.subtitle.md};
  font-weight: ${(props) => props.weight || "400"};
  color: ${(props) => props.color || "inherit"};
`;

export const Heading = styled.h2`
  font-family: ${fonts.primary};
  ${(props) => typography.head[props.size] || typography.head.md};
  font-weight: ${(props) => props.weight || "600"};
  color: ${(props) => props.color || "inherit"};
`;