import styled from "styled-components";

export const Container = styled.section`
    width: min(112rem, 95%);
    margin: auto auto 4.8rem;

    > h1 {
        text-align: start;
        font-size: 3.2rem;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
        color: ${({theme})=> theme.COLORS.LIGHT_300};
        margin-bottom: 2.372rem;
    }



`