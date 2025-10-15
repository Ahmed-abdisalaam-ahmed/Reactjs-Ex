import {useContext} from 'react'
import ItemContext from './ItemContext'

const Itemcomponent = () => {

  const [cart,setCart] = useContext(ItemContext);

const handleREmove = (id)=>{
  setCart((prev)=> {
    const updated = prev.filter((cart)=> cart.id !== id);
    console.log("removed", updated);
    return updated
  })
}
  return (
    
    <div>
      <p>Summary Product Cart :{cart ? cart.length : 0}</p>

        {
          <ul>
            {
            cart.map((item) => (
              <li key={item.id}>
                {item.ProductName}
                <br />${item.Price}
                <br></br>
                <button onClick={()=> handleREmove(item.id)}>Remove</button>
                <br></br>
                <br></br>
              </li>
            ))}
          </ul>
        }
    </div>
  )
}

export default Itemcomponent