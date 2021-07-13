import './styles/styles.css';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { CartProvider } from "./Context/CartContext";
import Cart from './components/Cart';

{/* 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';

import CheckoutPage from './components/CheckoutPage';

import productData from './productData';
import ProductDetailPage from './components/ProductDetailPage';
import {CartContext} from './Context/CartContext';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CardComponent from './components/CardComponent';
import HomeContainer from './containers/HomeContainer';
import ItemContainer from './components/ItemContainer';
import Cards from './components/Cards';
*/}
//https://api.mercadolibre.com/sites/MLA/search#options


function App() {

/*
  const products = productData;
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
*/
    return (
      <CartProvider>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><ItemListContainer/></Route>
          <Route path="/category/:category"><ItemDetailContainer/></Route>
          <Route path="/item/:id"><ItemDetailContainer/></Route>
          <Route path="/cart"><Cart/></Route>
          <Route path="*">Error 404</Route>
        </Switch>
      </Router>
      </CartProvider>
    );
  }
export default App;


/*

  <CartContext.Provider value={{ cart, setCart, onAdd, onRemove }}>
        <Router>
          <NavBar/>
          <Switch>
             <Route path="/carrito">
              <CheckoutPage 
              cart={cart}
              onAdd={onAdd}
              onRemove={onRemove}/>
            </Route>
            <Route path="/">
              <Products products={products} onAdd={onAdd}/>
            </Route>
            <Route path="/item/:id">
                <ProductDetailPage/>
            </Route>

          </Switch>
        </Router>
        </CartContext.Provider>
*/