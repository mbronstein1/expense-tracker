import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = ({ onChangeFilter, filteredYear }) => {
  const yearOptions = ['2023', '2022', '2021', '2020', '2019'];

  const filterChangeHandler = e => {
    onChangeFilter(e.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select
          value={filteredYear}
          onChange={filterChangeHandler}>
          {yearOptions.map((year, index) => (
            <option
              key={`${year}: ${index}`}
              value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
