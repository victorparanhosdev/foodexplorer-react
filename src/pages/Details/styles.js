import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
display: grid;
grid-template-rows: 10.4rem auto 7.7rem;
grid-auto-columns: 100%;
background: ${({theme})=> theme.COLORS.DARK_400};



`

export const Content = styled.section`

margin: 0 auto;
padding-block: 2.4rem;
width: min(112rem, 95%);


.box-btn-back {
    button {
        display: flex;
        align-items: center;
        border: none;
        background: none;
        color: ${({theme})=> theme.COLORS.LIGHT_100};
        font-size: 2.4rem;
        font-weight: 700;
        svg {
        color: ${({theme})=> theme.COLORS.LIGHT_100};
        font-size: 2.2rem;
        }

       
    }
}

.dish {
    margin-top: 4.2rem;
    display: flex;
    gap: 4.7rem;
    align-items: center;
 


    > div:first-child {
            min-width: 39rem;



            img {
                display: block;
                width: 100%;
            }
    }

    > div:last-child{
        > h1 {
            color: ${({theme})=> theme.COLORS.LIGHT_100};
            font-size: 4rem;
            font-weight: 500;
        
        }
        > p {
            margin-top: 2.4rem;
            font-size: 2.4rem;
            font-weight: 300;
            color: ${({theme})=> theme.COLORS.LIGHT_100};
        }

        .tags-food {
            margin-top: 2.4rem;
            display: flex;
            gap: 1.2rem;
            span {
                background: ${({theme})=> theme.COLORS.DARK_1000};
                border-radius: 0.5rem;
                padding: 0.4rem 0.8rem;
                color: ${({theme})=> theme.COLORS.LIGHT_100};
                font-weight: 400;
            }
        }
        
    }

   



}

div.box-incluir {
        display: flex;
        gap: 1.6rem;
        margin-top: 4.8rem;
        > div {
            display: flex;


            input, button {
            background-color: transparent;
            color: white;
            border: none;
            }

            input {
                text-align: center;
                width: 4rem;
                outline: none;
            }


        }

      

       .btn-incluir {
        background-color: ${({theme})=> theme.COLORS.TINTS_TOMATO_100};
        color: ${({theme})=> theme.COLORS.LIGHT_100};
        font-weight: 400;
        padding: 1.2rem 2.4rem;
        border-radius: 0.5rem;
        border: none;
        cursor: pointer;
       }
    
    }



`
