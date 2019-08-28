import { createGlobalStyle } from "./typed-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;   
        margin: 0
        padding: 0;
    }
    ul, li, a {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    a {
        text-decoration: none;
        list-style: none;
        color: inherit;
    }
`;