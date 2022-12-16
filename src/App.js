import React, { useEffect, useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const data = window.localStorage.getItem('Expenses');
    return data === null ? [] : JSON.parse(data);
  });

  //each time the expenses data changes, set the new expenses data to localStorage
  useEffect(() => {
    window.localStorage.setItem('Expenses', JSON.stringify(expenses));
  }, [expenses]);

  //add new expense from form to expenses array
  const addExpenseHandler = expense => {
    setExpenses(prevState => {
      return [expense, ...prevState];
    });
  };

  //remove expense from expenses where id === data_id of e.target (setting the state to everything that DOESNT have that id)
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
