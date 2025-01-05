import React from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from '../data/properties.json';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaBed, FaHome, FaMoneyBillWave, FaFileContract, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

/**
 * PropertyDetails component for displaying detailed information about a property
 * @returns {JSX.Element} The rendered component
 */
const PropertyDetails = () => {
  const { id } = useParams();
  // Find the property in the properties data using the ID
  const property = propertiesData.find((prop) => prop.id === id);

  // If the property is not found, display a message
  if (!property) {
    return <div>Property not found</div>;
  }

  // Format the price and date for display
  const formattedPrice = property.price.toLocaleString();
  const formattedDate = `${property.added.day} ${property.added.month}, ${property.added.year}`;

  return (
    <div>
      {/* Navbar component */}
      <Navbar />
      <div className="container my-4">
        <h2>{property.name}</h2>
        <h4 className="text-muted"><FaMapMarkerAlt /> {property.location}</h4>
        <br/>
        <div className="d-flex justify-content-center">
          {/* Main property image */}
          <img src={property.picture} alt="Property" className="img-fluid rounded mb-4" style={{ width: '80%', height: 'auto' }} />
        </div>
        <div className="d-flex justify-content-center mb-4 flex-wrap">
          {/* Thumbnail images */}
          {property.thumbnails.map((thumbnail, index) => (
            <img key={index} src={thumbnail} alt="Thumbnail" className="img-thumbnail mx-2 thumbnail-hover" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
          ))}
        </div>
        <Tabs>
          <TabList>
            <Tab>Description</Tab>
            <Tab>Floor Plan</Tab>
            <Tab>Map</Tab>
          </TabList>

          <TabPanel>
            <div className="p-4 bg-white rounded shadow-sm">
            <br/>
              <div className="property-details-box">
                <div className="property-details-item"><FaHome /> <strong>Type:</strong> {property.type}</div>
                <div className="property-details-item"><FaMoneyBillWave /> <strong>Price:</strong> ${formattedPrice}</div>
                <div className="property-details-item"><FaBed /> <strong>Bedrooms:</strong> {property.bedrooms}</div>
                <div className="property-details-item"><FaFileContract /> <strong>Tenure:</strong> {property.tenure}</div>
              </div>
              <br/>
              <h4>Description</h4>
              <br/>
              <p className="property-description">{property.description}</p>
              <br/>
              <p><FaCalendarAlt /> <strong> Added on:</strong> {formattedDate}</p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="d-flex justify-content-center">
              <div className="p-4 bg-white rounded shadow-sm" style={{ width: '80%' }}>
                {/* Floor plan image */}
                <img src={property.floorplan} alt="Floor Plan" className="img-fluid" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="d-flex justify-content-center">
              <div className="p-4 bg-white rounded shadow-sm" style={{ width: '80%' }}>
                {/* Embed Google Map iframe */}
                <iframe
                  title="Google Map"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default PropertyDetails;
