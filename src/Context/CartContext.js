import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer";

let CartContext = createContext();
const getLocalCartData = () => {
    let localCartData = localStorage.getItem("elmosallyCart");
    if (localCartData) {
        return JSON.parse(localCartData);
    } else {
        return [];
    }
};

const inialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
}

let CartProvider = ({children}) => {

    const [state , disptach] = useReducer(reducer, inialState)

    const AddToCart = (id , color , amount , product) => {
        disptach({type: "ADD_TO_CART",payload: {id , color , amount , product}})
    }
    const setDecrease = (id) => {
        disptach({type: "SET_DECREASE",payload: id})
    }
    const setIncrease = (id) => {
        disptach({type: "SET_INCREASE",payload: id})
    }
    const removeItem = (id) => {
        disptach({type: "REMOVE_ITEM",payload: id})
    }
    const clearCart = () => {
        disptach({type: "CLEAR_CART"})
    }

    useEffect(() => {
        disptach({type: "CART_ITEM_PRICE_TOTAL"})
        localStorage.setItem("elmosallyCart", JSON.stringify(state.cart));
    },[state.cart])
    
    return <CartContext.Provider value={{...state , AddToCart , removeItem , clearCart , setDecrease ,setIncrease}}>{children}</CartContext.Provider>
};

const useCartContext = () => {
    return useContext(CartContext)
}

export { CartProvider , useCartContext };