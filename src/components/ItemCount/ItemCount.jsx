
import React, { useEffect, useState, useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import "./ItemCount.css";

const ItemCount = ({stock, onAdd}) =>{
 
    const [counter, setCounter] = useState(stock ? 1 : 0); 
    /*
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
    */
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

    return (
    <div className="item-count">
        <IconButton onClick={()=> setCounter(counter -1 ? counter -1 : counter)}>
            <RemoveCircleIcon/>
        </IconButton>
        <input type="number" value={counter} onChange={onInputChange} />
        <IconButton onClick={()=> setCounter(counter === stock ? counter : counter +1)}>
            <AddCircleIcon/>
        </IconButton>
    </div>
    
  );
}
export default ItemCount;

/*
<IconButton onClick={restar}>
    <RemoveCircleIcon/>
</IconButton>
    <input type="number" value={counter} onChange={onInputChange} />
<IconButton onClick={sumar}>
    <AddCircleIcon/>
</IconButton>
*/