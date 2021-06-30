import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import Product from './components/Product';
import './styles/styles.css';
import NavBar from './components/NavBar';
import React, { useEffect, useState } from 'react';
import CheckoutPage from './components/CheckoutPage';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import productData from './productData';


//https://api.mercadolibre.com/sites/MLA/search#options


function App() {

  const {products} = productData;
  const [cart, setCart] = useState([]);

  const onAdd = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

    return (
      <div>
      
        <Router>
          <NavBar/>
          <Switch>
            <Route path="/checkout-page">
              <CheckoutPage 
              cart={cart}
              onAdd={onAdd}
              onRemove={onRemove}/>
            </Route>
            <Route path="/">
              <Products products={products} onAdd={onAdd}/>
            </Route>

          </Switch>
        </Router>

   </div>
   
    );
  }
export default App;


