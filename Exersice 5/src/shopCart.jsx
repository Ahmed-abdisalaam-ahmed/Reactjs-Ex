import { useState } from "react";

const shopCart = ()=>{

    const [Cart , SetCart] = useState([])
    const [InputValue ,SetInputValue] = useState(["",""]);

    const Cartbtn = ()=>{
            const NewCard = {
            id: Date.now(),
            product: InputValue[0],
            price: InputValue[1],
            Quantity: 1,
        }
        SetCart([...Cart,NewCard])
        SetInputValue(["",""]);

        console.log(NewCard);
    }
    const handleDelete = (id) => {
    const updatedCart = Cart.filter(items => items.id !== id);
    SetCart(updatedCart);
    console.log("Delated", idToDelete);
};
const handleIncrement = (id)=>{
    console.log(Cart)
 const updatedCart = Cart.map(item => (
    item.id === id ?{...item, Quantity : item.Quantity + 1} : item
 ))
 SetCart(updatedCart)
  }
const handleDecrement = (id)=>{
        console.log(Cart)
 const updatedCart = Cart.map(item => (
    item.id === id && item.Quantity > 1 ? {...item, Quantity : item.Quantity - 1} : item
 ))
 SetCart(updatedCart)
}

const TotolingAll = Cart.reduce((total,item)=> total + item.price * item.Quantity ,0)

return(
        <div>
            <h1>Simple shopping Cart</h1>
            <h3>Add a Product</h3>

            <input 
                type="text" 
                placeholder="Product Name"
                value={InputValue[0]}
        onChange={(e) =>
          SetInputValue([e.target.value, InputValue[1]])
        }
                
            />
            <input
             type="number"
             placeholder="Price"
        value={InputValue[1]}
        onChange={(e) =>
          SetInputValue([InputValue[0], e.target.value])
        }            
              />
            <button onClick={Cartbtn}>Add to Cart</button>

            {
                Cart.length === 0 ? (
                    <p>The Cart it's empty.</p>
                ) : (
             <>
              <h1>Product in Cart</h1>
                <ul>
                {
                   Cart.map(item =>(
                    <li key={item.id}>
                        {item.product} - ${item.price}
                        <p>Quantity :
                            <button onClick={() => handleIncrement(item.id)}>+</button>
                            {item.Quantity}
                            <button onClick={() => handleDecrement(item.id)}>-</button>
                        </p>
                        <button onClick={() => handleDelete(item.id)}>Remove</button>
                    </li>
                   ))  
                }
            </ul>
            <h1>Total Price: ${TotolingAll}</h1>
             </>       
                )
            }
        </div>
    )
}
export default shopCart;