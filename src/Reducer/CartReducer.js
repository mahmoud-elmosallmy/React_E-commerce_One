function CartReducer(state , action) {

  switch (action.type) {
      case "ADD_TO_CART":
        let {id , color , amount , product} = action.payload;
        let cartProduct;

        let existingProduct = state.cart.find((curItem) => curItem.id === id + color)
        console.log(existingProduct);

        if (existingProduct) {
          let updatedCart = state.cart.map((ele) => {
            console.log(ele);  
            if (ele.id === id + color) {
              let newAmount = ele.amount + amount
              console.log(newAmount);
              console.log(ele.max);
              if (newAmount >= ele.max) {
                newAmount = ele.max
              }
              return {
                ...ele,
                amount: newAmount,
              }
            } else {
                return ele;
            }
          })
          return {
            ...state,
            cart: updatedCart,  
          }
        } else {
          cartProduct = {
            id: id + color,
            name: product.name,
            color,
            amount,
            image: product.image[0].url,
            price: product.price,
            max: product.stock,
          }
          return {
            ...state,
            cart: [...state.cart ,cartProduct],  
          }
        }

      case "SET_DECREASE":
        const decUpdatedProduct = state.cart.map((ele) => {
          if (ele.id === action.payload) {
            let decAmount = ele.amount - 1;
            if (decAmount <= 1) {
              decAmount = 1
            }
            return {
              ...ele,
              amount: decAmount,
            }
          } else {
            return ele
          }
        })
        return { ...state, cart: decUpdatedProduct}
      case "SET_INCREASE":
        const incUpdatedProduct = state.cart.map((ele) => {
          if (ele.id === action.payload) {
            let incAmount = ele.amount + 1;
            if (incAmount >= ele.max) {
              incAmount = ele.max
            }
            return {
              ...ele,
              amount: incAmount,
            }
          } else {
            return ele
          }
        })
        return { ...state, cart: incUpdatedProduct}
      case "REMOVE_ITEM":
        // const { id } = action.payload;
        console.log(action.payload);
        const removeItem = state.cart.filter((ele) => !(ele.id === action.payload))
        console.log(removeItem);
        return {
          ...state,
          cart: removeItem,  
      }
      case "CLEAR_CART":
        return {
          ...state,
          cart: [],  
      }
      case "CART_ITEM_PRICE_TOTAL":
        const {total_item , total_price} = state.cart.reduce((
          accum,curElem) => {
          let { price , amount } = curElem;
          accum.total_item += amount;
          accum.total_price += (price * amount);
          return accum;
        }, {
          total_item: 0,
          total_price: 0,
        });
        return {
          ...state,
          total_item,
          total_price,
      }

      default:
        return state;
  }
}

export default CartReducer