import styled from "styled-components";

export const Container = styled.div`

    background: ${({theme})=> theme.COLORS.GRADIENT};
    height: 26rem;
    width: min(112rem, 95%);
    margin: 16.4rem auto 6.2rem;
    border-radius: 0.8rem;
    display: flex;
    gap: 1.2rem;


    img {
        width: min(56.2rem, 100%);
        margin-left: -5rem;
        margin-top: -10rem;
        filter: brightness(1.2);

    }

    > div{
        color: ${({theme})=> theme.COLORS.LIGHT_100};
        margin: auto;
        h1 {
            font-family: "Poppins", sans-serif;
            font-size: 4rem;
            font-weight: 500;
            text-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

        }
        p {
            margin-top: 0.8rem;
            font-size: 1.6rem;
            font-family: "Roboto", sans-serif;
            text-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

        }
    }


@media (max-width: 430px) {
    width: 90%;
    height: 12rem;
    margin-top:18.4rem;
    margin-right: 1.5rem;
    img {
        margin-left: -3rem;
        margin-top: 0rem;
        width: 19.1rem;

    }

 > div{
 
        
        h1 {
            font-size: 1.8rem;
        }
        p {
          font-size: 1.2rem;
        }
    } 
}

   
    






`