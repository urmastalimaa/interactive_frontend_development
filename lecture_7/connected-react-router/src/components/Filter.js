import React from 'react';

// Filter state is kept in sync with application state.
const Filter = (props) => {
  return (
    <div className='filter'>
      <h3>{props.text}</h3>
      <input
        name="filter"
        type="text"
        placeholder="type here to filter"
        value={props.filterValue}
        onChange={(event) => props.onChange(event.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  text: React.PropTypes.string.isRequired,
  filterValue: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default Filter;
