import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 10.4rem auto 7.7rem;
  grid-auto-columns: 100%;
  background: ${({ theme }) => theme.COLORS.DARK_400};
  
  @media (max-width: 430px) {
    grid-template-rows: auto 7.7rem;
  }
`;

export const Content = styled.section`
  margin: 0 auto;
  padding-block: 2.4rem;
  width: min(112rem, 95%);

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

  .dish {
    margin-top: 4.2rem;
    display: flex;
    gap: 4.7rem;
    align-items: center;

    > div:first-child {
      min-width: 39rem;
      width: 39rem;

      img {
        display: block;
        width: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    > div:last-child {
   

      > h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 4rem;
        font-weight: 500;
      }
      > p {
        margin-top: 2.4rem;
        font-size: clamp(1.6rem, 1vw + 1rem, 2.4rem);
        font-weight: 300;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }

      .tags-food {
        margin-top: 2.4rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1.2rem;
        span {
          background: ${({ theme }) => theme.COLORS.DARK_1000};
          border-radius: 0.5rem;
          padding: 0.4rem 0.8rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          font-weight: 400;
        }
      }
    }
  }

  div.box-incluir {
    display: flex;
    gap: 1.6rem;
    margin-top: 4.8rem;
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
      border: none;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: ${({ theme }) => theme.COLORS.TINTS_TOMATO_HOVER};
      }
    }
  }

  @media (max-width: 430px) {
    margin-top: 10.4rem;


    div.box-incluir >div input {
      font-size: 2rem;
    }

    div.box-incluir .btn-incluir {
      width: 100%;
    }
    .dish {
      flex-direction: column;
      display: flex;
  


      > div:first-child {
      


        img {
        width: 26.4rem;
        height: 26.4rem;
        margin: auto;
        }

      }
 
      > div:last-child {
        place-self: stretch;

        >h1{
        font-size: 2.7rem;
        text-align: center;
        }
        >p {
          text-align: center;
        }
        .tags-food {
          justify-content: center;
        }
        
   
      } 
    }



  }



`;
