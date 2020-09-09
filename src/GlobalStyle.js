import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.color.background};
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    :focus {
        outline: 2px solid ${({ theme }) => theme.color.outline};
    }

    body {
        font-family: 'Montserrat', sans-serif;
        color: ${({ theme }) => theme.color.text};
        font-size: 16px;
        padding: 10px;
        background-color: ${({ theme }) => theme.color.background};
        transition: background 0.3s;
    }
`;