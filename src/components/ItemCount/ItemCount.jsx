
import React, { useEffect, useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { ShoppingCart } from '@material-ui/icons';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import  {CartContext}  from "../../Context/CartContext";
import "./ItemCount.css";

const ItemCount = ({stock, onAdd }) =>{
 
    const [counter, setCounter] = useState(stock ? 1 : 0); 
    
    
    const sumar = () => {
       if(counter<stock){
        setCounter(counter+1)
       }
    }


    const onInputChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue > stock) {
            setCounter(stock);
        } else if (inputValue < 0) {
            setCounter(1);
        } else {
            setCounter(inputValue);
        }
      }

    const restar = () => {
        if(counter>1){
            setCounter(counter-1)
           }
    }

  return (
   
    <div className="item-count">

            <IconButton onClick={restar}>
                <RemoveCircleIcon/>
            </IconButton>
            <input type="number" value={counter} onChange={onInputChange} />
            <IconButton onClick={sumar}>
                <AddCircleIcon/>
            </IconButton>
           
            
            
            
      
    </div>
    
  );
}
export default ItemCount;

/*

<IconButton onClick={()=> setCounter(counter -1 ? counter -1 : counter)}>
                <RemoveCircleIcon/>
            </IconButton>
            <span>{counter}</span>
            <IconButton onClick={()=> setCounter(counter === stock ? counter : counter +1)}>
                <AddCircleIcon/>
            </IconButton>
            <IconButton  onClick={() => onAdd(counter)}>
                <ShoppingCart fontSize='medium' />Agregar al carrito
            </IconButton>
           
            */