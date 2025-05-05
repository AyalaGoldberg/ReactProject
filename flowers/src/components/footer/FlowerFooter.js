import Mode from "./mode"; // ייבוא רכיב Mode להצגת כותרות ורשימות
import { MdOutlineFacebook } from "react-icons/md"; // ייבוא אייקון פייסבוק
import { AiOutlineInstagram } from "react-icons/ai"; // ייבוא אייקון אינסטגרם
import { BsPinterest } from "react-icons/bs"; // ייבוא אייקון פינטרסט
import './FlowerFooter.css'; // ייבוא קובץ ה-CSS לעיצוב

export default function FlowerFooter() {
    const categories = ['ראשי', 'אודות', 'לקוחות מספרים', 'צור קשר'];
    const galleries = ['ברים', 'מרכזי שולחן', 'עיצוב לכסא כלה', 'זרי פרחים לכלה', 'חופות'];
    const connect = ['טלפון 0527546523', 'מייל flowers@gmail.com', 'כתובת רחוב הפרחים 5 מודיעין', 'שעות פתיחה 09:00-18:00'];

    return (
        <div className="footer">
            {/* קונטיינר עבור הקבוצות */}
            <div className="content">
                <Mode title="צור קשר" items={connect} />
                <Mode title="קטגוריות" items={categories} />
                <Mode title="גלריות" items={galleries} />
            </div>
            {/* קונטיינר עבור האייקונים החברתיים */}
            <div className="social-icons">
                <MdOutlineFacebook />
                <AiOutlineInstagram />
                <BsPinterest />
            </div>
        </div>
    );
}