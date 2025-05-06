import { createSlice } from "@reduxjs/toolkit";

import img1 from '../../images/extrasImg/new-pic-flowernet-balloons-greyBG-100x100.jpg';
import img2 from '../../images/extrasImg/new-pic-flowernet-יין-Dalton-אסטייט-מרלו-greyBG-100x100.jpg';
import img3 from '../../images/extrasImg/new-pic-flowernet-balloons-greyBG-100x100.jpg';
import img4 from '../../images/extrasImg/בלון-חג-שמח.jpeg';
import img5 from '../../images/extrasImg/גלויה-23.gif';
import img6 from '../../images/extrasImg/מקרונים-בקופסא.gif';
import img7 from '../../images/extrasImg/פרפרים.gif';

const cartSlice = createSlice({
    name: "adiitionalProducts",
    initialState: [
        { id: 1, productImage: img1, stock: 5, price: 20, name: "ברכות ובלונים"},
        { id: 2, productImage: img2, stock: 5, price: 35, name: "שוקולדים ופרלינים"},
        { id: 3, productImage: img3, stock: 5, price: 100, name: "יינות"},
        { id: 4, productImage: img4, stock: 2, price: 62, name: "כלים ונרות"},
        { id: 5, productImage: img5, stock: 33, price: 40, name: "בלון חג שמח"},
        { id: 6, productImage: img6, stock: 8, price: 32, name: "כרטיס ברכה"},
        { id: 7, productImage: img7, stock: 10, price: 45, name: "פרלינים"}
    ],
    reducers: {
        updateAmount: (state, action) => {
            const {id, newAmount} = action.payload;
            const product = state.find(item => item.id === id);
            if (product) {
                product.stock = newAmount;
            }
        },
    },
});

export const {updateAmount,updatePrice}=cartSlice.actions;
export default cartSlice.reducer;