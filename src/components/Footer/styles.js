import styled from "styled-components";

export const Container = styled.footer`
background-color: ${({ theme }) => theme.COLORS.DARK_600};
display: flex;
align-items: center;


> div {
    width: min(112rem, 95%);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    
    }
}

.logofooter {
    display: flex;
    align-items: center;
    gap:1rem;


    span {
        font-family: 'Roboto', sans-serif;
        font-weight: 800;
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_700}
    }
}


@media (max-width: 430px){


    > div {

        > p{
            font-size: 1.2rem;
        }
        .logofooter {
            gap: 0.5rem;

            span {
        font-size: 1.52rem;
        }
        svg {
            height: 1.8rem;
            width: 2.2rem;
        }

            }

    



    }

}






`