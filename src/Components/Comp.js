import React from 'react'
import "./Comp.css"
function Comp({title, price, terms, button, sup}) {
    return (
        <div className="price">
           <div className="title">
                <h2>{title}<sup>{sup}</sup></h2> 
           </div>
           <div className="price_rate">
                <span>$</span>
                <strong>{price}</strong>
           </div>
           <div className="terms">
              <h3>{terms}</h3>
           </div>
           <div className="button_data">
               <button className="button">{button}</button>
           </div>
          
        </div>
    )
}

export default Comp
