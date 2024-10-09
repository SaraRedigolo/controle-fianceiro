import React, { useState } from "react";
import * as C from "./styles";
import Grid from "../Grid";

const Form = ({ handleAdd, transactionsList ,setTransactionsList}) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction = {
            id: generateID(),
            desc,
            amount,
            expense: isExpense, // Aqui o isExpense controla se é uma saída
        };

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    };

    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Descrição</C.Label>
                    <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input
                        value={amount}
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </C.InputContent>
                <C.RadioGroup>
                    <C.Input
                        type="radio"
                        id="rIncome"
                        name="group1"
                        defaultChecked={!isExpense} // "Entrada" estará selecionado por padrão
                        onChange={() => setExpense(false)} // Define como Entrada
                    />
                    <C.Label htmlFor="rIncome">Entrada</C.Label>
                    <C.Input 
                        type="radio"
                        id="rExpenses"
                        name="group1"
                        onChange={() => setExpense(true)} // Define como Saída
                    />
                    <C.Label htmlFor="rExpenses">Saída</C.Label>
                </C.RadioGroup>
                <C.Button onClick={handleSave}>ADICIONAR</C.Button>
            </C.Container>
            <Grid itens={transactionsList} setItens={setTransactionsList}/>
        </>
    );
};

export default Form;
