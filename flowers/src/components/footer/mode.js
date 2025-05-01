import './mode.css';

export default function Mode({title,items}) {
    return (
        <div className="mode">
            <h3>{title}</h3>
            {items.map((item, index) => (
                <h5 key={index}>{item}</h5>
            ))}
        </div>
    );
}