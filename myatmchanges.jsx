import React, { useState } from 'react';

const TransactionForm = ({ onChange, isDeposit, isValid }) => {
  const transactionType = ['Deposit', 'Cash Back'];
  console.log(`TransactionForm - Transaction Type: ${transactionType[Number(!isDeposit)]}`);
  
  return (
    <div className="transaction-form">
      <label className="label huge">
        <h3>{transactionType[Number(!isDeposit)]}</h3>
        <input id="number-input" type="number" width="200" onChange={onChange} />
        <input type="submit" disabled={!isValid} width="200" value="Submit" id="submit-input" />
      </label>
    </div>
  );
};

const Account = () => {
  const [deposit, setDeposit] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [isDeposit, setIsDeposit] = useState(true);
  const [transactionMode, setTransactionMode] = useState('');
  const [validTransaction, setValidTransaction] = useState(false);

  let accountStatus = `Account Balance: $ ${totalBalance}`;
  console.log(`Account - Transaction Mode: ${isDeposit ? 'Deposit' : 'Cash Back'}`);
  
  const handleAmountChange = (event) => {
    console.log(`TransactionForm - Amount Changed: ${event.target.value}`);
    
    if (Number(event.target.value) <= 0) {
      return setValidTransaction(false);
    }
    
    if (transactionMode === 'Cash Back' && Number(event.target.value) > totalBalance) {
      setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }
    
    setDeposit(Number(event.target.value));
  };
  
  const handleTransactionSubmit = (event) => {
    let newBalance = isDeposit ? totalBalance + deposit : totalBalance - deposit;
    setTotalBalance(newBalance);
    setValidTransaction(false);
    event.preventDefault();
  };

  const handleTransactionModeSelect = (event) => {
    console.log(`Account - Transaction Mode Selected: ${event.target.value}`);
    setTransactionMode(event.target.value);
    setValidTransaction(false);
    
    if (event.target.value === 'Deposit') {
      setIsDeposit(true);
    } else {
      setIsDeposit(false);
    }
  };

  return (
    <form onSubmit={handleTransactionSubmit}>
      <>
        <h2 id="total">{accountStatus}</h2>
        <label>Select an action below:</label>
        <select onChange={(e) => handleTransactionModeSelect(e)} name="mode" id="mode-select">
          <option id="no-selection" value=""></option>
          <option id="deposit-selection" value="Deposit">Deposit</option>
          <option id="cashback-selection" value="Cash Back">Cash Back</option>
        </select>
        
        {transactionMode && (
          <TransactionForm
            onChange={handleAmountChange}
            isDeposit={isDeposit}
            isValid={validTransaction}
          />
        )}
      </>
    </form>
  );
};

ReactDOM.render(<Account />, document.getElementById('root'));
