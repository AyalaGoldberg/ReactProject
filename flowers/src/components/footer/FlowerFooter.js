import Mode from "./mode";
import './mode.css';


export default function FlowerFooter() {
    const categories = ['ראשי', 'אודות', 'לקוחות מספרים', 'צור קשר'];
    const galleries = ['ברים', 'מרכזי שולחן', 'עיצוב לכסא כלה', 'זרי פרחים לכלה', 'חופות'];

    return (
        <div className="footer">
            <Mode title="קטגוריות" items={categories} />
            <Mode title="גלריות" items={galleries} />
        </div>
    );
}