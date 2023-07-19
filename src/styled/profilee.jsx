import { styled } from "styled-components";

export const Btn = styled.div`
    border: 1px solid gray;
    border-radius: 12px;
    width: 80px;
    padding: 5px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    list-style: none;
    text-underline-offset: none;
`

export const Space = styled.div`
  display:flex;
  gap: 2rem;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
`

export const Top = styled.div`
  padding-top: ${({ top }) => top || "20px"};;
`

export const Display = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
`


