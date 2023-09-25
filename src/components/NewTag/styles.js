import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.8rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  border-radius: 0.8rem;
  padding: 0.8rem 1.6rem;
  background: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT_600};
    color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    
  input {
    width: 10rem;
    color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    background: transparent;
    outline: none;
    border: none
    
  }

  button {
    display:flex;
    align-items: center;

  }

  .button-add {
    border: none;
    background: transparent;
    color: ${({theme})=> theme.COLORS.LIGHT_500}
  }

  .button-delete {
    border: none;
    background: transparent;
    color: ${({theme})=> theme.COLORS.LIGHT_100}
  }



`;
