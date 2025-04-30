


import './ShoppingBasket.css'; // ניצור קובץ CSS נפרד

export default function ShoppingBasket({ productsForBuying }) {
  const Extras = [ 
    { img: "flowers/src/images/extrasImg/new-pic-flowernet-balloons-greyBG-100x100.jpg", describe: "ברכות ובלונים", price: 20 },
    { img: "flowers/src/images/extrasImg/new-pic-flowernet-De-karina-–-with-love-greyBG-100x100.jpg", describe: "שוקולדים ופרלינים", price: 35 },
    { img: "flowers/src/images/extrasImg/new-pic-flowernet-יין-Dalton-אסטייט-מרלו-greyBG-100x100.jpg", describe: "יינות", price: 35 },
    { img: "flowers/src/images/extrasImg/מוצרים-משלמים-כלים-ונרות-קטגוריה-4-100x100.jpg", describe: "כלים ונרות", price: 35 },
  ];

  return (
    <div className="extras-container">
      {Extras.map((element, index) => (
        <div className="extra-card" key={index}>
          <img src={element.img} alt={element.describe} />
          <h4>{element.describe}</h4>
          <p>{element.price} ₪</p>
        </div>
      ))}
    </div>
  );
}
