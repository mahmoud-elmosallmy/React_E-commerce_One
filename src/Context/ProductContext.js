import axios from 'axios';
import { createContext, useContext, useEffect, useReducer, useState } from 'react'
import reducer from '../Reducer/ProductReducer';

const AppContext = createContext()

const API = "https://db-e-commerce-one.onrender.com/productdata/";

function AppProvider({children}) {

  const [numId, setNumId] = useState([])

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
      dispatch({type: "SET_SINGLE_PRODUCT", payload: singleProduct })
    } catch (error) {
      dispatch({type: "SET_SINGLE_ERROR"})
    }
  }

  useEffect(() => {
    getProducts(API)
    gitSingleProduct(`${API}${numId}`)
  },[ numId])

    return (
    <AppContext.Provider value={{...state , gitSingleProduct , setNumId }}>{children}</AppContext.Provider>
  )
};

// Custom Hooks
const useProductContext = () => {
    return useContext(AppContext)
}

export {AppProvider , AppContext , useProductContext }