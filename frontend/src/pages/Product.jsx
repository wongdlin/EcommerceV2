import Product from "../components/product";
import { useEffect } from "react";
import { BACKEND_API } from "../config";

function Products() {
    fetch(`${BACKEND_API}/api/products`)
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
