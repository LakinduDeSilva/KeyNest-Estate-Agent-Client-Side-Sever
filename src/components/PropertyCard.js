import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaBed, FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';

/**
 * PropertyCard component for displaying a single property card
 * @param {Object} property - The property data
 * @param {Function} addFavourite - Function to add a property to favourites
 * @param {Function} removeFavourite - Function to remove a property from favourites
 * @param {Array} favourites - The list of favourite properties
 * @returns {JSX.Element} The rendered component
 */
const PropertyCard = ({ property, addFavourite, removeFavourite, favourites }) => {
  // State to track if the property is a favourite
  const [isFav, setIsFav] = useState(favourites.some(fav => fav.id === property.id));

  // Update the favourite state when the favourites list changes
  useEffect(() => {
    setIsFav(favourites.some(fav => fav.id === property.id));
  }, [favourites, property.id]);

  // Format the price for display
  const formattedPrice = property.price.toLocaleString();

  /**
   * Handles the drag start event for drag-and-drop functionality
   * @param {Event} e - The drag start event
   */
  const handleDragStart = (e) => {
    e.dataTransfer.setData('propertyId', property.id);
  };

  /**
   * Handles the favourite button click
   */
  const handleFavouriteClick = () => {
    if (isFav) {
      removeFavourite(property.id);
    } else {
      addFavourite(property);
    }
    setIsFav(!isFav);
  };

  return (
    <div className="col-md-4 mb-4" draggable onDragStart={handleDragStart}>
      <div className="card h-100">
        {/* Property image */}
        <img
          src={property.picture}
          className="card-img-top"
          alt="Property"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{property.name}</h5>
          <p className="card-text text-muted"><FaMapMarkerAlt /> {property.location}</p>
          <p className="card-text">
            <FaBed /> {property.bedrooms} Bedrooms
          </p>
          <p className="card-text">
            <FaMoneyBillWave /> <strong style={{ fontWeight: 'bold' }}>Price:</strong> ${formattedPrice}
          </p>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            {/* Link to the property details page */}
            <Link to={`/properties/${property.id}`} className="btn btn-primary">View Details</Link>
            {/* Favourite button */}
            <button
              className={`btn ${isFav ? 'btn-danger' : 'btn-grey'}`}
              onClick={handleFavouriteClick}
            >
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;