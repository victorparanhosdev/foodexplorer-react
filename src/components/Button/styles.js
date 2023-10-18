import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  display: flex;
  gap: 1.6rem;
  margin-top: 1.5rem;

  > div {
    display: flex;
    input,
    button {
      background-color: transparent;
      color: white;
      border: none;
      display: flex;
      align-items: center;
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
    width: 100%;
    border: none;
    cursor: pointer;
    transition: background 0.3s;
        
        &:hover {
        background: ${({theme})=> theme.COLORS.TINTS_TOMATO_200};
        }
  }

  @media (max-width: 430px){
    display: grid;
    justify-content: stretch;

     >div {
      justify-content: center;
   
     }
     .btn-incluir {
      padding: 0.4rem;
     }
  }

`;
