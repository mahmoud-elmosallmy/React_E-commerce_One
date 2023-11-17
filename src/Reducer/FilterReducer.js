function FilterReducer(state,action) {

    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((curElem) => curElem.price);
            let maxPrice = Math.max(...priceArr);
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: { ...state.filters, maxPrice, price: maxPrice },
            }
        
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            }
        
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            }
        
        case "SET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload,
            }
        case "SORTING_PRODUCTS":
            let newSortData;
            const {filter_products , sorting_value} = state;
            let tempSortProduct = [...filter_products];

            const sortingProducts = (a,b) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price
                }
                if (sorting_value === "highest") {
                    return b.price - a.price
                }
                if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name)
                }
                if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name)
                }
            }
            newSortData = tempSortProduct.sort(sortingProducts);
            return {
                ...state,
                filter_products: newSortData,
            }
        case "UPDATE_FILTER_VALUE":
            const {name,value} = action.payload;

            return {
                ...state,
                filters: { 
                    ...state.filters,
                    [name]: value,
                }
            }
        
        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let temFilterProduct = [...all_products];
            let { text ,category ,company ,color , price} = state.filters;

            if (text) {
                temFilterProduct = temFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text)
                });
            }
            if (category !== "all") {
                temFilterProduct = temFilterProduct.filter((curElem) => {
                    return curElem.category === category
                });
            }
            if (company !== "all") {
                temFilterProduct = temFilterProduct.filter((curElem) => {
                    console.log(curElem.company);
                    return curElem.company.toLowerCase() === company.toLowerCase()
                });
            }
            if (color !== "all") {
                temFilterProduct = temFilterProduct.filter((curElem) => {
                    return curElem.colors.includes(color)
                });
            }
            if (price === 0) {
                temFilterProduct = temFilterProduct.filter((curElem) => {
                    return curElem.price === price
                });
            } else {
                temFilterProduct = temFilterProduct.filter((curElem) => {
                    return curElem.price <= price
                });
            }
            return {
                ...state,
                filter_products: temFilterProduct,
            }
        case "CLEAR_FILTER":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "all",
                    company: "all",
                    color: "all",
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                }
            }
        
        default:
            return state;
    }
}

export default FilterReducer