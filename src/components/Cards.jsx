
import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Counter} from './Counter';

export const Cards = ({name, price, stock, image}) =>{
 
    const onAdd = () => {
        console.log(`compraste de articulos`)
    }
   
    
    
  return (
      
    <div>
       
      
    <Card style={{width:"18rem"}}>
      <CardHeader title={name}/>
      <CardMedia variant="top" image={image} title={name}/>
       <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          ${price} stock:{stock} 
        </Typography>

      </CardContent>
        <Counter stock={stock} onAdd={onAdd}/>
    </Card>
        
    </div>
    
  );
}