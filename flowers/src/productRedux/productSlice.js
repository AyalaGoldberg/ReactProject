// import { createSlice } from '@reduxjs/toolkit';
// // טען את המידע על המוצרים מקובץ JSON
// import productsData from '../../constans/products.json'; // עדכן את הנתיב לפי מיקום הקובץ

// const images = require.context('../../assests/productImages', false, /\.(png|jpe?g|svg)$/);
// const imageList = images.keys().reduce((acc, image) => {
//   acc[image.replace('./', '')] = images(image);
//   return acc;
// }, {});


// const initialState = {
//   products: productsData.map(product => ({
//     ...product,
//     productImage: imageList[product.productImage] // טוען את התמונה לפי השם
//   }))
// };

// const productsSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     updateStock(state, action) {
//       const { id, amount } = action.payload;
//       const product = state.products.find(product => product.id === id);
//       if (product) {
//         product.stock += amount; // עדכון כמות המלאי
//       }
//     },
//     // אפשר להוסיף reducers נוספים לפי הצורך
//   },
// });
// //ייצוא
// export const { updateStock } = productsSlice.actions;
// export default productsSlice.reducer;






import { createSlice } from '@reduxjs/toolkit';
import img1 from '../images/productsImg/calasChairDesigns/2000_675df6902859d.webp';
import img2 from '../images/productsImg/hupotDesigns/סידור-חופה-לבן-צהוב-כתום-525x700.gif';
import img3 from '../images/productsImg/calaBouquets/products-840.jpg';
import img4 from '../images/productsImg/calasChairDesigns/2000_675df69c9a6ce.webp';
import img5 from '../images/productsImg/calaBouquets/זר-כלה-ורד-גינה-525x567.gif';
// import img9 from '../images/productsImg/hupotDesigns/חופה-2-275x566.gif';
import img6 from '../images/productsImg/calaBouquets/זר-כלה-וורדים-אדומים.jpg';
import img7 from '../images/productsImg/calasChairDesigns/2000_675df7a76c272.webp';
import img8 from '../images/productsImg/barDesigns/products-622-525x700.jpg';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
      { id: 1, description: "כסא בעיצוב מלכותי מרהיב, מושלם לאירועים חגיגיים ויוקרתיים. מעניק תחושת כבוד והדר.", productImage: img1, stock: 5, price: 20, name: "כסא כלה בעיצוב מלכותי" },

      { id: 2, description: "עיצוב ייחודי ומהודר לחופה, המשלב יופי טבעי וקווים אלגנטיים, להשלמת האווירה המרגשת.", productImage: img2, stock: 5, price: 35, name: "עיצוב מרהיב לחופה" },

      { id: 3, description: "זר לבן קלאסי ואלגנטי, מתאים לשימושים מגוונים באירועים ושמחות.", productImage: img3, stock: 5, price: 100, name: "זר לבן" },

      { id: 4, description: "כיסא מהודר בעיצוב מלכותי, עשוי בקפידה ובגימור מוקפד, מתאים לאירועים יוקרתיים ולמעמדים של כבוד..", productImage: img4, stock: 2, price: 62, name: "כסא כלה מפואר" },

      { id: 5, description: "זר עדין העשוי מפרחי כותנה, משרה אווירה טבעית, רגועה ומכובדת.", productImage: img5, stock: 33, price: 40, name: "זר כלה כותנה" },

      { id: 6, description: "פרחים אדומים עזים, מעניקים נגיעה של צבע וחום לעיצוב האירוע.", productImage: img6, stock: 8, price: 32, name: "פרחים אדומים" },

      { id: 7, description: "כסא בסגנון כפרי חמים, מתאים במיוחד לאירועים אינטימיים ואלגנטיים.", productImage: img7, stock: 10, price: 45, name: "כסא כלה בעיצוב כפרי" },

      { id: 8, description: "עיצוב שולחן ייחודי, משלב אלמנטים טבעיים עם סידור מוקפד ומכובד.", productImage: img8, stock: 10, price: 45, name: "עיצוב מרהיב לשולחן" },

      // { id: 7, productImage: img9, stock: 10, price: 45, name: "פרח כתום" },
    ]
  },
});

export const { updateStock } = productsSlice.actions;
export default productsSlice.reducer;



