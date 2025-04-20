import Product from "../components/product";
import { useEffect, useState } from "react";
import { getProductById } from "../api/productApi";
import Spinner from "../components/ui/spinner";
import useFetch from "../hooks/useFetch";

function Products() {

  const {data: product, loading, error} = useFetch("/api/products/1")

  if (loading) return <Spinner/>
  if(error) return <p className="text-red-500">{error}</p>

  return <Product/>
}
export default Products;
