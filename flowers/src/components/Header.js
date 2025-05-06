
import img1 from '../images/headerImg/800_63f267227c49c.png';
import img2 from '../images/headerImg/fdd29b67-20bf-4237-85dc-65efecf4e17f.jpg';
import img4 from '../images/headerImg/thumbnails_420_332_detailed_2F6575_2F20221121_131429.jpg';
import img5 from '../images/headerImg/WhatsApp-Image-2020-12-06-at-17.43.52.jpeg';
import { useState } from 'react';
import { useEffect } from 'react';
import './Header.css';


export default function Header(){
    const images=[img1,img2,img4,img5];
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