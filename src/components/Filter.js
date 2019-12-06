import React from 'react';
import ClearFilterBtn from './buttons/ClearFilterBtn';

const Filter = ({
    filterByJob,
    setFilterByJob,
    filterByCity,
    setFilterByCity,
    filterByAllocation,
    setFilterByAllocation,
    employees
  }) => {
    const clearFilter = e => {
      e.preventDefault();
      setFilterByCity("");
    };
    const handleFilterByJob = e => {
        setFilterByJob(e.target.value);
    }
    const handleFilterByCity = e => {
      setFilterByCity(e.target.value);
    };
    const handleFilterByAllocation = e => {
      setFilterByAllocation(e.target.value);
    };

    const jobs = employees.map( employee => {
      return employee.job;
    })

    const jobOptions = jobs.filter((item, index) => {
      return jobs.indexOf(item) >= index;
    })

    const cities = employees.map( employee => {
      return employee.city;
    })

    const cityOptions = cities.filter((item, index) => {
      return cities.indexOf(item) >= index;
    })

    const allocations = employees.map( employee => {
      return employee.allocation;
    })

    const allocationOptions = allocations.filter((item, index) => {
      return allocations.indexOf(item) >= index;
    })
  
    return (
      
        <div className="Filter">
          <div className="Filter-input">
            <label>Cargo</label>
            <select defaultValue={filterByJob} onChange={handleFilterByJob}>
              <option value="none" selected hidden> 
                Filtrar por cargo
              </option> 
              {jobOptions.map(job => {
                return <option value={job}>{job}</option>;
              })}
            </select>
          </div>
          
          <div className="Filter-input">
            <label>Cidade</label>
            <select defaultValue={filterByCity} onChange={handleFilterByCity}>
              <option value="none" selected hidden> 
                Filtrar por cidade
              </option> 
              {cityOptions.map(city => {
                return <option value={city}>{city}</option>;
              })}
            </select>
          </div>
          

          <div className="Filter-input">
            <label>Alocação</label>
            <select defaultValue={filterByAllocation} onChange={handleFilterByAllocation}>
              <option value="none" selected hidden> 
                Filtrar por alocação
              </option> 
              {allocationOptions.map(allocation => {
                return <option value={allocation}>{allocation}</option>;
              })}
            </select>
          </div>
          <ClearFilterBtn 
            onClick={clearFilter}
            name="Limpar filtro"
        />
        </div>
        
      
    );
  };
  
  export default Filter;
  