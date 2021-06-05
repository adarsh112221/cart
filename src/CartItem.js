import React from 'react'
class CartItem extends React.Component {
    increasecounter=()=>
    {
    this.setState( (prev)=>{
        return{Qty:prev.Qty+1 }
    },()=>{console.log(this.state)}
    );
    }
    decreasecounter=()=>
    {  const {Qty}=this.state
        if(Qty>0)
        {
        this.setState((prevState)=>{
            return {Qty:prevState.Qty-1}
        }) 
    }
}
    // testing()
    // {
    //     var promise=new Promise((resolve,reject)=>{
    //     setTimeout(() => {
    //         resolve();
    //     }, 500);});
    //     promise.then(()=>{
    //         this.setState((prevState)=>{
    //             return {Qty:prevState.Qty+1}
    //         })
    //         console.log(this.state)
    //     })
       

    // }
    
    render() { console.log("props",this.props)
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
                        <img className="action-icons" src="https://image.flaticon.com/icons/png/512/3303/3303893.png" alt="increase" onClick={this.increasecounter}/>
                        <img className="action-icons" src="https://image.flaticon.com/icons/png/512/2740/2740679.png" alt="decrease" onClick={this.decreasecounter}/>
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
