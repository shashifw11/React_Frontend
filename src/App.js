import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom" ; 
import { Product } from './Components/Product';
import { ProductID } from './Components/ProductID';
function App() {
  return (
    <div className="App">
     <Routes>
       <Route path = "/" element = {<Product/>}/>
       <Route path = "/:id" element = {<ProductID/>}/>
     </Routes>
    </div>
  );
}

export default App;
