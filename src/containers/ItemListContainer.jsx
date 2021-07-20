
import { LocalConvenienceStoreOutlined } from "@material-ui/icons";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList"
import { CartContext, useCartContext } from "../Context/CartContext";
import { getFirestore } from "../firebase/cliente";
import swal from 'sweetalert';


const ItemListContainer = () => {
  
  const{category} = useParams();
  const[items, setItems] = useState([]);


  useEffect(()=>{
    (async () => {
      const db = getFirestore(); //conexion base de datos
      const collection = db.collection("productos") //tomamos conexion
      const response = await collection.get()
      setItems(response.docs.map(item =>({id: item.id, ...item.data()})))
    })();
  },[])

  /*
  useEffect(() => {
    const getData = () => {
    if(category){
      swal.fire({
        icon:'info',
        title: `Seleccionaste la categoria: ${category}`
      })
      const productsFilter = items.filter(item => item.type === category);
      console.log(productsFilter);
      setCategory(productsFilter);
    }else{
      console.log(items);
    }
  }
  getData();
}
  )
  */


/*
  useEffect(() => {
    (async () => {
      const data = await fetch("https://mocki.io/v1/11842f72-c40e-466e-a6b1-45c4f06a60d7")
      const product = await data.json();
      if(!category) return setItems(product);
      const categoryItem = product.filter(item => item.category === category)
      setItems(categoryItem);
    })();
  },[category],);
*/





  return (
    <div>
      <ItemList items={items}/>
    </div>
  
  
  )
};
export default ItemListContainer;


