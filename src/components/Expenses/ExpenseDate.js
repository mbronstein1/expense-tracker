import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = ({ date_month, date_day, date_year }) => {
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{date_month}</div>
      <div className='expense-date__year'>{date_year}</div>
      <div className='expense-date__day'>{date_day}</div>
    </div>
  );
};

export default ExpenseDate;
