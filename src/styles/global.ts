import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body{
        background-color: ${(props) => props.theme["gray-100"]};
        color: ${(props) => props.theme["brown-500"]};
    }

    body, input, textarea, button{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3;
    } 

    h1, h2, h3, h4, h5, h6 {
        font-family: "Baloo 2", sans-serif; 
    }
`;
