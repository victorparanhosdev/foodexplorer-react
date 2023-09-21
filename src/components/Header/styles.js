import styled from "styled-components";

export const Container = styled.header`
   background: ${({ theme }) => theme.COLORS.DARK_600};
   display: flex;
   align-items: center;

nav {

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(112rem, 95%);
    margin: auto;

button {
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    font-size: 1.4rem;
    
}

.btn-pedido {
    background: ${({ theme }) => theme.COLORS.TINTS_TOMATO};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    padding: 1.6rem 4.65rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

> div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
        width: 3rem;
        height: 3rem;
    }
    span {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
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





`