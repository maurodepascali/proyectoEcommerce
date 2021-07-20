
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail"
import { useCartContext } from "../Context/CartContext";
import { getFirebase, getFirestore } from "../firebase/cliente";


const ItemDetailContainer = () => {
  
    const {id} = useParams();
    const [item,setItem] = useState();
    const [loading, setLoading] = useState(true);

    const [error,setError] = useState(false);

    const {getProductById} = useCartContext();
   /*
     
    useEffect(() => {
      setItem(getProductById(id))
    },[id]) ;

   const getItem = (id) => {
     const db = getFirestore();
     db.collection('productos').doc(id).get().then((snapshot) =>{
       setItem(snapshot.data());
     });
   };

   useEffect(() => {
    getItem(id);
  }, [id]);

 */
  

  useEffect(()=> {
    (async () => {
     const db = getFirestore(); //conexion base de datos
     const collection = db.collection("productos") //tomamos conexion
     const response = await collection.doc(id).get();
     setItem({id: response.id, ...response.data()})
     setLoading(false);
    })();
     },[id])

     /*
    useEffect(() => {

    const foundItem = dataBase.find(element => element.id === +id);
     if (foundItem) {
      setItem(foundItem);
     }else {
      setError(true);
     }
     setLoading(false);
    },[id, dataBase]);

    
    useEffect(() => {
      (async () => {
        const data = await fetch("https://mocki.io/v1/11842f72-c40e-466e-a6b1-45c4f06a60d7")
        const product = await data.json();
        const foundItem = product.find(item => item.id === +id);
        setItem(foundItem);
        setLoading(false);
      })();
    },[id]);

       if(error) return <h1>Producto no existe</h1>
*/
 
    
    if(loading || !item){
      return <h4>Cargando...</h4>
    }
    

  return (
    
      <ItemDetail product={item} id={id} /> 
 
  )
};
export default ItemDetailContainer;

