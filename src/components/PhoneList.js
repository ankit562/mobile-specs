const PhoneList = ({ phones }) => {
    return (
      <div className="phone-list">
        {phones.map(phone => (
          <div key={phone.id} className="phone-card">
            <h3>{phone.name}</h3>
            <p>Brand: {phone.brand}</p>
            <p>Price: ${phone.price}</p>
            <p>Camera: {phone.camera}MP</p>
            <p>Storage: {phone.storage}GB</p>
            <p>Battery: {phone.battery}mAh</p>
            {phone.featured && <span className="featured-badge">New!</span>}
          </div>
        ))}
      </div>
    );
  };
  
  export default PhoneList;