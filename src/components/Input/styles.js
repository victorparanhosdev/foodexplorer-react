import styled from "styled-components";

export const Container = styled.div`
    margin: 3.2rem auto;

    span {
        display: block;
        color: ${({theme})=> theme.COLORS.LIGHT_400};
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
    }

    input {
        width: 100%;
        background: ${({theme})=> theme.COLORS.DARK_900};
        border-radius: 0.8rem;
        padding: 1.4rem;
        margin-top: 0.8rem;
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        color: ${({theme})=> theme.COLORS.LIGHT_500};
        border: none;

        &::placeholder{
            color: ${({theme})=> theme.COLORS.LIGHT_500};
            font-family: 'Roboto', sans-serif;
            font-size: clamp(1.4rem, 1vw + 1rem, 1.6rem)
        }
    }


`