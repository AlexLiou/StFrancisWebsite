import React, {Fragment} from 'react';
import logo from '../images/22432_4d5ca8ed2593e.image.jpg';
import image1 from '../images/AR-604135206.jpg';
import image2 from  '../images/EQLiv-LWoAAPs6y.png';
import {Slide} from 'react-slideshow-image'
import '../styles/SlideShow.css'


const SlideShow = () => {
	
const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}


	return (
		
    <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': logo}}>
              <span>
                  <img src = {logo} />
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': image1}}>
              <span>
              <img src = {image1} />
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': image2}}>
              <span>
              <img src = {image2} />
              </span>
            </div>
          </div>
        </Slide>
      </div>
  
        )
   
}


export default SlideShow;