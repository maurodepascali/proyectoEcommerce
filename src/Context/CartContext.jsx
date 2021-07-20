import { useContext } from 'react';
import {createContext, useState, useEffect} from 'react';
import { getFirestore } from '../firebase/cliente';
import Swal from "sweetalert2";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {

    const [cart, setCart]= useState([]);
    const [dataBase, setDataBase]= useState([]);
    const [cantidad, setCantidad]= useState([0]);

    
    const isInCart = id => 
    cart.some(item => item.id === id);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)){
            const newCart = cart.map(cartElement => {
                if (cartElement.id === item.id){
                    return {...cartElement, cantidad : cartElement.cantidad + cantidad}
                }else return cartElement;
            })
            setCart(newCart);
        }else{
            setCart(prev => [...prev, {...item, cantidad}]);
        }
       ;
    };

    
    const removeAllItems = () =>{
    setCart([])
    } 

    const removeItem = (id) => {
    var array = [...cart]
    var index = array.findIndex(element => element.itemList.id == id)
    if (index !== -1) {
      array.splice(index, 1)
      setCart([...array])
    }
  }

  /*
    useEffect(()=>{
        (async () => {
            const data = await fetch("https://mocki.io/v1/11842f72-c40e-466e-a6b1-45c4f06a60d7")
            const product = await data.json();
            setDataBase(product);
          })();
    },[]);
*/
    
    const [listProducts, setListProducts] = useState([]);
    const [listCategories, setListCategories] = useState([]);
    /*
   //trae todos los productos 
   useEffect(() =>{
    async function getData (){
        const db = getFirestore(); //conexion base de datos
        const collection = db.collection("productos") //tomamos conexion
        const response = await collection.get();
        console.log(response.docs.map(element => element.data()))
        setListProducts(response.docs.map(element => element.data()))
    }
    getData ();
   },[]);
*/
   

    const getProductById = (id) => {
        return listProducts.find(element => element.id === +id)
      }
      const getProductByCategory = (category)=>{
        if(category === 'All'){
          return listProducts
        }
        return listProducts.filter(element => element.category === category)
      }
    
      const getCategories = () => {
        const categories = listProducts.map(element => element.category)
        const cleanCategories = []
        cleanCategories.push('All')
        categories.forEach(element => {
          if (!cleanCategories.includes(element)){
            cleanCategories.push(element)
          }
        });
        
        return cleanCategories;
      }
      
      
    return (
        <CartContext.Provider value={{getCategories, getProductByCategory, getProductById,isInCart, removeAllItems, dataBase,cart, setCart, addToCart, cantidad, setCantidad, listProducts, removeItem}}>
           {children}
           {/* 
            <h1 style={{color: listProducts.length == 0 ? 'red' : 'green'}}>Nonna Julia</h1>
                {
                    listProducts.length == 0 ?
                    <h3>Se están cargando los productos</h3>
                    :
                    children
                }
            */}
        </CartContext.Provider>
    )
}