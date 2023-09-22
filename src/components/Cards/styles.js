import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const Card = styled(SwiperSlide)`  

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    background: ${({ theme }) => theme.COLORS.DARK_200};
    width: 30.4rem;
    height: 46.2rem;
    border-radius: 0.8rem;
    padding: 2.4rem;
    display: grid;
    gap:1.5rem;
    align-content: space-around;
    place-items: center;

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
    text-align: center;
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




`