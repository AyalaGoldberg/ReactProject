import './mode.css';

export default function Mode({title,items}) {
    return (
        <div className="mode">
            <h3>{title}</h3>
            <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </div>
    );
}