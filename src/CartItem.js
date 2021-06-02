import React from 'react'
class CartItem extends React.Component
{
    render()
    {
        return(
        <div className="cart-item">
            <div className="left-block">
                <img style={style.images}/>
            </div>
            <div className="right-block">
                <div style={{color:'#ccc',fontSize:25}}>Phone</div>
                <div style={{color:'#ccc',fontSize:25}}>Rs:999</div>
                <div style={{color:'#ccc',fontSize:25}}>Qty:1</div>
                <div className="cart-item-action" >
                    {/*buttons */}
                </div>
            </div>
        </div>
        );
    }
}
const style={
   images:{
        height:220,
        width:220,
        borderRadius:4,
        background:'#ccc'
   }
    
}
export default CartItem;
 