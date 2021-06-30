
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { ShoppingCart } from '@material-ui/icons';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DeleteIcon from '@material-ui/icons/Delete';

export const Counter = ({stock, onAdd}) =>{
 
    const [counter, setCounter] = useState(1); 

    const sumar = () => {
       if(counter<stock){
        setCounter(counter+1)
       }
    }

    const restar = () => {
        if(counter>1){
            setCounter(counter-1)
           }
    }

    const manualChange=(e)=>{
        let value = e.target.value
        if(value > stock){
            setCounter(stock)
        }else{
        setCounter(value)
    }
}




  return (
   
    <div>
        
        {
            stock>0 ?
            <>
            <IconButton onClick={restar}>
                <RemoveCircleIcon/>
            </IconButton>
            <input type="number" value={counter} onChange={manualChange} />
            <IconButton onClick={sumar}>
                <AddCircleIcon/>
            </IconButton>
            <IconButton onClick={onAdd}>
                <ShoppingCart fontSize='medium' />
            </IconButton>
        
        </>
        :
        <p>No hay mas disponibilidad</p>
    }
    </div>
    
  );
}