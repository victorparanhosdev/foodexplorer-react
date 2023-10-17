import styled from "styled-components";

export const Container = styled.header`
   background: ${({ theme }) => theme.COLORS.DARK_600};
   display: flex;
   align-items: center;

.menu-mobile {
    display: none;
}

.logo {
    display: flex;
    gap: 1rem;
    img {
        width: 3rem;
        height: 3rem;
    }
    span {
        white-space: nowrap;
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    .admin {
        color: ${({theme})=> theme.COLORS.TINTS_CAKE_200};
        font-family: "Roboto", sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
        text-align: end;
    }
}


.btn-pedido, .btn-newdish {
    white-space: nowrap;
    background: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    padding: 1.6rem 4.65rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    transition: background 0.3s;
    &:hover {
        background: ${({theme})=> theme.COLORS.TINTS_TOMATO_HOVER};
    }
}



nav {

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(112rem, 95%);
    margin: auto;

 

button, a {
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    font-size: 1.4rem;
    
}




> div:nth-child(2) {
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 0.5rem;
    padding-inline: 1.2rem;
    height: 4.8rem;
    width: min(40.9rem, 100%);
    svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    input {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        width: 100%;
        padding-block: 1.6rem;
        outline: none;
        border: none;
        background: transparent;
        margin-left: 1.4rem;
        font-family: 'Roboto', sans-serif;
    }

    &:focus-within {
        outline: 2px solid ${({ theme }) => theme.COLORS.LIGHT_400};;
    }
}




}



@media (max-width: 430px){
    nav {display: none}



    menu.menu-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(112rem, 95%);
    margin: auto;

     
    

    .menu-hamburguer {
    width: 3rem;
    height: 3rem;
    display: grid;
    place-items: center;

    }

    
    .line-one, .line-two, .line-three {
        background-color: white;
        width: 100%;
        height: 1px;

    }


    .btn-pedido {
        padding: 0;
        background: none;
        position: relative;
        svg {
            width: 3.2rem;
            height: 3.2rem;
        }
        span {
            background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
            font-size: 1.4rem;
            border-radius: 50%;
            position: absolute;
            width: 2rem;
            height: 2rem;
            text-align: center;
            top: -0.5rem;
            right: -0.5rem;
        }
    }



    .menu-toggle {
        display: none;
      
    }

    }


    






}


`