import Itemcomponent from "./Itemcomponent";
import {useState,useEffect} from "react";
import ItemContext from "./ItemContext";
const initialState = [
  {
    id: 1,
    ProductName: "Widget",
    Price: 19.89,
  },
  {
    id: 2,
    ProductName: "Gadget",
    Price: 29.99,
  },
  {
    id: 3,
    ProductName: "Phone",
    Price: 299.99,
  },
];

const ProductComponent = () => {
  const [items] = useState(initialState);

  const [cart ,setCart] = useState([])
  
 const handleCart = (product) =>{
    setCart([...cart , product])
 }

  return (
    <div>
      <div>
        <h1>Product names </h1>
        {
          <ol>
            {items.map((item) => (
              <li key={item.id}>
                {item.ProductName}
                <br />${item.Price}
                <br></br>
                <button onClick={() => handleCart(item)}>Add-Cart</button>
                <br></br>
                <br></br>
              </li>
            ))}
          </ol>
        }
      </div>

      <div>
        <ItemContext.Provider value={[cart,setCart]}>
          <Itemcomponent />
        </ItemContext.Provider>
      </div>
    </div>
  );
};

export default ProductComponent;
