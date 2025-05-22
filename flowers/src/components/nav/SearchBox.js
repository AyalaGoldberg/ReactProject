import { useRef, useState } from "react";
  
  
  
  export default function SearchBox({searchTerm, setSearchTerm, productsToSearch }) {

    const [filteredProducts, setFilteredProducts] = useState([]);
    const userSelected = useRef(false);

    const handleSearch = (e) => {
        const value = e.target.value;
        userSelected.current = false; // אפס את הדגל כשמשתמש מקליד
        setFilteredProducts(
            (productsToSearch || []).map(product => product.name)
                .filter(name =>
                    name.toLowerCase().includes(value.toLowerCase())
                )
        );
        setSearchTerm(value);
    };
    return (


  <div className="search-area">
                    <input
                        type="text"
                        placeholder="לחיפוש מוצר..."
                        className="navbar-search"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <div className="search-results-container">
                        {filteredProducts.length > 0 && searchTerm ? (
                            <ul className="search-results">
                                {filteredProducts.map((product, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            setSearchTerm(product);
                                            setFilteredProducts([]);
                                            userSelected.current = true; // סימון שבחר משתמש
                                        }}
                                        style={{ cursor: "pointer" }}
                                    >
                                        {product}
                                    </li>
                                ))}
                            </ul>
                        ) : (searchTerm && filteredProducts.length === 0 && (productsToSearch?.length > 0) && !userSelected.current) ? (
                            <p className="no-results">מצטערים. לא נמצאו פריטים התואמים את החיפוש שלך</p>
                        ) : null}
                    </div>
                  </div>
    );
  }

