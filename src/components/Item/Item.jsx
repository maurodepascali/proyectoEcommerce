import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import "./Item.css";


const Item = ({id, name, price, stock, category, description, image, quantity}) => {
  

  return (
    <div className="container">
      <div className= "row">
        <Link to={`/item/${id}`} className="link-item">
          <div className="item ">
            <p className="titulo-item">{name}</p>
            <img className="imagen-item" src={image}/>
          </div> 
        </Link> 
      </div>
    </div>
  )
};
export default Item;

