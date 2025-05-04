
import img1 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/headerImg/19510023a_23032020173253_large.jpg';
import img2 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/headerImg/FB_IMG_1578127969517-768x512.jpg';
import img3 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/headerImg/fdd29b67-20bf-4237-85dc-65efecf4e17f.jpg';
import img4 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/headerImg/thumbnails_420_332_detailed_2F6575_2F20221121_131429.jpg';
import img5 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/headerImg/WhatsApp-Image-2020-12-06-at-17.43.52.jpeg';
import { useState } from 'react';
import { useEffect } from 'react';
import './Header.css';


export default function Header(){
    const images=[img1,img2,img3,img4,img5];
    const [index,setIndex]=useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
                setIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 5000)
        return () => clearInterval(intervalId);
},[]);
    return(
        <div className='headerImg'>
            <h1>הבית לעיצובי פרחים לאירועים</h1>
            <img src={images[index]} />
        </div>
    );
}