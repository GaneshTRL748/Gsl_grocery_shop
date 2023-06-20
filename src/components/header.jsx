import React from "react";
import '../styles/header.css'

let Header=({size,setClick})=>
{
    let cart_btn=true
    const showsize=()=>
    {
        if(size>0)
        {
            cart_btn=false
           return  <button className="cart_size">{size}</button>
        }
        
    }

    return (
        <div className="header">
            <label className="head_label">GSL Grocery Shop</label>
            {
                showsize()
            }
            <button className="cart_btn" 
                   onClick={()=>
                          
                       setClick(true)
                   }
                    disabled={cart_btn}
                    
                   id='cart_btn'
                   >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </button>
        </div>
    )
}
export default Header