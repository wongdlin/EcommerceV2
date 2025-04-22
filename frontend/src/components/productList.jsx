import Header1 from "./ui/header1";
import useFetch from "../hooks/useFetch";
import Spinner from "./ui/spinner";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Error from "./error";

function ProductList() {

  const {id} = useParams()

  const {data:products, loading, error} = useFetch(`/api/products/category/${id}`)

  if (loading) return <Spinner />;
  if (error) return <Error errMsg={error}/>;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Header1 headerText={"Products"}/>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.name}
                src={product.primary_image}
                className="aspect-auto w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80 md:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/categories/products/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.name}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}export default ProductList
