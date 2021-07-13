
import { LocalConvenienceStoreOutlined } from "@material-ui/icons";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList"
import { CartContext } from "../Context/CartContext";
import { getFirestore } from "../firebase/cliente";

const ItemListContainer = () => {
  
  const{category} = useParams();
  const[items, setItems] = useState([]);


// const CartContext = useContext(CartContext);
 // console.log(CartContext.setListProducts)


  useEffect(() => {
    (async () => {
      const data = await fetch("https://mocki.io/v1/11842f72-c40e-466e-a6b1-45c4f06a60d7")
      const product = await data.json();
      if(!category) return setItems(product);
      const categoryItem = product.filter(item => item.category === category)
      setItems(categoryItem);
    })();
  },[category],);


  return (
    
  <ItemList items={items}/>
  
  )
};
export default ItemListContainer;

