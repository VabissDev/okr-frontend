import { styled } from 'styled-components'

export const FormWrapper = styled.div`
    display: grid;
    place-items: center;
    height: calc(100vh - 88px);
    position: relative;

    .Polaris-Box {
        width: 300px;
        @media (min-width: 475px){
            width: 400px;
        }
        @media (min-width: 575px){
            width: 500px;
        }
    }

    .Polaris-FormLayout {
        margin-top: 30px;
    }

    .Polaris-Checkbox__Backdrop::before {
        background-color: var(--p-color-bg-primary);
    }
`

export const LoginPageHeader = styled.header`
    background-color: var(--p-color-bg);
    padding-inline: 20px;
    box-shadow: var(--p-shadow-md);
    .Polaris-Thumbnail {
        border: none;
    }
`

export const GridLayout = styled.div`
    display: grid;
    grid-template-columns:  ${({ columns }) => columns || "auto"};
    grid-template-rows:  ${({ rows }) => rows || "auto"};
    gap: ${({ gap }) => gap};

    .Polaris-Page {
        height: calc(100vh - 56px)
    }
`