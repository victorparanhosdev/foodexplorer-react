import styled from "styled-components";

export const Container = styled.div`
min-height: 100vh;
display: grid;
grid-template-rows: 10.4rem;
grid-auto-columns: 100%;
background: ${({theme})=> theme.COLORS.DARK_400};


div.dish {
    width: 17.6rem;
    height: 17.6rem;
    margin: auto;
    
    img {
        width: 100%;
    }
}

.card-principal {
    display: grid;
    grid-auto-flow: column;
    width: 100%;
    overflow-x: scroll;
    gap: 2.7rem;
}

.card {
    color: white;
    background: ${({theme})=> theme.COLORS.DARK_200};
    width: 30.4rem;
    height: 46.2rem;
}

`
