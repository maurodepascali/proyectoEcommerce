import { useContext } from 'react';
import {createContext, useState} from 'react';

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
/*
    const [cartList, setCartList]= useState([]);
    const [cantidad, setCantidad]= useState(0);
*/
    const [cart, setCart]= useState([]);


    const isInCart = id => cart.some(item => item.id === id);

    
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


   


/*

    const addItem = ({item, quantity} )=> {
        setCartList([{
            itemList: item,
            cantidad: quantity }, ...cartList] )
    }

    const onAdd = (cant) => {
        console.log(`Se agregaron ${cant} productos al carrito`);
        setCantidad( cant )
      };
     */
    
    /*  const [listProducts, setListProducts] = useState();

      useEffect(() => {
        async function getData (){
          const db = getFirestore(); //conexion base de datos
          const collection = db.collection("productos") //tomamos conexion
          const response = await collection.get()
          setListProducts(response.docs.map(element => element.data()));
        }
        getData();
      },[],);
      
     
    */
      
    return (
        <CartContext.Provider value={{cart, setCart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}