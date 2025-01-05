import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SearchBar from './components/SearchBar';
import PropertyList from './components/PropertyList';
import FavouritesList from './components/FavouritesList';
import Footer from './components/Footer';
import propertiesData from './data/properties.json';
import './App.css'; // Import the CSS file for App

/**
 * Main App component
 * @returns {JSX.Element} The rendered component
 */
const App = () => {
  // State to hold the list of properties
  const [properties, setProperties] = useState(propertiesData);
  // State to hold the list of favourite properties
  const [favourites, setFavourites] = useState([]);
  // Ref to the property list element
  const propertyListRef = useRef(null);

  /**
   * Effect to load favourites from localStorage on initial render
   */
  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(savedFavourites);
  }, []);

  /**
   * Effect to save favourites to localStorage whenever favourites change
   */
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  /**
   * Handles the search functionality
   * @param {Object} searchFilters - The search filters
   */
  const handleSearch = (searchFilters) => {
    const { type, minPrice, maxPrice, minBedrooms, maxBedrooms, dateAfter, dateBefore, postcode } = searchFilters;
  
    const filteredProperties = propertiesData.filter((property) => {
      // Check if the property matches the type filter
      const matchesType = !type || property.type.toLowerCase() === type.toLowerCase();
      // Check if the property matches the price range filter
      const matchesPrice = property.price >= (minPrice || 0) && property.price <= (maxPrice || Infinity);
      // Check if the property matches the bedrooms range filter
      const matchesBedrooms = property.bedrooms >= (minBedrooms || 0) && property.bedrooms <= (maxBedrooms || Infinity);
      // Check if the property was added after the specified date
      const matchesDateAfter = dateAfter ? (() => {
        const propertyDate = new Date(`${property.added.month} ${property.added.day}, ${property.added.year}`);
        return propertyDate >= new Date(dateAfter);
      })() : true;
      // Check if the property was added before the specified date
      const matchesDateBefore = dateBefore ? (() => {
        const propertyDate = new Date(`${property.added.month} ${property.added.day}, ${property.added.year}`);
        return propertyDate <= new Date(dateBefore);
      })() : true;
      // Check if the property matches the postcode filter
      const matchesPostcode = !postcode || property.location.toLowerCase().startsWith(postcode.toLowerCase());
  
      return matchesType && matchesPrice && matchesBedrooms && matchesDateAfter && matchesDateBefore && matchesPostcode;
    });
  
    setProperties(filteredProperties);
  };

  /**
   * Handles the "Get Started" button click
   */
  const handleGetStarted = () => {
    // Scroll to the property list section
    propertyListRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  /**
   * Adds a property to favourites
   * @param {Object} property - The property to add
   */
  const addFavourite = (property) => {
    if (!favourites.some(fav => fav.id === property.id)) {
      const favouriteProperty = {
        id: property.id,
        name: property.name, // Ensure the name property is set
        location: property.location
      };
      setFavourites([...favourites, favouriteProperty]);
    }
  };

  /**
   * Removes a property from favourites
   * @param {string} id - The ID of the property to remove
   */
  const removeFavourite = (id) => {
    setFavourites(favourites.filter(fav => fav.id !== id));
  };

  /**
   * Clears all favourites
   */
  const clearFavourites = () => {
    setFavourites([]);
  };

  /**
   * Handles the drop event for drag-and-drop functionality
   * @param {Event} e - The drop event
   */
  const handleDrop = (e) => {
    e.preventDefault();
    const propertyId = e.dataTransfer.getData('propertyId');
    const property = properties.find(prop => prop.id === propertyId);
    if (property) {
      addFavourite(property);
    }
  };

  /**
   * Handles the drag over event for drag-and-drop functionality
   * @param {Event} e - The drag over event
   */
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navbar component */}
      <Navbar />
      <div className="mt-10" style={{ flex: 1 }}>
        {/* HomePage component with a "Get Started" button */}
        <HomePage onGetStarted={handleGetStarted} />
        <hr />
        <div className="second-page container-fluid row" ref={propertyListRef}>
          <div className="col-12 col-md-3 order-md-2 mb-4">
            <div className="search-bar-container p-3 bg-light rounded shadow-sm">
              {/* SearchBar component for filtering properties */}
              <SearchBar handleSearch={handleSearch} />
            </div>
            <div
              className="favourites-container mt-4"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {/* FavouritesList component for displaying favourite properties */}
              <FavouritesList
                favourites={favourites}
                removeFavourite={removeFavourite}
                clearFavourites={clearFavourites}
              />
            </div>
          </div>
          <div className="col-12 col-md-9 order-md-1">
            {/* PropertyList component for displaying the list of properties */}
            <PropertyList
              properties={properties}
              favourites={favourites}
              addFavourite={addFavourite}
              removeFavourite={removeFavourite}
            />
          </div>
        </div>
      </div>
      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default App;