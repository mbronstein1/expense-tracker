import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses, onDeleteExpense }) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const updateYearFilter = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(item => item.date_year === +filteredYear);

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          filteredYear={filteredYear}
          onChangeFilter={updateYearFilter}
        />
        <ExpensesChart filteredExpenses={filteredExpenses} />
        <ExpensesList
          filteredExpenses={filteredExpenses}
          onDeleteExpense={onDeleteExpense}
        />
      </Card>
    </div>
  );
};

export default Expenses;
