import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 10.4rem auto 7.7rem;
  background: ${({ theme }) => theme.COLORS.DARK_400};

  @media (max-width: 430px){
    grid-template-rows: auto 7.7rem;
}
`;

export const Content = styled.section`
  padding-block: 4rem;
  width: min(112rem, 95%);
  margin: 0 auto;
  @media (max-width: 430px){
    margin-top: 10.4rem;
}
  .box-btn-back {
    button {
      display: flex;
      align-items: center;
      border: none;
      background: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2.4rem;
      font-weight: 700;
      svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 2.2rem;
      }
    }
  }

  > h1 {
    text-align: start;
    font-size: 3.2rem;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin: 2.4rem auto 3.2rem;
  }

  .edit-content {
    display: grid;
    gap: 3.2rem;

    span {
      font-family: "Roboto", sans-serif;
      display: block;
      margin-bottom: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
      align-items: center;
    }

    > div:nth-child(1) {
      > div:nth-child(1) {
        label {
          display: flex;
          align-items: center;
          padding: 1.2rem 3.2rem;
          border-radius: 0.8rem;
          background-color: ${({ theme }) => theme.COLORS.DARK_800};
          cursor: pointer;
          gap: 0.8rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
        input {
          display: none;
        }
      }

      > div:nth-child(2) {
        flex: 1;
        input {
          width: 100%;
          padding: 1.2rem 1.4rem;
          background-color: ${({ theme }) => theme.COLORS.DARK_800};
          border-radius: 0.8rem;
          border: none;
          outline: none;
          font-family: "Roboto", sans-serif;
          font-size: 1.6rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
      }
      > div:nth-child(3) {
        select {
          background: ${({ theme }) => theme.COLORS.DARK_800};
          padding: 1.6rem;
          outline: none;
          border: none;
          cursor: pointer;
          border-radius: 0.5rem;
          font-size: 1.4rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }
      }
    }
    > div:nth-child(2) {
      > div:nth-child(1) {
        flex: 1;

        > div {
          display: grid;
          grid-auto-flow: dense;
          grid-template-columns: repeat(auto-fill, 15rem);
          align-items: center;
          gap: 1.6rem;
          padding: 0.8rem;
          background: ${({ theme }) => theme.COLORS.DARK_800};
          border-radius: 0.8rem;
        }
      }
      > div:nth-child(2) {
        input {
          width: 100%;
          padding: 1.2rem 1.4rem;
          background-color: ${({ theme }) => theme.COLORS.DARK_800};
          border-radius: 0.8rem;
          border: none;
          outline: none;
          font-family: "Roboto", sans-serif;
          font-size: 1.6rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
      }
    }
    > div:nth-child(3) {
      display: block;

      textarea {
        display: block;
        width: 100%;
        resize: none;
        border: none;
        outline: none;
        background: ${({ theme }) => theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        font-size: 1.6rem;
        padding: 1.4rem;
        height: 17.2rem;
        border-radius: 0.8rem;
      }
    }
    > div:nth-child(4) {
      place-self: end;

      button {
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        padding: 1.2rem 2.4rem;
        border-radius: 0.5rem;
        font-weight: 400;
        
      }

      button:nth-child(1){
        background: ${({ theme }) => theme.COLORS.DARK_800};
        transition: background 0.3s;
    &:hover {
        background: ${({ theme }) => theme.COLORS.TINTS_TOMATO_200};
    }
      }
      button:nth-child(2) {
        background: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
        transition: background 0.3s;
    &:hover {
        background: ${({ theme }) => theme.COLORS.TINTS_TOMATO_200};
    }
      }
    }
  }

  @media (max-width: 430px){

    .edit-content >div {
      display: grid;
      gap: 2.4rem;
      justify-content: stretch;
    }

    .edit-content >div:nth-child(1) >div:nth-child(3) select {
      width: 100%;
      padding: 1.2rem 1.4rem;
    }

    .edit-content >div:nth-child(4) {
      display: flex;
      place-self: initial;
      button {
        width: 100%;
        white-space: nowrap;
      }
    }
 
     }
`;
