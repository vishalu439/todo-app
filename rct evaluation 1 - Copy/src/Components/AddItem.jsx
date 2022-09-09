import {  } from "react";

function AddItem({ handleAdd, handleChange, length1, length2}) {
  return (
    <div>
      <input
        data-testid="input"
        placeholder="add something"
        onChange={handleChange}
      />
      <button
        disabled={length1 === length2}
        data-testid="add-btn"
        onClick={handleAdd}
      >
        ADD
      </button>
    </div>
  );
}

export default AddItem;
