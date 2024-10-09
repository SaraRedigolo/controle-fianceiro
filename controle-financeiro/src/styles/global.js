import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Poppins', sans-serif; /* Fonte padrão */
        background-color: #f2f2f2;    
    }

    footer {
    text-align: center;
    padding: 1rem 0;
    font-size: 0.9rem;
    color: #666; /* Cor do texto */
}

`;

export default Global;
