import styled from "styled-components";

export const Container = styled.div`
min-height: 100vh;
display: grid;
grid-template-rows: 10.4rem auto auto 7.7rem;
grid-auto-columns: 100%;
background: ${({theme})=> theme.COLORS.DARK_400};

`

export const Content = styled.section`


.card-principal::after {
        position: absolute;
        content: '';
        display: block;
        inset: 0;
        z-index: 1;
        background: linear-gradient(to left, rgba(0, 10, 15, 0.9) 0%, rgba(0, 10, 15, 0) 10%, rgba(0, 10, 15, 0) 95%, rgba(0, 10, 15, 0.9) 100%);
        pointer-events: none;
}



.swiper-button-prev:after, .swiper-button-next:after {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.75rem;


}
.card {
    position: relative;
    background: ${({ theme }) => theme.COLORS.DARK_200};

    width: 30.4rem;
    min-height: 46.2rem;
    height: auto;
  
    border-radius: 0.8rem;
    padding: 5rem 2.4rem 2.4rem;

   



    .btn-fav-edit {
        position: absolute;
        top: 1.5rem;
        right: 2.5rem;
        border: none;
        background: transparent;
        color: white;
        display: flex;
    }

}

.showdish {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    display: grid;
    gap: 1.5rem;
    place-items: center;

    border: none;
    background: transparent;

    div.dish {
    width: 17.6rem;
    height: 17.6rem;
    margin: auto;
  

    svg {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        color: ${({theme})=> theme.COLORS.LIGHT_300};
        cursor: pointer;

    }
    
    img {
        width: 100%;
    }

    }


    > h1 {
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;

    }

    > p{
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: start;
    }
    > span {
        color: ${({theme})=> theme.COLORS.TINTS_CAKE_200};
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 2.4rem;
    }

    > div:last-child {
        display: flex;
        gap: 1.6rem;

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

}

`
