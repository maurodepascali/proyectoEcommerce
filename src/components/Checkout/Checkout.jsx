import "./Checkout.css";
import Button from '@material-ui/core/Button';
import { useCartContext } from "../../Context/CartContext";
import { useState } from "react";
import Swal from "sweetalert2";
const Checkout = () => {

    const {cart, getTotal, createOrder} = useCartContext();
    const [name, setName] = useState(' ');
    const [phone, setPhone] = useState(' ');
    const [email, setEmail] = useState(' ');

    /*
    const validarForm = (() => {
        if(email !==null && name !== null && phone !== phone){
            const createOrder = {buyer:{name,phone,email}, item:cart, total:getTotal};
            const db = getFirestore();
            const orders = db.collection("orders");
            orders.add(order).then(({id})=>{
                Swal.fire(`Muchas gracias por su compra. Número de orden: ${id}`);
                removeAllItems();
    
                function mensaje() {
                    Swal.fire(`Volverá al menú principal`);
                        window.location = '/';
                   }
                   setTimeout(mensaje,5000);
            })
        }else{
            Swal.fire("Ingrese datos validos");
        }
    }
    )
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