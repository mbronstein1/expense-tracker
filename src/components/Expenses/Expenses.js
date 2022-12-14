import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const updateYearFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          filteredYear={filteredYear}
          onChangeFilter={updateYearFilter}
        />
        {expenses.map(
          (item) =>
            item.date.getFullYear() === +filteredYear && (
              <ExpenseItem
                key={item.id}
                item={item}
              />
            )
        )}
      </Card>
    </div>
  );
};

export default Expenses;
