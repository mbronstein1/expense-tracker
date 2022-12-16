import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ filteredExpenses, onDeleteExpense }) => {
  let expensesContent = <p className='expenses-list__fallback'>You have no expenses this year</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(item => (
      <ExpenseItem
        key={item.id}
        item={item}
        onDeleteExpense={onDeleteExpense}
      />
    ));
  }

  return <ul className='expenses-list'>{expensesContent}</ul>;
};

export default ExpensesList;
