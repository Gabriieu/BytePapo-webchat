import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        input, button{
            border: 1px solid black;
            border-radius: 8px;
            padding: 8px;
        }
        
        --red-1: #fd4556;
        --red-2: #bd3944;


        & ::-webkit-scrollbar{
            display: none;
        }

    }


`;
