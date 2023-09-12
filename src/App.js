import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";



const App = () =>{
  return (
    
<Router>
  <Routes>
    <Route path = '/' element = {<Home/>} />
    <Route exact path = '/products' element = {<Product/>} />
    <Route exact path = '/cart' element = {<Cart/>} />
    <Route exact path = '/login' element = {<Login/>} />
    <Route exact path = '/register' element = {<Register/>} />
    <Route exact path = '/productList' element = {<ProductList/>} />


  </Routes>
</Router>
  )     

};

export default App;
