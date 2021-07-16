
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail"
import { useCartContext } from "../Context/CartContext";


const ItemDetailContainer = () => {
  
    const {id} = useParams();
    const [item,setItem] = useState();
    const [loading, setLoading] = useState(true);
    const {dataBase} = useCartContext();
    const [error,setError] = useState(false);

    useEffect(() => {
    const foundItem = dataBase.find(element => element.id === +id);
     if (foundItem) {
      setItem(foundItem);
     }else {
      setError(true);
     }
     setLoading(false);
    },[id, dataBase]);

    /*
    useEffect(() => {
      (async () => {
        const data = await fetch("https://mocki.io/v1/11842f72-c40e-466e-a6b1-45c4f06a60d7")
        const product = await data.json();
        const foundItem = product.find(item => item.id === +id);
        setItem(foundItem);
        setLoading(false);
      })();
    },[id]);
*/
    if(error) return <h1>Producto no existe</h1>
    
    if(loading || !item){
      return <h4>Cargando...</h4>
    }

  return (
  <ItemDetail product={item}/>
  )
};
export default ItemDetailContainer;

