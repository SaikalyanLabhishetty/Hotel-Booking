import React, { useState } from 'react';
import Appheader from './Appheader';
import Appfooter from './Appfooter';
import "./AppBook.css";

const AppBook = () => {
  const [show, setShow] = useState(true);
  const [formData, setFormData] = useState({
    location: '',
    property: '',
    check_in: '',
    check_out: ''
  });
 const locations = [
    {
        Name:"radisson blu",
        price:"1999/- day",
        location:"hyderabad",
        image:"/images/motel.jpg",
        property:"Hotel"
    }
]
  const displayData = (e) => {
    e.preventDefault();
    setShow(false);
  };
  

  return (
    <div>
      <Appheader />
      <form className='your-form'>
        <h3>Select your preferred location</h3>
        <div className='input-form' onSubmit={(e) => displayData(e)}>
          <select
            placeholder='select location'
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          >
            <option value="hyderabad">Hyderabad</option>
            <option value="chennai">Chennai</option>
          </select>
          <select
            placeholder='select property'
            value={formData.property}
            onChange={(e) => setFormData({ ...formData, property: e.target.value })}
          >
            <option value="hotel">Hotel</option>
            <option value="resort">Resort</option>
          </select>
          <label>Check-In : </label>
          <input
            type="date"
            placeholder='Check-in'
            value={formData.check_in}
            onChange={(e) => setFormData({ ...formData, check_in: e.target.value })}
          />
          <label>Check-Out :</label>
          <input
            type="date"
            placeholder='Check-out'
            value={formData.check_out}
            onChange={(e) => setFormData({ ...formData, check_out: e.target.value })}
          ></input>
          <button className='search' onClick={() => displayData()}>Search</button>
        </div>
      </form>
      {
        show && (
          <div className='search-display' style={{heiight:"10rem", display: 'flex', border: "2px solid white", justifyContent: "flex-start", flexDirection: "flex-start" }}>
            <div>
              {locations.map((item, index) => (
                <img key={index} src={item.image} alt={item.Name} style={{ maxWidth: '100%', maxHeight: '200px' }} />
              ))}
            </div>
            <div style={{ flex: 1, marginLeft: '20px' }}>
              <table style={{ width: '100%', color: "white" }}>
                <thead>
                  <tr style={{ border: "1px solid white" }}>
                    <th style={{ border: "1px solid white" }}>Name</th>
                    <th style={{ border: "1px solid white" }}>Price</th>
                    <th style={{ border: "1px solid white" }}>Location</th>
                    <th style={{ border: "1px solid white" }}>Property</th>
                  </tr>
                </thead>
                <tbody>
                  {locations.map((item, index) => (
                    <tr key={index}>
                      <td style={{ border: "2px solid grey", textAlign: "center" }}>{item.Name}</td>
                      <td style={{ border: "2px solid grey", textAlign: "center" }}>{item.price}</td>
                      <td style={{ border: "2px solid grey", textAlign: "center" }}>{item.location}</td>
                      <td style={{ border: "2px solid grey", textAlign: "center" }}>{item.property}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      }
      <Appfooter />
    </div>
  );
};

export default AppBook;
