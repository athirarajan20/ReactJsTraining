import React, { Component } from 'react'
import Product from './Product';
import {} from './Product.css'
export class ProductData extends Component {
    products = [
        {
            "title":"Mangoes",
            "type":"Fruits",
            "description":"Fresh mangoes are available",
            "url":"https://www.bing.com/th?id=OIP.mRE2h2vBt_i0Dpv_sFUf5wHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
            "price":"$87.50",
            "rating":4
        },
        {
            "title":"Milk",
            "type":"Dairy",
            "description":"Homely Item",
            "url":"https://tse1.mm.bing.net/th/id/OIP.2uw1ufzt3eqSZuf0tX_SNQHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            "price":"$27.50",
            "rating":5
        },
        {
            "title":"SoftDrinks",
            "type":"Drinks",
            "description":"Instant Drink",
            "url":"https://tse2.mm.bing.net/th/id/OIP.elo-QjA4aJaYxw6cn1iBBwHaFa?w=269&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            "price":"$27.50",
            "rating":5
        },
       
        {
            "title":"Mixed Dry Fruits",
            "type":"Dry fruit",
            "description":"Organic item",
            "url":"https://tse4.mm.bing.net/th?q=Dry+Fruits+and+Nuts&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247",
            "price":"$108.00",
            "rating":5
        }
        ]
        constructor(){
            super();
            this.state={
               products: this.products
            }
        }
  render() {
    return (
        <div>
        
        {this.state.products.map((element)=>{
             return <div className='features' key={element.price}>
             <Product  title={element.title} price={element.price} description={element.description} imageUrl={element.url}/> 
         </div>
        })}
            
        </div>
     

    )
  }
}

export default ProductData