
import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ filter, onChange }) {
  return (
    <div className={s.flex}>
      <label className={s.labelFlex}>Find contact by nam:</label>
      <input
        className={s.inputFlex}
        type="text"
        value={filter}
        onChange={onChange}
      ></input>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};
export default Filter;