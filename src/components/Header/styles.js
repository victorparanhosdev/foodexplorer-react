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
      color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
      font-family: "Roboto", sans-serif;
      font-size: 1.2rem;
      font-weight: 400;
      text-align: end;
    }
  }

  .btn-pedido,
  .btn-newdish {
    white-space: nowrap;
    background: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    padding: 1.6rem 4.65rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    transition: background 0.3s;
    &:hover {
      background: ${({ theme }) => theme.COLORS.TINTS_TOMATO_200};
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(112rem, 95%);
    margin: auto;

    button,
    a {
      border: none;
      background: transparent;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: "Roboto", sans-serif;
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
        font-family: "Roboto", sans-serif;
      }

      &:focus-within {
        outline: 2px solid ${({ theme }) => theme.COLORS.LIGHT_400};
      }
    }
  }

  @media (max-width: 430px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10.4rem;
    z-index: 2;

    nav {
      display: none;
    }

    menu.menu-mobile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: min(112rem, 95%);
      margin: auto;

      .menu-hamburguer {
        height: 3.5rem;
        display: block;

        .line-one,
        .line-two,
        .line-three {
          background-color: white;
          width: 3.5rem;
          height: 0.2rem;
          transition: transform 0.2s;
        }
        div:first-child {
          margin-top: 0.5rem;
        }
        div:not(:last-child) {
          margin-bottom: 1rem;
        }
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

      .logo span {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
      }

      .menu-toggle {
        position: absolute;
        inset: 0;
        height: 100vh;
        opacity: 0;
        visibility: hidden;
        width: 100vw;
        z-index: -1;

        .menu-expand {
          position: absolute;
          top: 10.3rem;
          width: 0%;
          height: calc(100vh + 10.4rem);
          background: ${({ theme }) => theme.COLORS.DARK_400};
          padding-top: 3.6rem;
          padding-inline: 2.8rem;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s;
        }
      }
    }
    menu.menu-mobile:has(a):has(span):has(p) {
      justify-content: initial;
      gap: 6.5rem;
    }
    .menu-mobile.active .btn-pedido,
    .menu-mobile.active .logo {
      display: none;
    }

    menu.menu-mobile.active .menu-hamburguer {
      position: relative;
      z-index: 3;

      &::after {
        display: block;
        position: absolute;
        content: "Menu";
        color: white;
        top: 0;
        right: -7.5rem;
        font-size: 2.1rem;
      }
    }
  }

  .menu-mobile.active .menu-toggle {
    display: block;
    opacity: 1;
    visibility: visible;
    z-index: 2;
  }

  .menu-mobile.active .line-two {
    display: none;
  }

  .menu-mobile.active .line-one {
    transform: rotate(42deg) translate(0.8rem, 0.8rem);
  }

  .menu-mobile.active .line-three {
    transform: rotate(-42deg) translate(0rem, 0rem);
  }

  .menu-mobile.active .menu-toggle .menu-expand {
    opacity: 1;
    visibility: visible;
    width: 100%;

    > div:nth-child(1) {
      display: flex;
      align-items: center;
      background: ${({ theme }) => theme.COLORS.DARK_900};
      border-radius: 0.5rem;
      padding-inline: 1.2rem;
      height: 4.8rem;
      width: min(40.9rem, 100%);
      margin-bottom: 3.6rem;
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
        font-family: "Roboto", sans-serif;
      }

      &:focus-within {
        outline: 2px solid ${({ theme }) => theme.COLORS.LIGHT_400};
      }
    }

    a {
      background: transparent;
      padding: 1rem;
      text-align: start;
      display: block;
      font-size: 2.4rem;
      font-weight: 200;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }
    button {
      border: none;
      background: transparent;
      color: white;
      font-size: 2.4rem;
      display: block;
      padding: 1rem;
      font-weight: 200;
      width: 100%;
      text-align: start;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }
  }
`;
