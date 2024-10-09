import styled from "styled-components";

export const Container = styled.div`
    height: 150px;
    text-align: center;
    background: rgb(238, 174, 202);
    background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
`;

export const Header = styled.div``;

export const Title = styled.h1`
    font-family: 'Playwrite DE Grund', sans-serif; /* Usar a nova fonte */
    font-size: 36px;
    color: #fff;
    padding-top: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra de texto para destaque */
`;

export const Image = styled.img`
    position: absolute; /* Isso permite que você posicione a imagem livremente */
    bottom: 1px; /* Distância do fundo */
    right: 10px; /* Distância da direita */
    width: 300px; /* Ajuste o tamanho conforme necessário */
    height: auto; /* Mantém a proporção da imagem */
`;