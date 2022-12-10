import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({ expenses }) => {
  return (
    <Card className='expenses'>
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          item={item}
        />
      ))}
    </Card>
  );
};

export default Expenses;
