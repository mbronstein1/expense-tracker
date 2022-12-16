import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData, setShowForm }) => {
  // instead of creating 3 different states for each value below, I created one object with each input as a key
  const [expenseData, setExpenseData] = useState({ title: '', amount: '', date: '' });

  // instead of creating three handleChange functions, I created one that sets the formState object based on e.target.name and e.target.value (ex: the first input e.target.name = title and e.target.value = 'this value', so the state for the title key is 'title': 'this value)
  const changeHandler = e => {
    const { name, value } = e.target;

    setExpenseData(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    onSaveExpenseData({
      ...expenseData,
      amount: +expenseData.amount,
      date_month: new Date(expenseData.date).toLocaleDateString('en-US', { month: 'short' }),
      date_day: new Date(expenseData.date).toLocaleDateString('en-US', { day: '2-digit' }),
      date_year: new Date(expenseData.date).getFullYear(),
    });
    setShowForm(false);
    setExpenseData({ title: '', amount: '', date: '' });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='expense-title'>Title</label>
          <input
            id='expense-title'
            type='text'
            onChange={changeHandler}
            name='title'
            value={expenseData.title}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='expense-amount'>Amount</label>
          <input
            id='expense-amount'
            type='number'
            min='0.01'
            step='0.01'
            onChange={changeHandler}
            name='amount'
            value={expenseData.amount}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='expense-date'>Date</label>
          <input
            id='expense-date'
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={changeHandler}
            name='date'
            value={expenseData.date}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button
          type='button'
          onClick={() => setShowForm(false)}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
