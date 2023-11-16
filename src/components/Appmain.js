import React from 'react';
import Appheader from './Appheader';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { locations, property} from './export';
import Appfooter from './Appfooter';
import Marquee from 'react-fast-marquee';
import "./Appmain.css"

const Appmain = () => {
  const [text] = useTypewriter({
    words: ['Hotels', 'Apartments', 'Resorts', 'Villas', 'Cabins', 'Cottages', 'Glamping', 'Serviced Apartments', 'Vacation Homes', 'Guest House', 'Hostel', 'Motels'],
    loop: 0,
  });
  return (
    <>
    <Appheader/>
    <div className='section-1'>
      <p>
      Booker.io helps you to book <span>{text}</span>
      <Cursor cursorColor='red' />
      </p>
    </div>
    <div className='slider'>
      <h1> Select Your location</h1>
    <Marquee direction="left" speed={80} style={{marginBottom:"3rem"}}>
              {locations.map((locat, index) => (
                <div key={index} className="wrapper-class-1">
                  <img src={locat.image} alt={locat.name}/>
                  <p style={{ color: 'white', textAlign:"center" }}>{locat.title}</p>
                </div>
              ))}
    </Marquee>
    </div>
    <div className='slider-2'>
    <h1> List of properties</h1>
    <Marquee direction="left" speed={80} style={{marginBottom:"3rem"}}>
              {property.map((prop, index) => (
                <div key={index} className="wrapper-class">
                  <img src={prop.image} alt={prop.name}/>
                  <p style={{ color: 'white', textAlign:"center" }}>{prop.name}</p>
                </div>
              ))}
    </Marquee>
    </div>
    <Appfooter/>
    </>
  )
}


export default Appmain;
