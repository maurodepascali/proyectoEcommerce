import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  
    return (
      <div>
        
      <Navbar/>
      <ItemListContainer greeting={"Tortas"}/>
       
      </div>
    );
  }
export default App;
