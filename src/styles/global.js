import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.primary};
        background-color: ${({ theme }) => theme.colors.peach};
        color: ${({ theme }) => theme.colors.dark};
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
    }

    a {
        color: ${({ theme }) => theme.colors.dark};
        text-decoration: none;
    }

    a:hover {
        color: ${({ theme }) => theme.colors.hover};
    }
`;

export default GlobalStyle;
