import { styled } from 'styled-components'

export const PasswordInputWrapper = styled.div`
    position: relative;
    .Polaris-Button {
        position: absolute;
        top: 25px;
        left: 80%;
        z-index: var(--p-z-index-3);
        min-height: var(--p-font-line-height-4);
        border: none;
        box-shadow: none;
        background: transparent;
        &:hover {
            background: transparent;
        }
        @media (min-width: 475px){
            left: 85%;
        }
        @media (min-width: 575px){
            left: 88%;
        }
    }

`
