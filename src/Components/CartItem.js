import {FaTrash} from 'react-icons/fa'
import FormatPrice from '../Helpers/FormatPrice'
import CartAmountToggle from './CartAmountToggle'
import { useCartContext } from '../Context/CartContext'

function CartItem({id , color , amount , price , name , image }) {
    const { removeItem ,setDecrease ,setIncrease} = useCartContext();    
    console.log(amount);

  return (
    <div className="cart_heading grid grid-five-column">
        <div className='cart-image--name'>
            <div>
                <figure>
                    <img src={image} alt={id} />
                </figure>
            </div>
            <div>
                <p>{name}</p>
                <div className='color-div'>
                    <p>Color:</p>
                    <div className='color-style' style={{backgroundColor: color, color: color}}></div>
                </div>
            </div>
        </div>
        {/* Price */}
        <div className='cart-hide'>
            <p>
                <FormatPrice price={price} />
            </p>
        </div>
        {/* Quantity */}
        <CartAmountToggle 
            amount={amount}
            setDecrease={() => setDecrease(id)}
            setIncrease={() => setIncrease(id)}
        />
        {/* Subtotal */}
        <div className='cart-hide'>
            <p>
                <FormatPrice price={price * amount} />
            </p>
        </div>
        <div><FaTrash className='remove_icon' onClick={() => removeItem(id)}/></div>
    </div>
  )
}

export default CartItem