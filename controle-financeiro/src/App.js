import React, { useEffect, useState } from 'react'; // Importa React e hooks do React.
import Form from './componentes/Form'; // Importa o componente do formulário.
import GlobalStyle from './styles/global'; // Importa os estilos globais.
import Header from './componentes/Header'; // Importa o componente do cabeçalho.
import Resume from './componentes/Resume'; // Importa o componente que mostra o resumo financeiro.

function App() {
  // Pega os dados do localStorage, se existirem.
  const data = localStorage.getItem("transactions");

  // Define o estado da lista de transações, usando os dados do localStorage se estiverem disponíveis.
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : [] // Se houver dados, converte-os de JSON, senão inicializa como um array vazio.
  );
  
  // Estados para armazenar as entradas, saídas e o saldo total.
  const [income, setIncome] = useState(0); // Inicialmente, o valor das entradas é 0.
  const [expense, setExpense] = useState(0); // Inicialmente, o valor das saídas é 0.
  const [total, setTotal] = useState(0); // Inicialmente, o saldo total é 0.

  // useEffect é acionado sempre que a lista de transações mudar.
  useEffect(() => {
    // Filtra as transações de entrada (income), ou seja, aquelas que não são despesas (expense === false).
    const amountIncome = transactionsList
      .filter((item) => !item.expense) // Entradas (não são despesas).
      .map((transaction) => Number(transaction.amount)); // Converte os valores para números.

    // Filtra as transações de saída (expense), ou seja, aquelas que são despesas (expense === true).
    const amountExpense = transactionsList
      .filter((item) => item.expense) // Despesas (expense === true).
      .map((transaction) => Number(transaction.amount)); // Converte os valores para números.

    // Soma todas as entradas.
    const totalIncome = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    // Soma todas as saídas. Usa Math.abs para garantir que o valor é positivo.
    const totalExpense = Math.abs(amountExpense.reduce((acc, cur) => acc + cur, 0)).toFixed(2);

    // Calcula o saldo total (entradas - saídas).
    const totalAmount = (totalIncome - totalExpense).toFixed(2);

    // Atualiza os estados com os valores calculados, convertendo para números.
    setIncome(Number(totalIncome));
    setExpense(Number(totalExpense));
    setTotal(Number(totalAmount));
  }, [transactionsList]); // Executa o efeito sempre que `transactionsList` mudar.

  // Função para adicionar uma nova transação à lista.
  const handleAdd = (transaction) => {
    // Se a transação for uma despesa, garante que o valor será armazenado como um número negativo.
    if (transaction.expense) {
      transaction.amount = -Math.abs(transaction.amount);
    }

    // Cria uma nova lista de transações com a nova transação adicionada.
    const newArrayTransactions = [...transactionsList, transaction];

    // Atualiza o estado com a nova lista de transações.
    setTransactionsList(newArrayTransactions);
    // Armazena a nova lista no localStorage.
    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  // Renderiza a estrutura do componente.
  return (
    <>
      {/* Componente de Cabeçalho */}
      <Header />
      
      {/* Componente de Resumo Financeiro */}
      <Resume 
        income={`R$ ${income.toFixed(2)}`} // Exibe o valor formatado das entradas.
        expense={`R$ ${Math.abs(expense).toFixed(2)}`} // Exibe o valor formatado das saídas.
        total={`R$ ${total < 0 ? "-" : ""}${Math.abs(total).toFixed(2)}`} // Exibe o saldo formatado (se negativo, coloca um "-").
      />
      
      {/* Componente de Formulário para adicionar transações */}
      <Form 
        handleAdd={handleAdd} // Passa a função de adicionar transações como props.
        transactionsList={transactionsList} // Passa a lista de transações como props.
        setTransactionsList={setTransactionsList} // Passa a função para atualizar a lista como props.
      />
      
      {/* Aplica os estilos globais */}
      <GlobalStyle />
    </>
  );
}

export default App;
