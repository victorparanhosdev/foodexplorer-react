import styled from "styled-components";

export const Container = styled.div`
min-height: 100vh;
display: grid;
grid-template-rows: 10.4rem auto 7.7rem;
grid-auto-columns: 100%;
background: ${({theme})=> theme.COLORS.DARK_400};

@media (max-width: 430px){
    grid-template-rows: auto 7.7rem;
}

`

export const Content = styled.section`

margin: 0 auto;
padding-block: 2.4rem;
width: min(112rem, 95%);

@media (max-width: 430px){
    margin-top: 10.4rem;
}

>h1 {
    color: ${({theme})=> theme.COLORS.LIGHT_300};
    font-family: "Poppins", "sans-serif";
    font-weight: 500;
    font-size: 3.2rem;
}
> div {
    margin: 3.2rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(23.1rem, 1fr));
    gap: 4.8rem;
}

 .card {

    display: flex;
    align-items: center;
    gap: 1.3rem;
      
        img {
            display: block;
            width: 7.2rem;
             height: 7.2rem;
        }

    a{
        color: ${({theme})=> theme.COLORS.LIGHT_300};
        font-family: "Poppins", "sans-serif";
        font-size: 2rem;
        font-weight: 500;
        display: block;

        
    }


    button {
    color: ${({theme})=> theme.COLORS.TINTS_TOMATO_400};
    border: none;
    background-color: transparent;
    font-family: 'Robotto',sans-serif;
    font-size: 1.2rem;
    transition: color 0.2s;
        
        &:hover {
            color: ${({theme})=> theme.COLORS.TINTS_TOMATO_HOVER};
        }


 }






}



`
