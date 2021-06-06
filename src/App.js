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
render()
{
  const{products}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getcounts()}/>
      <Cart products={products} Onincreasecounter={this.increasecounter} Ondecreasecounter={this.decreasecounter} deletee={this.deletethis}/>
    </div>
  );
}

}

export default App;
