import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';


export default function Product({
    product : { id, name, price, image},
}) 
{
  return (
    <Card className="card">
      <CardHeader 
       
        title={name} 
      />
      <CardMedia
        image={image}
        title={name}
        price={price}
      />
  
 
    </Card>
  );
}