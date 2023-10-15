
 import { useFont } from '../routes/FontContext';
 import { useColor } from '../routes/ColorContext'; // Adjust the path based on your actual folder structure


import React, { useState, useEffect } from "react";
import Navbard from "./Navbard";
import AdvertisementBox from "./AdvertisementBox";
import ProductCard from "./ProductCard";
import Footerdash from "./Footerdash";
import LaptopImage1 from '../images/HP-Laptop-15s-fq5111TU-3.jpg';
import sofaset1 from '../images/sofa-set-1.jpg';
import tomato1 from '../images/tomato-1.jpg';
import Redmi12 from '../images/redmi-12-3.jpeg';
import Philips1 from '../images/Philips-3.jpeg'
const initialProducts = [ {    id: 1,    name: 'HP Laptop 15s-fq5111TU',    description: 'Stay connected to what matters',    likes: 5,audio:"",imageUrl:LaptopImage1  },  {    id: 2,    name: 'Wakefit Three Seater',    description: 'Wakefit for the modern Indian household.',    likes: 7,audio:"",imageUrl:sofaset1  },  { id: 3,    name: 'Tomato-Blaby Special',    description: 'Perfectly round and smooth',    likes: 12,audio:"",imageUrl:tomato1 },{    id: 4,    name: 'Redmi 12 5G',    description: 'REDMI NOTE 12 at an unbeatable price.',    likes: 12,audio:"",imageUrl:Redmi12 },{    id: 5,    name: 'Philips X2/27 Fidelio ',    description: 'Headphones for neutral sound listening',    likes: 12,audio:"",imageUrl:Philips1  },{    id: 14,    name: 'Product 14',    description: 'This is product 14',    likes: 12, audio:"" },{    id: 15,    name: 'Product 15',    description: 'This is product 15',    likes: 12,audio:""  },{    id: 16,    name: 'Product 16',    description: 'This is product 16',    likes: 12,audio:""  },{    id: 17,    name: 'Product 17',    description: 'This is product 17',    likes: 12, audio:"" },{    id: 18,    name: 'Product 18',    description: 'This is product 18',    likes: 12, audio:"" },{    id: 19,    name: 'Product 19',    description: 'This is product 19',    likes: 12, audio:""  },  {    id: 9,    name: 'Product 5',    description: 'This is product 5',    likes: 3, audio:"" },  {    id: 10,    name: 'Product 6',    description: 'This is product 6',    likes: 8,audio:""  },  {    id: 7,    name: 'Product 7',    description: 'This is product 7',    likes: 6, audio:"" },  {    id: 8,    name: 'Product 8',    description: 'This is product 8',    likes: 12,audio:""  },{    id: 9,    name: 'Product 9',    description: 'This is product 9',    likes: 12,audio:""  },{    id: 10,    name: 'Product 10',    description: 'This is product 10',    likes: 12, audio:"" },{    id: 11,    name: 'Tomato-Blaby Special',    description: 'Perfectly round and smooth',    likes: 12,audio:"",imageUrl:tomato1 },{    id: 12,    name: 'Redmi 12 5G',    description: 'REDMI NOTE 12 at an unbeatable price.',    likes: 12,audio:"",imageUrl:Redmi12 },{    id: 13,    name: 'Philips X2/27 Fidelio ',    description: 'Headphones for neutral sound listening',    likes: 12,audio:"",imageUrl:Philips1  },{    id: 14,    name: 'Product 14',    description: 'This is product 14',    likes: 12, audio:"" },{    id: 15,    name: 'Product 15',    description: 'This is product 15',    likes: 12,audio:""  },{    id: 16,    name: 'Product 16',    description: 'This is product 16',    likes: 12,audio:""  },{    id: 17,    name: 'Product 17',    description: 'This is product 17',    likes: 12, audio:"" },{    id: 18,    name: 'Product 18',    description: 'This is product 18',    likes: 12, audio:"" },{    id: 19,    name: 'Product 19',    description: 'This is product 19',    likes: 12, audio:"" }];
const Dashboard = () => {
  const { backgroundColor } = useColor();
  const [products, setProducts] = useState([]);
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);
  const [spokenText, setSpokenText] = useState("");
  // Other showMore states and handlers
  let utterance = null;
  const handleSpeakDescription = (text) => {
    if ('speechSynthesis' in window) {
      utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      console.log("Speech synthesis is not supported in this browser.");
    }
  };
  
  const handlePauseDescription = () => {
    if ('speechSynthesis' in window && utterance) {
      speechSynthesis.pause();
    }
  };
  useEffect(() => {
    // Fetch data from your API here and update the products state.
    fetch("http://localhost:4000/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API returns an array of products.
        console.log("hi")
        console.log(data);
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const handleClick1 = () => setShowMore1(!showMore1);
  const handleClick2 = () => setShowMore2(!showMore2);
  const handleClick3 = () => setShowMore3(!showMore3);
  const handleClick4 = () => setShowMore4(!showMore4);

 
  return (
    <div style={{backgroundColor}}>
      <Navbard />
      <AdvertisementBox />
      <h1>Recently Added Items</h1>
      <div className="product-row">
        {/* Map through the products and render ProductCard components */}
        {products.slice(0, 7).map((product) => (
          <ProductCard
            key={product._id}
            name={product.name}
            description={product.description}
           
            // Add other product properties here as needed
          />
        ))}
      </div>
      <h1 className="product-headings">
        Bestselling Items
      </h1>
      <div className="product-row">
        {initialProducts.slice(1, 3).map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            imageUrl={product.imageUrl}
            
          />
        ))}
        {showMore3 ? (
          initialProducts.slice(3, 5).map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))
        ) : null}
        {products.length > 3 && (
          <button className="view-more" onClick={handleClick3}>
            {showMore3 ? 'View Less' : 'View More'}
          </button>
        )}
      </div>
      <Footerdash />
    </div>
  );
};

export default Dashboard;
