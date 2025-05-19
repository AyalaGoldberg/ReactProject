import './mode.css';
import { Link } from 'react-router-dom';

export default function Mode({title,items}) {
    return (
        <div className="mode">
            <h3>{title}</h3>
            <ul>
            {items.map((item, index) => (
                <li key={index} style={{ listStyle: "none", border: "none", padding: 0, margin: 0 }}>
                    <Link to="#" style={{ textDecoration: "none", color: "inherit", display: "block", padding: "8px 0" }}>
                        {item}
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    );
}