import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
// import Gototop from "./Components/Gototop/Gototop";
import Navbar from "./Components/Navbar/Navbar";
import Topbar from "./Components/Topbar/Topbar";
import Shoppage from './Pages/Shoppage/Shoppage';
import Detailpage from './Pages/Detailpage/Detailpage';
import Cartpage from './Pages/Cartpage/Cartpage';
import Checkoutpage from './Pages/Checkoutpage/Checkoutpage';
import Contactpage from './Pages/Contactpage/Contactpage';

// import Contactpage from './Pages/Contactpage/Contactpage';
function App() {
  return (
    <div>
      {/* <Gototop/> */}
      <BrowserRouter>
        <Topbar/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/shop" element={<Shoppage />} /> 
          <Route path="/detail" element={<Detailpage />} /> 
          <Route path="/cart" element={<Cartpage />} /> 
          <Route path="/checkout" element={<Checkoutpage />} /> 
          <Route path="/contact" element={<Contactpage />} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
