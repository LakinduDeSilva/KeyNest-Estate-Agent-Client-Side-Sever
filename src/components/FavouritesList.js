import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

/**
 * FavouritesList component for displaying the list of favourite properties
 * @param {Array} favourites - The list of favourite properties
 * @param {Function} removeFavourite - Function to remove a property from favourites
 * @param {Function} clearFavourites - Function to clear all favourites
 * @returns {JSX.Element} The rendered component
 */
const FavouritesList = ({ favourites = [], removeFavourite, clearFavourites }) => {
  /**
   * Handles the drag start event for drag-and-drop functionality
   * @param {Event} e - The drag start event
   * @param {string} id - The ID of the property being dragged
   */
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('propertyId', id);
  };

  return (
    <div className="favourites-list">
      <h4>Your Favourites</h4>
      {favourites.length === 0 ? (
        // Display a message if no favourites are found
        <p>No favourites yet!</p>
      ) : (
        <div className="favourites-grid">
          {favourites.map((property) => (
            <div key={property.id} className="favourite-item" draggable onDragStart={(e) => handleDragStart(e, property.id)}>
              <div className="favourite-details">
                <h5>{property.name}</h5>
                <p>{property.location}</p>
              </div>
              {/* Button to remove the property from favourites */}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFavourite(property.id)}
              >
                <FaTrash />
              </button>
            </div>
          ))}
          {/* Button to clear all favourites */}
          <button className="btn btn-danger mt-3" onClick={clearFavourites}>
            Clear Favourites
          </button>
        </div>
      )}
    </div>
  );
};

// PropTypes for type checking
FavouritesList.propTypes = {
  favourites: PropTypes.array.isRequired,
  removeFavourite: PropTypes.func.isRequired,
  clearFavourites: PropTypes.func.isRequired,
};

export default FavouritesList;