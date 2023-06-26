import { styled } from 'styled-components'

export const FormWrapper = styled.div`
display: grid;
place-items: center;

form > & {
    height: calc(100vh - 28px);
}

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

`