import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import AllShipping from './components/AllShipping';
import Cart from './components/Cart';
import HeaderClient from './components/Header';
import FooterClient from './components/Footer';
import AllCart from './components/AllCart';
import PlaceOrder from './components/PlaceOrder';
import Payment from './components/Payment';
import Delivery from './components/Delivey';

  function App (){
    return(
    <Router>
      <div>
        <HeaderClient />
        <hr/>

        <Routes>
        
          <Route path="/ship" element={<AllShipping/>}/>
          <Route path="/add" element={<Cart/>}/>
          <Route path='/cart' element={<AllCart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
          <Route path='/pay' element={<Payment/>}/>
          <Route path='/del' element={<Delivery/>}/>
        
        </Routes>
        <hr />
        <FooterClient />
      </div>
    </Router>
    )
  }
  
export default App;
