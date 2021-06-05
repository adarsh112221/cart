import React from 'react'
import CartItem from './CartItem'
class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [{
            price: 999,
            title: 'watch',
            Qty: 1,
            img:'',
            id:1
        },
        {
             price: 999,
             title: 'TV',
             Qty: 1,
             img:'',
             id:2
        },
        {
            price: 9999,
            title: 'phone',
            Qty: 1,
            img:'',
            id:3
        }]
        }
    }

        
       
    

    render() {
       
        const {products}=this.state
      
        return (
             
            <div className="Cart">
                {
                products.map((products)=>
                {
                    return <CartItem product={products} key={products.id} jsx={<h1>test</h1>}/>
                })
                }
            </div>
        );
    }
}

export default Cart;
