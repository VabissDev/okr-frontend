import { styled } from 'styled-components'


export const Centralizer = styled.div` 
    display: grid;
    place-items: center;
    height: ${({ height }) => height || "calc(100vh - 88px)"};
    position: relative;
`

export const FormWrapper = styled(Centralizer)`

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

export const HomeLayout = styled.div`
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4NIklqJTxjEGIrZNcTemhKuCYKUdn-R_sILlEPhkOdkor9IXI-JrvdD0baIbdy0F4Wc&usqp=CAU");
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;

`