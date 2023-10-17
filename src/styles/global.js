import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

:root {
    font-size: 62.5%;
}

body * {
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
}

a {
    text-decoration: none;
    cursor: pointer;
}

button {
    cursor: pointer;
}


::-webkit-scrollbar-thumb{
    background: ${({theme}) => theme.COLORS.DARK_900};
    border-radius: 5rem;
}

::-webkit-scrollbar {
  background: ${({theme}) => theme.COLORS.DARK_200};;
  width: 0.7rem;
  height: 0.7rem;
}









`