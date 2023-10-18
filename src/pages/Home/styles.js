import styled from "styled-components";

export const Container = styled.div`
min-height: 100vh;
display: grid;
grid-template-rows: 10.4rem auto auto 7.7rem;
grid-auto-columns: 100%;
background: ${({ theme }) => theme.COLORS.DARK_400};


@media (max-width: 430px){
    grid-template-rows: auto auto 7.7rem;
}

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
    display: grid;
    place-content: center;
    width: 30.4rem;
    min-height: 46.2rem;
    height: auto;
    z-index: 0;
    border-radius: 0.8rem;
    padding: 2.4rem;

   



    .btn-fav-edit {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        border: none;
        background: transparent;
        color: white;
        display: flex;
        z-index: 1;
        padding: 0.5rem;
    }

}

.showdish {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    display: grid;
    gap: 1.5rem;
    place-items: center;

    

    div.dish {
    width: 17.6rem;
    height: 17.6rem;
    margin: auto;
        

    svg {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        cursor: pointer;

    }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
    }

    }


    .btn-showdish {
        width: 100%;
        overflow: hidden;
     white-space: nowrap;
     text-overflow: ellipsis;
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    background-color: transparent;
    border: none;

    }

    > p{
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
    }
    > span {
        color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
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
        background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-weight: 400;
        padding: 1.2rem 2.4rem;
        border-radius: 0.5rem;
        border: none;
        cursor: pointer;
      
       }
    
    }

}

@media (max-width: 430px){
    .card {
        width: 21rem;
        margin-right: 1.6rem !important ;
        min-height: 29.2rem;
        place-content: stretch;
    }
    .showdish div.dish {
        width: 8.8rem;
        height: 8.8rem;
    }
    .showdish >h1 {
    font-size: 1.4rem;
    }
    .showdish > p {
        display: none;
    }

    .showdish .btn-showdish {
        font-size: 1.4rem;
    }
    


}

`
