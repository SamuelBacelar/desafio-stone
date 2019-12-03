import React, { useState, useEffect } from "react";
import Search from "./Search";
import EmployeeRow from "./EmployeeRow";
import tempDB from '../temporaryDB';

const SearchFilterComp = () => {
  const [employees, setEmployees] = useState([]);
  const [sortedEmployees, setSortedEmployees] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterByJob, setFilterByJob] = useState("");
  const [filterByCity, setFilterByCity] = useState("");
  const [filterByAllocation, setFilterByAllocation] = useState("");


  useEffect(() => {
    const searchRegex = searchValue && new RegExp(`${searchValue}`, "gi");
    const allocationRegex = filterByAllocation && new RegExp(`${filterByAllocation}`, "gi");
    const jobRegex = filterByJob && new RegExp(`${filterByJob}`, "gi");
    const result = tempDB.filter(
      employee =>
        (!searchRegex || searchRegex.test(employee.name)) &&
        (!jobRegex || jobRegex.test(employee.job)) &&
        (!filterByCity || employee.city === filterByCity) &&
        (!allocationRegex || allocationRegex.test(employee.allocation))
    );
    setSortedEmployees(result);
  }, [searchValue, tempDB, filterByJob, filterByCity, filterByAllocation]);
  return (
    <div className="App">
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        filterByJob={filterByJob}
        setFilterByJob={setFilterByJob}
        filterByCity={filterByCity}
        setFilterByCity={setFilterByCity}
        filterByAllocation={filterByAllocation}
        setFilterByAllocation={setFilterByAllocation}
      />
      <table>
          <thead>
                <tr>
                    <th>Nome</th>
                    <th>Cargo</th>
                    <th>Cidade</th>
                    <th>Interno/Externo</th>
                </tr>
          </thead>
          <tbody>
                {sortedEmployees.length > 0 ? (
                sortedEmployees.map((employee, index) => {
                return <EmployeeRow key={index} name={employee.name} job={employee.job} city={employee.city} allocation={employee.allocation}/>;
                })
            ) : (
                <span>Nenhum resultado encontrado</span>
            )}
          </tbody>
      
      </table>
    </div>
  );
};

export default SearchFilterComp;