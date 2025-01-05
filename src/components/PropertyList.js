import React from 'react';
import PropertyCard from './PropertyCard';

/**
 * PropertyList component for displaying a list of properties
 * @param {Array} properties - The list of properties to display
 * @param {Array} favourites - The list of favourite properties
 * @param {Function} addFavourite - Function to add a property to favourites
 * @param {Function} removeFavourite - Function to remove a property from favourites
 * @returns {JSX.Element} The rendered component
 */
const PropertyList = ({ properties, favourites, addFavourite, removeFavourite }) => {
  return (
    <div className="row">
      {properties.length === 0 ? (
        // Display a message if no properties are found
        <div className="col-12">
          <h5 className="text-center">No properties found.</h5>
          <p className="text-center">Try adjusting your search filters to find more results.</p>
        </div>
      ) : (
        // Map through the properties and render a PropertyCard for each one
        properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            favourites={favourites}
            addFavourite={addFavourite}
            removeFavourite={removeFavourite}
          />
        ))
      )}
    </div>
  );
};

export default PropertyList;