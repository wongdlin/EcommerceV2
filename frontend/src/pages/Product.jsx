import Product from "../components/product";
import { useEffect } from "react";

function Products() {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  return (
    <div>
      <Product />
    </div>
  );
}
export default Products;
