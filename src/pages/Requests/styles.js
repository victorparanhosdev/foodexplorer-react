import styled from "styled-components";

export const Container = styled.div`
min-height: 100vh;
display: grid;
grid-template-rows: 10.4rem auto 7.7rem;
grid-auto-columns: 100%;
background: ${({ theme }) => theme.COLORS.DARK_400};
@media (max-width: 430px){
    grid-template-rows: auto 7.7rem;
    
}

`

export const Content = styled.section`
margin: 0 auto;
padding-block: 3.4rem;
width: min(112rem, 95%);
display: flex;
justify-content: space-between;
gap: 7.5rem;

.empty-cart {

    width: min(112rem, 95%);
    margin: auto;
        img {
            width: min(100%, 60rem);
        }




    .text {
        h2 {
            color: ${({theme})=> theme.COLORS.LIGHT_100};
        }
        p {
            color: ${({theme})=> theme.COLORS.LIGHT_100};
            margin-top: 1rem;
            strong {
                color: ${({theme})=> theme.COLORS.TINTS_TOMATO_300};
            }
        }

      
    }

    button {
            border: none;
            background-color: ${({theme})=> theme.COLORS.TINTS_TOMATO_100};
            padding: 1rem;
            border-radius: 0.5rem;
            color: ${({theme})=> theme.COLORS.LIGHT_100};
            margin-top: 2rem;
            transition: background 0.2s;
     
            &:hover {
                background-color: ${({theme})=> theme.COLORS.TINTS_TOMATO_200};
            }
        }
}


@media (max-width: 430px){
    justify-content: stretch;
    .empty-cart button {
        width: 100%;
    }
    
}


.selected {
    background-color:  ${({ theme }) => theme.COLORS.DARK_800};
}

h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 3.2rem;
    font-weight: 400;
    margin-bottom: 3.2rem;
}
> div:nth-child(1){


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
                transition: color 0.2s;
        
        &:hover {
            color: ${({theme})=> theme.COLORS.TINTS_TOMATO_HOVER};
        }
            }
        }


        


    }
    .viewtotal {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-size: 2rem;
            font-weight: 400;
            padding-block: 1.6rem;
        }


}

@media (max-width: 430px){
    margin-top: 10.4rem;
    display: grid;
    width: 100%;
}


`

export const PayMent = styled.div`

table {
width: 53rem;
height: 44.5rem;
border-radius: 0.8rem;
border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
thead {
    tr {
        height: 8.1rem;

    }

td {

    text-align: center;
    width: 50%;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};

}

td:nth-child(1) {

    border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
}

button {
    
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: 'Roboto', 'sans-serif';
    font-size: 1.6rem;
    font-weight: 400;

    &:hover{
        background-color:  ${({ theme }) => theme.COLORS.DARK_800};
    }
}

}

tbody {
  
 tr td {
    text-align: center;
 }


 .cartao-credit {
    width: 34.8rem;

    margin: auto;
    display: grid;
    gap: 3.7rem;
    label {
        font-family: "Roboto", "sans-serif";
        display: block;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 1.6rem;
        text-align: start;
        margin-bottom: 0.8rem;
    }
    input {
        padding: 1.2rem 1.4rem;
        width: 100%;
        background-color: transparent;
        border-radius: 0.5rem;
        color:  ${({ theme }) => theme.COLORS.LIGHT_500};
        border: 1px solid  ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    button {
        background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
        padding: 1.2rem 3.2rem;
        width: 100%;
        border: none;
       color: ${({ theme }) => theme.COLORS.LIGHT_100};
       border-radius: 0.5rem;
       display: flex;
       align-items: center;
       justify-content: center;
       gap: 0.8rem;
       height: 5.6rem;
       transition: background 0.3s;
        
        &:hover {
        background: ${({theme})=> theme.COLORS.TINTS_TOMATO_HOVER};
        }
    }

    .v-cartao {
        display: flex;
        gap:1.7rem;
    }
 }

}

}

> h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 3.2rem;
    font-weight: 400;
    margin-bottom: 3.2rem;
}


@media (max-width: 430px){
    
    table {
        width: 100%;
       
    }
   
}


`