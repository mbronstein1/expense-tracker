import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import uuid from 'react-uuid';

const NewExpense = ({ onAddExpense }) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      id: uuid(),
      ...enteredExpenseData,
    };
    onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      {showForm ? (
        <ExpenseForm
          setShowForm={setShowForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button
          type='button'
          onClick={() => setShowForm(true)}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
