import { styled } from 'styled-components'


export const Centralizer = styled.div` 
    display: grid;
    place-items: center;
    height: ${({ height }) => height || "calc(100vh - 88px)"};
    position: relative;
`
export const CustomBox = styled.div`
    margin: ${({ margin }) => margin} ;
    margin-block: ${({ block }) => block};

    margin-inline: ${({ inline }) => inline};
    margin-bottom: ${({ bottom }) => bottom};
    margin-top: ${({ top }) => top};
    padding: ${({ padding }) => padding};
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
export const EmptyDataWrapper = styled.div`
.Polaris-VerticalStack img {
    width: 200px;
    aspect-ratio: 1/1;
    margin-block: 26px;
    border: 1px solid var(--p-color-bg-inverse-active);
    border-radius: 8px;
}
`

export const FlexContainer = styled.div`
    diplay: flex;
    flex-direction: ${({ flex }) => flex || "row"};
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
    gap: ${({ gap }) => gap};
`

export const TableWrapper = styled.div`
    .Polaris-DataTable {
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }
`

export const NavigationWrapper = styled.div`
.Polaris-Navigation__Item:has(a[href="/organization"]) h3 {
    color: var(--p-color-bg-primary);
}

.Polaris-Navigation__Icon {
    margin: 0 .45rem 0 0;
    height: 100%;
    display: inline-grid;
    place-items: center;
}
.Polaris-Navigation__Item:has(a[href="/organization"]) .Polaris-Icon__Svg,
.Polaris-Navigation__Item:has(.active) .Polaris-Icon__Svg {
    fill: var(--p-color-bg-primary);
}
`