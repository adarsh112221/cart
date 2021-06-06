import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [{
        price: 999,
        title: 'watch',
        Qty: 1,
        img:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
        id:1
    },
    {
         price: 999,
         title: 'TV',
         Qty: 1,
         img:'https://images.unsplash.com/flagged/photo-1572609239482-d3a83f976aa0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
         id:2
    },
    {
        price: 9999,
        title: 'phone',
        Qty: 1,
        img:'https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        id:3
    }]
    }
}

increasecounter=(x)=>
{
const{products}=this.state
const index=products.indexOf(x);
products[index].Qty+=1;
this.setState({
products
})

}
decreasecounter=(x)=>
{
    const{products}=this.state; 
    const index=products.indexOf(x);
    if(products[index].Qty>0)
    products[index].Qty-=1;
    this.setState({
        products
    })
}
deletethis=(id)=>
{
    const{products}=this.state; 
    const yenahi=products.filter((item)=>item.id !== id);
    this.setState({
        products:yenahi
    })
}
getcounts=()=>
{
  const{products}=this.state; 
  let count=0;
  products.forEach((product)=>{
    count+=product.Qty;
  })
  return count;

}
total=()=>
{
  const{products}=this.state; 
  let totalprice=0;
  products.map( (product)=>{totalprice+=product.Qty*product.price})
  return totalprice;
}
render()
{
  const{products}=this.state;
  return (
    <div className="App">
      <Navbar  count={this.getcounts()}/>
      <Cart products={products} Onincreasecounter={this.increasecounter} Ondecreasecounter={this.decreasecounter} deletee={this.deletethis}
      total={this.total}/>
    </div>
  );
}

}

export default App;
