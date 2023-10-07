import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    }
}

export const FilterContextProvider = ({children}) => {
    const { products } = useProductContext();
    // console.log(products);


    const [state, dispatch] = useReducer(reducer, initialState)

    // To Set The Grid View
    const setGridView = () => {
        return dispatch({type: "SET_GRID_VIEW"})
    }
    // To Set The List View
    const setListView = () => {
        return dispatch({type: "SET_LIST_VIEW"})
    }
    
    // To Set The Sorting
    const sorting = (event) => {
        let userValue = event.target.value;
        return dispatch({type: "SET_SORT_VALUE", payload: userValue})
    }
    // update The Filter Value
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        // console.log(name);
        // console.log(value);
        return dispatch({type: "UPDATE_FILTER_VALUE",payload: {name,value}})
    }
    // to Clear Filter
    const clearFilters = () => {
        return dispatch({type: "CLEAR_FILTER"})
    }
    // To Sort The Products
    useEffect(() => {
        dispatch({type: "FILTER_PRODUCTS"})
        dispatch({type: "SORTING_PRODUCTS"})
    },[products , state.sorting_value , state.filters])

    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PRODUCTS" , payload: products})
    },[products])

    // console.log(state.sorting_value);
    // console.log(state);
    return (
        <FilterContext.Provider value={{ ...state ,setGridView ,setListView ,sorting ,updateFilterValue ,clearFilters}}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};