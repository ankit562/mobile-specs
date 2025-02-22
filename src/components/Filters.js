const Filters = ({ filters, setFilters }) => {
    const handleFilterChange = (e) => {
      const { name, value } = e.target;
      setFilters(prev => ({ ...prev, [name]: Number(value) }));
    };
  
    return (
      <div className="filters">
        <div>
          <label>Min Price ($)</label>
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleFilterChange}
          />
        </div>
        <div>
          <label>Max Price ($)</label>
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
        </div>
        <div>
          <label>Min Camera (MP)</label>
          <select
            name="minCamera"
            value={filters.minCamera}
            onChange={handleFilterChange}
          >
            <option value={0}>Any</option>
            <option value={12}>12+</option>
            <option value={48}>48+</option>
            <option value={100}>100+</option>
          </select>
        </div>
        <div>
          <label>Min Storage (GB)</label>
          <select
            name="minStorage"
            value={filters.minStorage}
            onChange={handleFilterChange}
          >
            <option value={0}>Any</option>
            <option value={128}>128+</option>
            <option value={256}>256+</option>
            <option value={512}>512+</option>
          </select>
        </div>
        <div>
          <label>Min Battery (mAh)</label>
          <select
            name="minBattery"
            value={filters.minBattery}
            onChange={handleFilterChange}
          >
            <option value={0}>Any</option>
            <option value={4000}>4000+</option>
            <option value={5000}>5000+</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default Filters;