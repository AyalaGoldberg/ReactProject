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


//bar picturs
import img9 from '../images/productsImg/barDesigns/products-622-525x700.jpg';
//chairs picturs
import img10 from '../images/productsImg/calasChairDesigns/2000_675df7a76c272.webp';
import img11 from '../images/productsImg/calasChairDesigns/2000_675df6902859d.webp';
import img12 from '../images/productsImg/calasChairDesigns/2000_675df69c9a6ce.webp';
import img13 from '../images/productsImg/calasChairDesigns/2000_675df53e49b0e.webp';
import img14 from '../images/productsImg/calasChairDesigns/2000_675df8484810d.webp';
import img15 from '../images/productsImg/calasChairDesigns/2000_675df6e4ee17c.webp';
//bouquets picturs
import img16 from '../images/productsImg/calaBouquets/זר-כלה-וורדים-אדומים.jpg';
import img17 from '../images/productsImg/calaBouquets/זר-כלה-ורד-גינה-525x567.gif';
import img18 from '../images/productsImg/calaBouquets/products-840.jpg';
import img19 from '../images/productsImg/calaBouquets/זר-כלה-כותנה-300x295.gif';
import img20 from '../images/productsImg/calaBouquets/זר-כלה-שדה-פרחים-525x521.gif';
import img21 from '../images/productsImg/calaBouquets/סידור-שולחן-אוולי-1-525x183.gif';

//hupot picturs
import img22 from '../images/productsImg/hupotDesigns/סידור-חופה-לבן-צהוב-כתום-525x700.gif';
import img23 from '../images/productsImg/hupotDesigns/חופה-3-275x566.gif';
import img24 from '../images/productsImg/hupotDesigns/סידור-במרכז-הקורה--525x700.gif';
import img25 from '../images/productsImg/hupotDesigns/חופה-של-טל-525x700.gif'; // <-- הסר או הגיברי שורה זו אם הקובץ לא קיים 
// <-- הסר או הגיברי שורה זו אם הקובץ לא קיים
// import img18 from '../images/productsImg/hupotDesigns/חופה-2-275x566.gif'; // <-- הסר או הגיברי שורה זו אם הקובץ לא קיים
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
    ],
    barDesigns: [
      { id: 1, description: "עיצוב בר יוקרתי", productImage: img9, stock: 5, price: 50, name: "עיצוב בר יוקרתי" },
    ],
    calasBouquets: [
      { id: 1, description: "זר פרחים אדומים עשיר בגוונים עמוקים, מעניק תחושת חום ורומנטיקה.", productImage: img16, stock: 5, price: 280, name: "פרחים אדומים" },
      { id: 2, description: "זר כותנה עדין וטבעי, מעניק מראה ייחודי ונקי.", productImage: img17, stock: 5, price: 320, name: "פרחי כותנה" },
      { id: 3, description: "זר פרחים לבנים טהור ונקי, משדר שלווה ויוקרה.", productImage: img18, stock: 5, price: 250, name: "זר לבן" },
      { id: 4, description: "זר לבן מעוצב בקפידה עם ירק עדין וטקסטורות טבעיות.", productImage: img19, stock: 5, price: 390, name: "זר לבן מעוצב" },
      { id: 5, description: "זר צבעוני עליז, משלב פרחים בגוונים שונים למראה תוסס.", productImage: img20, stock: 5, price: 300, name: "זר צבעוני" },
      { id: 6, description: "זר כלה מודרני בעיצוב ייחודי עם פרחים נדירים.", productImage: img21, stock: 5, price: 430, name: "זר כלה מודרני" },


    ],
    calasChair: [
      { id: 1, description: "כיסא בעיצוב מלכותי, מושלם לאירועים חגיגיים ויוקרתיים.", productImage: img10, stock: 5, price: 80, name: "כיסא כלה בעיצוב כפרי" },
      { id: 2, description: "כיסא בעיצוב כפרי חמים, מעניק מראה טבעי ואינטימי.", productImage: img11, stock: 5, price: 65, name: "כיסא כלה בעיצוב מלכותי" },
      { id: 3, description: "כיסא מפואר בעבודת יד, מוסיף תחושת יוקרה לכל אירוע.", productImage: img12, stock: 5, price: 90, name: "כיסא כלה מפואר" },
      { id: 4, description: "כיסא מרהיב ונוח עם עיצוב עכשווי וטאץ' אלגנטי.", productImage: img13, stock: 5, price: 75, name: "כיסא כלה מרהיב" },
      { id: 5, description: "כיסא מעוצב בקווים נקיים, מתאים לאירועים מודרניים.", productImage: img14, stock: 5, price: 70, name: "כיסא כלה מעוצב" },
      { id: 6, description: "כיסא סטייליסטי עם ריפוד איכותי ועיצוב עדין.", productImage: img15, stock: 5, price: 85, name: "כיסא כלה סטייליסטי" },
    ],
    hupotDesigns: [
      { id: 1, description: "עיצוב חופה ייחודי ומהודר, המשלב יופי טבעי וקווים אלגנטיים, להשלמת האווירה המרגשת.", productImage: img22, stock: 5, price: 1000, name: "עיצוב מרהיב לחופה" },
      { id: 2, description: "עיצוב חופה בסגנון סולידי עם פרחים לבנים ונרות. מתאים לאירועים יוקרתיים ורשמיים.", productImage: img23, stock: 10, price: 1700, name: "עיצוב סולידי לחופה" },
      { id: 3, description: "סידור חופה עשיר בפרחים צבעוניים ועיטורים טבעיים, יוצר אווירה חמה ומזמינה.", productImage: img24, stock: 10, price: 2000, name: "עיצוב צבעוני לחופה" },
      { id: 4, description: "עיצוב חופה מודרני ונקי, כולל קווים מינימליסטיים ואלמנטים טבעיים לנראות עכשווית.", productImage: img25, stock: 10, price: 1500, name: "עיצוב חופה מודרני" },


    ]
  },
  reducers: {
    updateStock(state, action) {
      const { id, amount } = action.payload;
      // עדכון בכל הקטגוריות
      for (const key of Object.keys(state)) {
        const product = state[key].find && state[key].find(product => product.id === id);
        if (product) {
          product.stock += amount;
          break;
        }
      }
    },
    // אפשר להוסיף reducers נוספים לפי הצורך
  },
});

export const { updateStock } = productsSlice.actions;
export default productsSlice.reducer;



