import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

const ExpenseItem = ({ item: { title, amount, date } }) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount.toFixed(2)}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
