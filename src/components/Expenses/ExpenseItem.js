import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = ({ item: { title, amount, date_month, date_day, date_year, id }, onDeleteExpense }) => {
  const deleteExpense = e => {
    onDeleteExpense(e.target.getAttribute('data_id'));
  };

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate
          date_month={date_month}
          date_day={date_day}
          date_year={date_year}
        />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${amount.toFixed(2)}</div>
        </div>
        <button
          type='button'
          className='expense-item__delete'
          data_id={id}
          onClick={deleteExpense}>
          X
        </button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
