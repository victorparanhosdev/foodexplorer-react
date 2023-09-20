import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
display: grid;
grid-template-rows: 10.4rem auto;
grid-template-areas: 
"header"
"content";
background: ${({theme})=> theme.COLORS.DARK_400};

`