
import { styled } from "styled-components";

export const FlexText = styled.div`
    display: flex;
    gap: ${({gap})=> gap || "8px"}
`
export const NoneUnderline = styled.div`
    a {
        text-decoration: none;
    }
`

export const ActiveLink = styled(NoneUnderline)`
.active h4 {
    color: var(--p-color-bg-primary);
}
`