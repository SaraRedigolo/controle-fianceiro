import React from "react";
import * as C from "./styles";
import ursoFofo from "../../images/Ursofofo.png" // Importando a imagem

const Header = () => {
    return (
        <C.Container>
            <C.Header>
                <C.Title>Controle Financeiro</C.Title>
                <C.Image 
                    src={ursoFofo} // Usando a imagem importada
                    alt="Urso Fofo" 
                />
            </C.Header>
        </C.Container>
    );
};

export default Header;
