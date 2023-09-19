import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: space-evenly;
background: ${({theme})=> theme.COLORS.DARK_400};

> div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.9rem;

    span {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 4.2rem;
        color: ${({theme})=> theme.COLORS.LIGHT_100};
    }
}


`

export const Form = styled.form`
width: min(47.6rem, 100%);
background: ${({theme})=> theme.COLORS.DARK_700};
padding: 6.4rem;
border-radius: 1.6rem;

h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 3.2rem;
    text-align: center;
    color: ${({theme})=> theme.COLORS.LIGHT_100};
}

button {
    background: ${({theme})=> theme.COLORS.TINTS_TOMATO};
    color: ${({theme})=> theme.COLORS.LIGHT_100};
    border: none;
    padding: 1.2rem 3.2rem;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    border-radius: 0.5rem;
    margin-bottom: 3.2rem;
    cursor: pointer;
   }

a {
    display: block;
    font-family: 'Poppins', sans-serif;
    color: ${({theme})=> theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
    text-align: center;
}

`