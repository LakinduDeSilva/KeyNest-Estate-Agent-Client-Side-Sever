import React, { useState } from 'react';

/**
 * SearchBar component for filtering properties
 * @param {Function} handleSearch - Function to handle the search action
 * @returns {JSX.Element} The rendered component
 */
const SearchBar = ({ handleSearch }) => {
  // State variables for search filters
  const [type, setType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minBedrooms, setMinBedrooms] = useState('');
  const [maxBedrooms, setMaxBedrooms] = useState('');
  const [dateAfter, setDateAfter] = useState('');
  const [dateBefore, setDateBefore] = useState('');
  const [postcode, setPostcode] = useState('');

  // List of property types for the dropdown
  const propertyTypes = ['Any', 'House', 'Flat'];

  /**
   * Handles the form submission
   * @param {Event} e - The form submission event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the handleSearch function with the search filters
    handleSearch({
      type,
      minPrice: minPrice ? parseInt(minPrice) : null,
      maxPrice: maxPrice ? parseInt(maxPrice) : null,
      minBedrooms: minBedrooms ? parseInt(minBedrooms) : null,
      maxBedrooms: maxBedrooms ? parseInt(maxBedrooms) : null,
      dateAfter,
      dateBefore,
      postcode,
    });
  };

  /**
   * Handles the form reset
   */
  const handleReset = () => {
    // Reset all state variables to their initial values
    setType('');
    setMinPrice('');
    setMaxPrice('');
    setMinBedrooms('');
    setMaxBedrooms('');
    setDateAfter('');
    setDateBefore('');
    setPostcode('');
  };

  return (
    <form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
      {/* Property Type */}
      <div>
        <select
          className="form-select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {propertyTypes.map((type) => (
            <option key={type} value={type === 'Any' ? '' : type.toLowerCase()}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Min Price */}
      <div>
        <input
          type="number"
          className="form-control"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          min="0"
        />
      </div>

      {/* Max Price */}
      <div>
        <input
          type="number"
          className="form-control"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          min="0"
        />
      </div>

      {/* Min Bedrooms */}
      <div>
        <input
          type="number"
          className="form-control"
          placeholder="Min Beds"
          value={minBedrooms}
          onChange={(e) => setMinBedrooms(e.target.value)}
          min="0"
        />
      </div>

      {/* Max Bedrooms */}
      <div>
        <input
          type="number"
          className="form-control"
          placeholder="Max Beds"
          value={maxBedrooms}
          onChange={(e) => setMaxBedrooms(e.target.value)}
          min="0"
        />
      </div>

      {/* Date Added (After) */}
      <div>
        <input
          type="date"
          className="form-control"
          placeholder="Date After"
          value={dateAfter}
          onChange={(e) => setDateAfter(e.target.value)}
        />
      </div>

      {/* Date Added (Before) */}
      <div>
        <input
          type="date"
          className="form-control"
          placeholder="Date Before"
          value={dateBefore}
          onChange={(e) => setDateBefore(e.target.value)}
        />
      </div>

      {/* Postcode Area */}
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Postcode Area"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value.toUpperCase())}
        />
      </div>

      {/* Search and Reset Buttons */}
      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary w-100">
          Search
        </button>
        <button type="button" className="btn btn-secondary w-100" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
