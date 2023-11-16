import axios from 'axios';
import { createContext, useContext, useEffect, useReducer, useState } from 'react'
import reducer from '../Reducer/ProductReducer';

const AppContext = createContext()

const API = "http://localhost:9000/productdata/";
// const API = "https://api.pujakaitem.com/api/products";

function AppProvider({children}) {

  const [numId, setNumId] = useState([])

  console.log(API);

  const initialAuthState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: [],
  }

  const [state , dispatch] = useReducer(reducer,initialAuthState);

  const getProducts = async (url) => {
    dispatch({type: "SET_LOADING"})
    try {
      const res = await axios.get(url)
      const products = await res.data;
      // console.log(products);
      dispatch({type: "SET_MY_API_DATA", payload: products })
    }catch(error) {
      dispatch({type: "API_ERROR"})
    }

  }

  // SingleProduct ***
  const gitSingleProduct = async (url) => {
    dispatch({type: "SET_SINGLE_LOADING"})
    try{
      const res = await axios.get(`${url}`)
      const singleProduct = await res.data;
      // console.log(singleProduct);
      dispatch({type: "SET_SINGLE_PRODUCT", payload: singleProduct })
    } catch (error) {
      dispatch({type: "SET_SINGLE_ERROR"})
    }
  }

  useEffect(() => {
    getProducts(API)
    gitSingleProduct(`${API}${numId}`)
  },[ numId])

  
  // console.log(state);
  return (
    <AppContext.Provider value={{...state , gitSingleProduct , setNumId }}>{children}</AppContext.Provider>
  )
};

// Custom Hooks
const useProductContext = () => {
    return useContext(AppContext)
}

export {AppProvider , AppContext , useProductContext }