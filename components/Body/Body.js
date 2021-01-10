import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from '../../../src/components/img/B1.jpg'
import pic1 from '../../../src/components/img/B2.jpg'
import pic2 from '../../../src/components/img/B.jpg'
import Body1 from "../Body1/Body1";
import Workcard from '../Workcard/Workcard'
import Achievementcard from "../../Achievementcard/Achievementcard";
import Working from "../../Working/Working";


function Body() {
  return (
    <>
  <Carousel  style = {{zIndex : '-999', objectFit : 'cover', height : '100vh'}}>
  <Carousel.Item style = {{height : '700px', objectFit : 'contain' }}>
    <img style = {{objectFit : 'cover' }}
      className="d-block w-100"
      src={pic1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style = {{zIndex : '-999'}}>MAN OF EXCELLENCE</h3>
      <p style = {{zIndex : '-999'}}>Join The Move To Bring Ajegunle Dream to Reality</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style = {{height : '700px'}}>
    <img style = {{objectFit : 'cover' }}
      className="d-block w-100"
      src={pic1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style = {{zIndex : '-999'}}>MAN OF GREATNESS</h3>
      <p style = {{zIndex : '-999'}}>Join The Move To Bring Ajegunle Dream to Reality</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style = {{height : '700px' }}>
    <img style = {{objectFit : 'cover'}}
      className="d-block w-100"
      src={pic1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style = {{zIndex : '-999'}}>MAN OF POWER</h3>
      <p style = {{zIndex : '-999'}}>Join The Move To Bring Ajegunle Dream to Reality</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


 <Body1/>

<Workcard/> 
<Achievementcard/>
<Working/>


</>
)
}



export default Body;
