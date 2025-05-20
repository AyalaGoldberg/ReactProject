import './AdditionalProducts.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function AdditionalProducts() {
   
    const Extras = useSelector((state) => state.cart);
    
    const [beginIndex, setBeginIndex] = useState(2);
    const [endIndex, setEndIndex] = useState(6);

    function moveMore() {
        if (endIndex < Extras.length) {
            setBeginIndex(beginIndex + 1);
            setEndIndex(endIndex + 1);
        }
    }

    function moveLess() {
        if (beginIndex > 0) {
            setBeginIndex(beginIndex - 1);
            setEndIndex(endIndex - 1);
        }
    }

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === 'ArrowRight') {
                moveMore();
            } else if (event.key === 'ArrowLeft') {
                moveLess();
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [beginIndex, endIndex, Extras.length]);

    return (
        <>
            <h2>:למתנה מושלמת👌</h2>
            <div className="extras-container">

                <button onClick={moveLess} disabled={beginIndex === 0}>⟪</button>
                <div className="extras-items">
                    {Extras.slice(beginIndex, endIndex).map((element, index) => (  
                        <div className="extra-card" key={index}>
                            <img src={element.productImage} alt={element.name} />
                            <h4>{element.name}</h4>
                            <p>{element.price} ₪</p>
                        </div>
                    ))
                }
                </div>
                <button onClick={moveMore} disabled={endIndex === Extras.length}>⟫</button>
            </div>
        </>
    );
}