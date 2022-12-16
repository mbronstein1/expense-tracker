import React, { useEffect, useState } from 'react';
// import useLocalStorage from './components/hooks/useLocalStorage';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

//TODO: add localStorage functionality so data persists after refresh

function App() {
  // const [storedExpenses, setStoredExpenses] = useLocalStorage('Expenses');
  const [expenses, setExpenses] = useState(() => {
    const data = window.localStorage.getItem('Expenses');
    return data === null ? [] : JSON.parse(data);
  });

  useEffect(() => {
    window.localStorage.setItem('Expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpenseHandler = expense => {
    setExpenses(prevState => {
      return [expense, ...prevState];
    });
  };

  const deleteExpenseHandler = id => {
    setExpenses(prevState => prevState.filter(expense => expense.id !== id));
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        expenses={expenses}
        onDeleteExpense={deleteExpenseHandler}
      />
    </div>
  );
}

export default App;
