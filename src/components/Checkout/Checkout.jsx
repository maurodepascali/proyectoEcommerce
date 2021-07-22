import "./Checkout.css";
import Button from '@material-ui/core/Button';
import { useCartContext } from "../../Context/CartContext";
import { useState } from "react";
import { getFirestore } from "../../firebase/cliente";
import Swal from 'sweetalert';
import firebase from 'firebase/app';
const Checkout = () => {

    const {cart, getTotal, createOrder} = useCartContext();
    //const [buyer, setBuyer] = useState({email: '', name: '', phone:''});
    const [name, setName] = useState(' ');
    const [phone, setPhone] = useState(' ');
    const [email, setEmail] = useState(' ');

    /*
    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const createOrder = () => {
        const db = getFirestore();

        let items = cart.map(
            (obj) => {
                return {
                    id: obj.item.id,
                    title: obj.item.title,
                    quantity: obj.item.price,
            }
            }
        )

        const newOrder = {
            buyer,
            items,
            date: firebas.firestore.Timestamp.fromDate(newDate()),
            total: getTotal,        }
        };

    const orders = db.collection("orders");
    orders.add(newOrder).then((resp)=>{
        console.log("Orden creada con exito");

        let batch = db.batch();

        let itemRef = db.collection("productos");
        cart.forEach(
            (obj) => {
                batch.update(itemRef.doc(obj.item.id),{stock: obj.item.stock})
            }
        )
        
        batch.commit().then(() => {
            useCartContext.clear();
            setBuyer({name:'', phone: '', email: ''});
        });
    }).catch((error) => {
        console.error('Error: ', err)
    });
    */

/*
    const newOrder = {
        buyer:{
            name: name, 
            phone: phone, 
            email: email, 
            },
        cart: cart,
        total:totalCart()};
     
        
    

    
    function dispatchOrder(newOrder){
        const db = getFirestore();
        const orders = db.collection("orders");
        orders.add(newOrder).then(({id})=>{
            Swal.fire(`Orden cargada, conserve el id : ${id} Gracias!`);
            actualizarStock(newOrder);
        })
        .catch(e=>{
            Swal.fire("Ha ocurrido un error!");
        })
        .finally(()=>{
            
        })
    }

    function validarDatos(){
        if(form.email.include("@") && form.name !== null && form.apellido !== null && form.phone !== null){
            
            const newOrder = {
                buyer:{
                    name: form.name, 
                    phone: form.phone, 
                    email: form.email, 
                    apellido: form.apellido},
                pedido: cart.map(element => ({
                    name: element.product.name,
                    id: element.product.id,
                    cant: element.cant
                })),
                fecha: (new Date()).toLocaleString(),
                
            }
            dispatchOrder(newOrder);
        } else {
            Swal.fire("Ingrese datos válidos");
        }
    }

    async function actualizarStock(newOrder){

        console.log(newOrder.pedido);
        const db = getFirestore();

        const actualizarProductos = db.collection("productos")
            .where(firebase.firestore.FieldPath.documentId(), 'in',newOrder.pedido.map(element => element.id))
    
    
        const query = await actualizarProductos.get();
        const batch = db.batch();
        const outOfStock = [];

        query.docs.forEach((docSnapshot, index) =>{
            if(docSnapshot.data().stock >= newOrder.pedido[index].cant){
                batch.update(docSnapshot.ref, {stock: docSnapshot.data()})
            } else{
                outOfStock.push({...docSnapshot.data(), id: docSnapshot.id})
            }
        })

        if(outOfStock===0){
            await batch.commit();

        }else{
            Swal.fire("Algunos productos no tienen stock");
            }
        }
        */

    return (
       <div className="containerCheckout">
            <h2 className="titleCheckout">COMPLETE SUS DATOS</h2>
                <div className="form">
                    <form className="row">
                        <div className="col-md-3">
                            <input type="text" placeholder="Nombre" className="form-control" onInput={(e) => {setName(e.target.value)}}></input>
                        </div>
                        <div className="col-md-13">
                            <input type="tel" placeholder="Teléfono" className="form-control" onInput={(e) => {setPhone(e.target.value)}}></input>
                        </div>
                        <div className="col-md-3">
                            <input type="email" placeholder="Correo electrónico" className="form-control" onInput={(e) => {setEmail(e.target.value)}}></input>
                        </div>
                        <div className="buttonCheckout">
                            <Button variant="contained" color="primary" onClick={()=>{
                        createOrder(name,phone,email)
                        }}>Finalizar compra</Button>
                        </div>
                    </form>
                </div>
        </div>
  )
};
export default Checkout;