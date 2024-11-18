import React from "react";

function FilterButtons({ setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Active")}>Active</button>
      <button onClick={() => setFilter("Completed")}>Completed</button>
    </div>
  );
}

export default FilterButtons;
