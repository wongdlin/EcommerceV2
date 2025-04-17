import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Categories from "./pages/Categories";
import ProductsList from "./pages/ProductsList";
import Products from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/categories/products" element={<ProductsList />}></Route>
          <Route path="/categories/products/productid" element={<Products />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
