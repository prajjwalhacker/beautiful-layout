import React from 'react'
import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import travel1 from '../../../public/images/travel1.jpg';
import travel2 from '../../../public/images/travel2.jpg';
import travel3 from '../../../public/images/travel3.jpg';
import Image from 'next/image';



const images = [travel1, travel2, travel3];

const Card = ({ image }) => (
      <Image src={image} alt='' width={300} height={200}/>  
);


function ReactCaro() {
    return (
      <div className="container">
        <ReactCaroussel
          infinite={true}
          autoplay={false}
          display={{
            dots: true,
            arrows: true
          }}
        >
          {images.map((item, index) => {
            return (
              <Card image={item} key={index}/>
            )
          })}
        </ReactCaroussel>
      </div>
    );
  }
  
  

function Carousal() {
  return (
    <div>
      <ReactCaro/>   
    </div>
  )
}

export default Carousal;