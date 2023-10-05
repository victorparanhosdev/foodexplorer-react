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

`;
