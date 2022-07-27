import React from 'react';

function Dropdown() {
  return (
    <div>
      <label>
        <select
        // value={value} onChange={handleChange}
        >
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
      </label>
    </div>
  );
}

export default Dropdown;
