import React from 'react'
const CartItem=(props)=> {
 
    
    
    const { price, title, Qty,img} = props.product;
    const{Onincreasecounter,Ondecreasecounter,product,deletee}=props
        return (
             
            <div className="cart-item" >
          
                <div className="left-block">
                    <img style={style.images} src={product.img} alt={'abcd'}/>
                </div>
                <div className="right-block">
                    <div style={{ color: '#ccc', fontSize: 25 }}> {title}</div>
                    <div style={{ color: '#ccc', fontSize: 25 }}>Rs {price}</div>
                    <div style={{ color: '#ccc', fontSize: 25 }}>Qty: {Qty}</div>
                    <div className="cart-item-action" >
                        <img className="action-icons" src="https://image.flaticon.com/icons/png/512/3303/3303893.png" alt="increase" onClick={()=>Onincreasecounter(product)}/>
                        <img className="action-icons" src="https://image.flaticon.com/icons/png/512/2740/2740679.png" alt="decrease" onClick={()=>Ondecreasecounter(product)} />
                        <img className="action-icons" src="https://image.flaticon.com/icons/png/512/3161/3161358.png" alt="delete"  onClick={()=>deletee(product.id) } />
                    </div>
                </div>
            </div>
        );
    
}

const style = {
    images: {
        height: 150,
        width: 150,
        borderRadius: 4,
        background: '#ccc',
        objectFit: "cover"
    }

}
export default CartItem;
