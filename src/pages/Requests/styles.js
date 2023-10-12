import styled from "styled-components";

export const Container = styled.div`
min-height: 100vh;
display: grid;
grid-template-rows: 10.4rem auto 7.7rem;
grid-auto-columns: 100%;
background: ${({ theme }) => theme.COLORS.DARK_400};



`

export const Content = styled.section`
margin: 0 auto;
padding-block: 3.4rem;
width: min(112rem, 95%);
display: flex;
gap: 7.5rem;

h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 3.2rem;
    font-weight: 400;
    margin-bottom: 3.2rem;
}

    .card{
        padding-block: 1.6rem;
        display: flex;
        gap: 1.3rem;
        align-items: center;


        img {
            width: 7.2rem;
            height: 7.2rem;
        }
        > div {

            div {

                display: flex;
                align-items: center;
                gap: 1rem;

                h2 {
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                font-weight: 400;
                font-size: 2rem;
                }
            span {
                color: ${({ theme }) => theme.COLORS.LIGHT_400};
                font-family: 'Robotto',sans-serif;
                font-size: 1.2rem;
            }

            }

    
            button {
                border: none;
                background: transparent;
                color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
                font-size: 1.2rem;
                font-family: 'Robotto',sans-serif;
            }
        }


        


    }
    .viewtotal {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-size: 2rem;
            font-weight: 400;
            padding-block: 1.6rem;
        }




    > div:nth-child(2){}









`
