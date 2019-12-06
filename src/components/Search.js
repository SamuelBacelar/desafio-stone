import React from "react";
import Filter from "./Filter";

const Search = ({
  setSearchValue,
  searchValue,
  filterByJob,
  setFilterByJob,
  filterByCity,
  setFilterByCity,
  filterByAllocation,
  setFilterByAllocation,
  employees
}) => {
  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  return (
    <form className="search">
      <div className="Filter-input">
        <label>Nome</label>
        <input
          placeholder="Filtrar por nome"
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
      </div>
      
      <Filter
        filterByJob={filterByJob}
        setFilterByJob={setFilterByJob}
        filterByCity={filterByCity}
        setFilterByCity={setFilterByCity}
        filterByAllocation={filterByAllocation}
        setFilterByAllocation={setFilterByAllocation}
        employees={employees}
      />
    </form>
  );
};

export default Search;