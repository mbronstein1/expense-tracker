import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('');

  const updateYearFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log('In Expenses.js');
    console.log(filteredYear);
  };

  return (
    <div>
      <ExpenseFilter onChangeFilter={updateYearFilter} />
      <Card className='expenses'>
        {expenses.map((item) => (
          <ExpenseItem
            key={item.id}
            item={item}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
