import {useEffect, useState} from 'react'
import { data } from '../data'
import Image from './Image'

export default function Listings() {

const [ image, setImage ] = useState(null);

    useEffect(() => {
   
   setImage(data[Math.floor(Math.random() * data.length)]);
  }, []);



 const handleClick = () => {
    
    setImage(data[Math.floor(Math.random() * data.length)]);
  };


  return (
    <>
  
    {image && <Image alt={image.alt} img={image.img} />
    }
       <button
    onClick={handleClick}
    >
        Generate another image
    </button>
    </>
    )
}