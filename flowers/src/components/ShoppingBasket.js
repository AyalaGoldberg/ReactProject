


// export default function ShoppingBasket({productsForBuying}) {

//     const Extras = [ 
//         { img: "flowers/src/images/extrasImg/new-pic-flowernet-balloons-greyBG-100x100.jpg",describe:"ברכות ובלונים", price: 20},
//         { img: "flowers/src/images/extrasImg/new-pic-flowernet-De-karina-–-with-love-greyBG-100x100.jpg",describe:"שוקולדים ופרלינים", price: 35,},
//         { img: "flowers/src/images/extrasImg/new-pic-flowernet-יין-Dalton-אסטייט-מרלו-greyBG-100x100.jpg",describe:"יינות", price: 35,},
//         { img: "flowers/src/images/extrasImg/מוצרים-משלמים-כלים-ונרות-קטגוריה-4-100x100.jpg",describe:"כלים ונרות", price: 35,},
//     ];
//     return (
//         <>
//             {/* {productsForBuying.length === 0 ? (
//                 <h3>סל הקניות שלך ריק כרגע</h3>
//             ) : (
//                 productsForBuying.forEach(element => {
//                     <div>
//                         <img src={element.img} />
//                         <p>{element.price}</p>
//                         <p>{element.amount}</p>
//                     </div>
//                 }
//                 )
//             )} */}

//             {Extras.map((element, index) => (
//   <div key={index}>
//     <p>jjjjjjbnhbgfvggbf</p>
//     <h4>{element.describe}</h4>
//     <h5>{element.price}</h5>
//   </div>
// ))}





//         </>
//     );


// }




import img1 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/extrasImg/new-pic-flowernet-balloons-greyBG-100x100.jpg'
import img2 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/extrasImg/new-pic-flowernet-De-karina-–-with-love-greyBG-100x100.jpg'
import img3 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/extrasImg/new-pic-flowernet-יין-Dalton-אסטייט-מרלו-greyBG-100x100.jpg'
import img4 from 'C:/תיקיה מסלול/ריאקט/הפרוייקט בריאקט/ReactProject/flowers/src/images/extrasImg/מוצרים-משלמים-כלים-ונרות-קטגוריה-4-100x100.jpg'

import './ShoppingBasket.css'; // ניצור קובץ CSS נפרד

export default function ShoppingBasket({ productsForBuying }) {
    const images = [];
    const Extras = [
        { img: img1, describe: "ברכות ובלונים", price: 20 },
        { img: img2, describe: "שוקולדים ופרלינים", price: 35 },
        { img: img3, describe: "יינות", price: 35 },
        { img: img4, describe: "כלים ונרות", price: 35 },
    ];

    return (
        <>
            {/* {productsForBuying.length === 0 ? (
                <h3>סל הקניות שלך ריק כרגע</h3>
            ) : (
                productsForBuying.forEach(element => {
                    <div>
                        <img src={element.img} />
                        <p>{element.price}</p>
                        <p>{element.amount}</p>
                    </div>
                }
                )
            )} */}
            <div className="extras-container">
                <h2>מוצרים משלימים לבחירה:</h2>
                {Extras.map((element, index) => (
                    <div className="extra-card" key={index}>
                        <img src={element.img} alt={element.describe} />
                        <h4>{element.describe}</h4>
                        <p>{element.price} ₪</p>
                    </div>
                ))}
            </div>

        </>
    );
}
