
import { styled } from "styled-components";

export const FlexText = styled.div`
    display: flex;
    gap: ${({gap})=> gap || "8px"}
`