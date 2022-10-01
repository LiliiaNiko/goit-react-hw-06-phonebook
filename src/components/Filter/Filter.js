import React from 'react';
import { FilterWrap } from './Filter.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChangeFilter = evt => dispatch(changeFilter(evt.currentTarget.value));
  return (
    <FilterWrap>
      <label>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      />
    </FilterWrap>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
};
