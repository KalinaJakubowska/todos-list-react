import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        color: ${({ theme }) => theme.color.text};
        background-color: ${({ theme }) => theme.color.background};
        font-size: 16px;
        padding: 10px;
        transition: 0.3s;
    }
`;