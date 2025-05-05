// import img1 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/extrasImg/new-pic-flowernet-balloons-greyBG-100x100.jpg';
// import img2 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/extrasImg/new-pic-flowernet-De-karina-–-with-love-greyBG-100x100.jpg';
// import img3 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/extrasImg/new-pic-flowernet-יין-Dalton-אסטייט-מרלו-greyBG-100x100.jpg';
// import img4 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/extrasImg/מוצרים-משלמים-כלים-ונרות-קטגוריה-4-100x100.jpg';
// import img5 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/extrasImg/בלון-חג-שמח.jpeg';
// import img6 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/extrasImg/גלויה-23.gif';
// import img7 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/extrasImg/מקרונים-בקופסא.gif';
// import img8 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/extrasImg/פרפרים.gif';
// import { useState } from 'react';

// export default function AdditionalProducts() { 

//     const Extras = [
//         { img: img1, describe: "ברכות ובלונים", price: 20 },
//         { img: img2, describe: "שוקולדים ופרלינים", price: 35 },
//         { img: img3, describe: "יינות", price: 35 },
//         { img: img4, describe: "כלים ונרות", price: 35 },
//         { img: img5, describe: "בלון חג שמח", price: 35 },
//         { img: img6, describe: "כרטיס ברכה", price: 35 },
//         { img: img7, describe: "פרלינים", price: 35 },
//         { img: img8, describe: "פרפרים", price: 35 },
//     ];

//     const [beginIndex, setBeginIndex] = useState(2);
//     const [endIndex, setEndIndex] = useState(6);

//     function moveMore() {
//         if (endIndex < Extras.length) {
//             setBeginIndex(beginIndex + 1);
//             setEndIndex(endIndex + 1);
//         }
//     }

//     function moveLess() {
//         if (beginIndex > 0) {
//             setBeginIndex(beginIndex - 1);
//             setEndIndex(endIndex - 1);
//         }
//     }

//     return(
//         <div className="extras-container">
//                 <button onClick={moveLess} disabled={beginIndex === 0}>⟪</button>
//                 <div className="extras-items">
//                     {Extras.slice(beginIndex, endIndex).map((element, index) => (
//                         <div className="extra-card" key={index}>
//                             <img src={element.img} alt={element.describe} />
//                             <h4>{element.describe}</h4>
//                             <p>{element.price} ₪</p>
//                         </div>
//                     ))}
//                 </div>
//                 <button onClick={moveMore} disabled={endIndex === Extras.length}>⟫</button>
//             </div>
//     );
// }

import './AdditionalProducts.css';
import { useState } from 'react';

import img1 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/extrasImg/new-pic-flowernet-balloons-greyBG-100x100.jpg';
import img2 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/extrasImg/new-pic-flowernet-De-karina-–-with-love-greyBG-100x100.jpg';
import img3 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/extrasImg/new-pic-flowernet-יין-Dalton-אסטייט-מרלו-greyBG-100x100.jpg';
import img4 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/extrasImg/מוצרים-משלמים-כלים-ונרות-קטגוריה-4-100x100.jpg';
import img5 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/extrasImg/בלון-חג-שמח.jpeg';
import img6 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/extrasImg/גלויה-23.gif';
import img7 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/extrasImg/מקרונים-בקופסא.gif';
import img8 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/extrasImg/פרפרים.gif';

export default function AdditionalProducts() {
    const Extras = [
        { img: img1, describe: "ברכות ובלונים", price: 20 },
        { img: img2, describe: "שוקולדים ופרלינים", price: 35 },
        { img: img3, describe: "יינות", price: 35 },
        { img: img4, describe: "כלים ונרות", price: 35 },
        { img: img5, describe: "בלון חג שמח", price: 35 },
        { img: img6, describe: "כרטיס ברכה", price: 35 },
        { img: img7, describe: "פרלינים", price: 35 },
        { img: img8, describe: "פרפרים", price: 35 },
    ];

    const [beginIndex, setBeginIndex] = useState(2);
    const [endIndex, setEndIndex] = useState(6);

    function moveMore() {
        if (endIndex < Extras.length) {
            setBeginIndex(beginIndex + 1);
            setEndIndex(endIndex + 1);
        }
    }

    function moveLess() {
        if (beginIndex > 0) {
            setBeginIndex(beginIndex - 1);
            setEndIndex(endIndex - 1);
        }
    }

    return (
        <>
            <h2>למתנה מושלמת:</h2>
            <div className="extras-container">

                <button onClick={moveLess} disabled={beginIndex === 0}>⟪</button>
                <div className="extras-items">
                    {Extras.slice(beginIndex, endIndex).map((element, index) => (
                        <div className="extra-card" key={index}>
                            <img src={element.img} alt={element.describe} />
                            <h4>{element.describe}</h4>
                            <p>{element.price} ₪</p>
                        </div>
                    ))}
                </div>
                <button onClick={moveMore} disabled={endIndex === Extras.length}>⟫</button>
            </div>
        </>
    );
}