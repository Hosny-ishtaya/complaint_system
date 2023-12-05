import React from 'react';

const ChaletCard = ({  }) => {
  return (
    <div className="chalet-card">
      {/* <img src={chalet.image} alt={chalet.name} /> */}
      <div className="chalet-details">
        <h2>{chalet.name}</h2>
        <p><strong>Location:</strong> salem</p>
        <p><strong>Price:</strong> $ 100 per night</p>
        <p><strong>Bedrooms:</strong> {chalet.bedrooms}</p>
        <p><strong>Bathrooms:</strong> {chalet.bathrooms}</p>
        <p><strong>Amenities:</strong></p>
        <ul>
          {chalet.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
        <div className="rating">
          <p><strong>Ratings:</strong> {chalet.rating} ({chalet.numReviews} reviews)</p>
        </div>
        <div className="action-buttons">
          <button className="book-now-button">Book Now</button>
          <button className="view-details-button">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ChaletCard;