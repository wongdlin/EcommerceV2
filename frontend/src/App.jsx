import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Categories from "./pages/Categories";
import ProductsList from "./pages/ProductsList";
import Products from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/categories/:id" element={<ProductsList />}></Route>
        <Route path="/categories/products/:id" element={<Products />}></Route>
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;
