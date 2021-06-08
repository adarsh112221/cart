import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar'
import firebase from 'firebase/app'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [],
        loading:true
    }
    this.db=firebase.firestore();
}
componentDidMount()
{
  this.db.
  collection('products').
  onSnapshot((snapshot)=>{
    const products=snapshot.docs.map((doc)=>{
       const data=doc.data();
       data['id']=doc.id;
       return data;
    })
    this.setState({
      products:products,
      loading:false
        })
  })
 
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
addproduct=()=>
{
  this.db.collection('products').add({
    img:'https://th.bing.com/th/id/R0906f9da4ecc19d410e8ca9debcb998a?rik=wO6EobG6ZNSS5g&riu=http%3a%2f%2fchristinefriar.com%2fwp-content%2fuploads%2f2016%2f12%2fwashing-machine.jpg&ehk=J6ZuubaQ%2bDcXw8db7%2b2cZAsqYKwBhq6QsmroTdHrVy0%3d&risl=&pid=ImgRaw',
    price:999,
    Qty:3,
    title:'Washing Machine'
  }).then((docref)=>{
    console.log('product have been added',docref)
  }).catch((error)=>{
    console.log('error',error)
  })

}
total=()=>
{
  const{products}=this.state; 
  let totalprice=0;
  products.map( (product)=>{totalprice+=product.Qty*product.price
  return ''})
  return totalprice;
}
render()
{
  const{products,loading}=this.state;
  return (
    
    <div className="App">
      <Navbar  count={this.getcounts()}/>
      <button onClick={this.addproduct} style={{padding:20,fontSize:15,borderradius:4,margin:10}}>Add Product</button>
      {loading&&<h1>Loading Products...</h1>}
      <Cart products={products} Onincreasecounter={this.increasecounter} Ondecreasecounter={this.decreasecounter} deletee={this.deletethis}
      total={this.total}/>
    </div>
   
  );
}

}

export default App;
