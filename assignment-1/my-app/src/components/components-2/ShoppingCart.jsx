
// 11.Build a shopping cart application using the useContext hook.
// Set up a context to manage the state of the shopping cart.
// Create components to display products and a shopping cart.
// Use the useContext hook to access the cart state and update it.
// Allow users to add and remove items from the cart.
// Display the total price of items in the cart.


import { useContext, useState } from "react"
import { ShoppingContext } from "../../context/context/ShoppingCartContext"

const Cart = () => {
  const { cartItem, removeFromCart, totalPrice } = useContext(ShoppingContext);

  return (
    <div>
      <h3>Shopping Cart</h3>
      {cartItem.length === 0 && <p>The cart is empty.</p>}
      {cartItem.map(item => (
        <div key={item.id} style={{ marginBottom: '10px' }}>
          <span><img src={item.img}/> (x{item.quantity}) - Rs{ (item.price * item.quantity).toFixed(2) }</span>
          <button 
            onClick={() => removeFromCart(item)} 
            style={{ marginLeft: '10px' }}>
            Remove
          </button>
        </div>
      ))}
      <h4>Total: Rs{totalPrice.toFixed(2)}</h4>
    </div>
  );
};
export default function ShoppingCart() {
    const {AddToCart} = useContext(ShoppingContext);
    const item =[
        {id: 1,img : "https://exclusivelane.com/cdn/shop/products/EL-002-140_A.jpg?v=1581072566", price:2000},
        {id:2,img:"https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25911010/2023/12/21/c9139c15-ca43-48ce-8ddb-84968d2545981703152023940-ArtVibes-Green--Blue-Warli-Art-Wooden-Wall-Hanging-684170315-1.jpg",price: 3000},
        {id:3,img : "https://m.media-amazon.com/images/I/81hTQVsj7DL.jpg",price:1000},
        {id:4,img:"https://bearmind.in/cdn/shop/files/Untitleddesign_d8d567d6-e420-417f-81a6-b42a660a8dcd.png?v=1717668671",price:2400}
    ];
    return(<div id="slide">
        
            {item.map((items,index) =>
                <div key={index}><img src={items.img}/>
                 <p>price ={items.price}</p>
                <button onClick={()=>AddToCart(items)}>Add to cart</button>
                </div>
            
            )};
            <Cart/>
        
    </div>)
}