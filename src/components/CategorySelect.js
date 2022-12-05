/** @format */

import React from 'react';
import Select from 'react-select';
import { threads } from '../utils/dummy';

const selectableOptions = [
  { value: 'Adam', label: 'Adam Geoffrey' },
  { value: 'Jane', label: 'Jane Hibbard' },
  { value: 'Anabelle', label: 'Anabelle Einstein' },
];

const final = (arrays) => {
  const arr = [{ value: 'all', label: 'all' }];
  arrays.forEach((array) => {
    return arr.push({ value: array.category, label: array.category });
  });
  return arr;
};

const selectBaru = final(threads);

console.log(final(threads));

function CategorySelect() {
  return (
    <div className="category-select">
      <Select
        className="input-container"
        placeholder="Select Category"
        options={selectBaru}
        defaultValue="all"
      />
    </div>
  );
}

export default CategorySelect;
