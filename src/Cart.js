import React from 'react'
import CartItem from './CartItem'
const Cart=(props)=>{

       
        const {products}=props
      
        return (
             
            <div className="Cart">
                {
                products.map((products)=>
                {
                    return <CartItem product={products} key={products.id} Onincreasecounter={props.Onincreasecounter} Ondecreasecounter={props.Ondecreasecounter} deletee={props.deletee}/>
                })
                }
               <div style={{padding:10,fontSize:25}}>Total:{props.total()}
                </div>
            </div>
        );
    }

export default Cart;
