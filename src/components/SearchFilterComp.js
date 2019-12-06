import React, { useState, useEffect } from "react";
import Search from "./Search";
import EmployeeRow from "./EmployeeRow";
import { withRouter } from 'react-router-dom';
const rp = require('request-promise');



const API_URL = "http://localhost:3002/employee"; 

const SearchFilterComp = (props) => {

  const [employees, setEmployees] = useState([]);
  const [sortedEmployees, setSortedEmployees] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterByJob, setFilterByJob] = useState("");
  const [filterByCity, setFilterByCity] = useState("");
  const [filterByAllocation, setFilterByAllocation] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then(jsonResponse => {
        setEmployees(jsonResponse);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const searchRegex = searchValue && new RegExp(`${searchValue}`, "gi");
    const allocationRegex = filterByAllocation && new RegExp(`${filterByAllocation}`, "gi");
    const jobRegex = filterByJob && new RegExp(`${filterByJob}`, "gi");
    const result = employees.filter(
      employee =>
        (!searchRegex || searchRegex.test(employee.name)) &&
        (!jobRegex || jobRegex.test(employee.job)) &&
        (!filterByCity || employee.city === filterByCity) &&
        (!allocationRegex || allocationRegex.test(employee.allocation))
    );
    setSortedEmployees(result);
  }, [searchValue, employees, filterByJob, filterByCity, filterByAllocation]);

 

  function deleteEmployee(id){
    setEmployees(employees.filter(employee => employee._id !== id))
    
    var options = {
      method: 'DELETE',
      uri: API_URL + '/' + id,
      resolveWithFullResponse: true    //  <---  <---  <---  <---
  };
   
  rp(options)
      .then(function (response) {
          console.log("DELETE succeeded with status %d", response.statusCode);
      })
      .catch(function (err) {
          // Delete failed...
      });
  }

  const editEmployee = (id) => {
    props.history.push({
      pathname: '/edit/' + id
    });
  };

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
        employees={employees}
      />
      <div className="Employee-table">
        <table>
            <thead className="Table-header">
                  <tr>
                      <th>Nome</th>
                      <th>Cargo</th>
                      <th>Cidade</th>
                      <th>Alocação</th>
                      <th>Ações</th>
                  </tr>
            </thead>
            <tbody>
                  {sortedEmployees.length > 0 ? (
                  sortedEmployees.map((employee, index) => {
                  return <EmployeeRow key={index} id={employee._id} name={employee.name} job={employee.job} city={employee.city} allocation={employee.allocation} onDelete={deleteEmployee} onEdit={editEmployee}/>;
                  })
              ) : (
                  <span>Nenhum resultado encontrado</span>
              )}
            </tbody>
        
        </table>
      </div>
      
    </div>
  );
};

export default withRouter(SearchFilterComp);