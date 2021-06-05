import React from 'react'
class CartItem extends React.Component {
 
    
    render() { 
        const { price, title, Qty } = this.props.product;
        
        return (
             
            <div className="cart-item" >
          
                <div className="left-block">
                    <img style={style.images} />
                </div>
                <div className="right-block">
                    <div style={{ color: '#ccc', fontSize: 25 }}> {title}</div>
                    <div style={{ color: '#ccc', fontSize: 25 }}>Rs {price}</div>
                    <div style={{ color: '#ccc', fontSize: 25 }}>Qty: {Qty}</div>
                    <div className="cart-item-action" >
                        <img className="action-icons" src="https://image.flaticon.com/icons/png/512/3303/3303893.png" alt="increase" onClick={()=>this.props.Onincreasecounter(this.props.product)}/>
                        <img className="action-icons" src="https://image.flaticon.com/icons/png/512/2740/2740679.png" alt="decrease" onClick={()=>this.props.Ondecreasecounter(this.props.product)} />
                        <img className="action-icons" src="https://image.flaticon.com/icons/png/512/3161/3161358.png" alt="delete" />
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    images: {
        height: 150,
        width: 150,
        borderRadius: 4,
        background: '#ccc'
    }

}
export default CartItem;
