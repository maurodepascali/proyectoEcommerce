
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail"


const ItemDetailContainer = () => {
  
    const {id} = useParams();
    const [item,setItem] = useState();
    const [loading, setLoading] = useState(true);
    
    

    
    useEffect(() => {
      (async () => {
        const data = await fetch("https://mocki.io/v1/11842f72-c40e-466e-a6b1-45c4f06a60d7")
        const product = await data.json();
        const foundItem = product.find(item => item.id === +id);
        setItem(foundItem);
        setLoading(false);
      })();
    },[id]);

     
    if(loading){
      return <h4>Cargando...</h4>
    }

  return (
  <ItemDetail product={item}/>
  )
};
export default ItemDetailContainer;

