import React, { useEffect, useState } from 'react';
import { Cards } from './Cards';


export const Item = () =>{
 
     
  return (
      
    <div>
       <div className="container">
          <div className="row">

            {products.map((element,index) =>{
              return (
                <span key={index}>
                  <Cards name={element.name} image={element.image} price={element.price}/>
                </span>
              )
            })}
          </div>

       </div>
      
        
        
    </div>
    
  );
}