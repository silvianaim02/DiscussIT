/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

function CategorySelect({ threads, setCategorySelected }) {
  const categoryList = () => {
    const arr = [{ value: 'semua', label: 'semua' }];
    threads.forEach((array) => {
      return arr.push({ value: array.category, label: array.category });
    });
    return arr;
  };
  const categoryListSelect = categoryList();

  const onSelectedChange = (e) => {
    setCategorySelected(e.value);
  };

  return (
    <div className="category-select">
      <Select
        className="input-container"
        placeholder="Pilih kategori diskusi"
        options={categoryListSelect}
        defaultValue="semua"
        onChange={onSelectedChange}
      />
    </div>
  );
}

const threadsShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

CategorySelect.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadsShape)).isRequired,
  setCategorySelected: PropTypes.func.isRequired,
};

export default CategorySelect;
