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
  setFilterByAllocation
}) => {
  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  return (
    <form className="search">
      <input
        placeholder="Filtrar por nome"
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <Filter
        filterByJob={filterByJob}
        setFilterByJob={setFilterByJob}
        filterByCity={filterByCity}
        setFilterByCity={setFilterByCity}
        filterByAllocation={filterByAllocation}
        setFilterByAllocation={setFilterByAllocation}
      />
    </form>
  );
};

export default Search;