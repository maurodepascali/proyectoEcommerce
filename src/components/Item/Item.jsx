import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import "./Item.css";


const Item = ({id, name, price, stock, category, description, image, quantity}) => {
  

  return (
    <div className="container">
      <div className= "row">
      
        <div className="item">
        <Link to={`/item/${id}`} className="link-item">
            <p className="titulo-item">{name}</p>
          </Link>
          <img className="imagen-item" src={image}/>
        </div>  
      </div>
    </div>
  )
};
export default Item;

