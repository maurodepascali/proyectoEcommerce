import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import accounting  from "accounting";
import DeleteIcon from '@material-ui/icons/Delete';
import {Counter} from './Counter';
import CheckoutPage from './CheckoutPage';

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

export default function CheckoutCard(props) {
  const {name, image, id, price, stock } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
            <Typography
                className={classes.action}
                variant='h6'
                color='textSecondary'
            >
                {accounting.formatMoney(price, "$")}
            </Typography>
       
        }
        title={name}
        subheader={(stock,"Unidades disponibles:")}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
    
   

       <CardActions disableSpacing className={classes.cardAction}>
        <IconButton aria-label="delete" onClick>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
