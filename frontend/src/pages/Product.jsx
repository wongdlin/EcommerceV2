import Product from "../components/product";
import { useEffect, useState } from "react";
import { getProductById } from "../api/productApi";
import Spinner from "../components/ui/spinner";

function Products() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(1)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error:", error));
    setLoading(false);
  }, []);

  return <div>{loading ? <Spinner /> : <Product />}</div>;
}
export default Products;
