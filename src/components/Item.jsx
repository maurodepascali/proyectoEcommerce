
import { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import accounting  from "accounting";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    action:{
      marginTop:"1rem",
    },
    cardAction:{
      display:"flex",
      justifyContent: "flex-end",
      textAlign: "center",
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));


const Item = ({id, name, price, stock, category, description, image, quantity}) => {
  
    const classes = useStyles();

  return (
  <div>
   <Card className={classes.root}>
      <CardHeader
        action={
            <Typography
                className={classes.action}
                variant='h6'
                color='textSecondary'
                >
                  Unidades disponibles: {stock}
                  <hr></hr>
                Precio: {accounting.formatMoney(price, "$")}
                
                <Link to={`/item/${id}`}>
             <p>{name}</p>
             </Link>
            </Typography>
            
             
       
       
       }
        
       
        
      />
      <CardMedia
        className={classes.media}
        image={image}
        
      />

    </Card>


  </div>
  )
};
export default Item;

