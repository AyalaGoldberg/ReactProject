
import React from 'react';
import { useCart } from './shoppingCart/CartOntext';import { useSelector } from 'react-redux';
import Product from './Product'; // נניח שהקומפוננטה של המוצר נמצאת באותו תיקייה
import ChooseProduct from './ChooseProduct';

const Gallery = ({ products }) => {
    const { addToCart } = useCart();
    // const products = useSelector((state) => state.products); // אם אתה משתמש ב-redux, תוכל להשתמש בזה כדי לקבל את המוצרים מה-state
  return (
    <div className="gallery">
      {products.map((product) => (
        <Product
          key={product.code} // מפתח ייחודי לכל מוצר
          image={product.image}
          price={product.price}
          code={product.code}
          type={product.type}
          product={product}
          ChooseProduct={ChooseProduct} // פונקציה להוספת מוצר לעגלה, יש להגדיר אותה בקומפוננטה ההורה
          // אם יש צורך, ניתן להעביר גם פרופס כמו addToCart או כל פרופס אחר שצריך
        />
      ))}
    </div>
  );
};

export default Gallery;

