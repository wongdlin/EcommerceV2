import Header1 from "./ui/header1";
import useFetch from "../hooks/useFetch";
import Spinner from "./ui/spinner";
import { Link } from "react-router-dom";

function Category() {
  const { data: category, loading, error } = useFetch("/api/categories");
  
  if (loading) return <Spinner />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <Header1 headerText={"Collections"}></Header1>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
            {category.map((item) => (
              <div key={item.name} className="group relative">
                <img
                  alt={item.name}
                  src={item.image_url}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link to={`/categories/${item.id}`}>
                    <span className="absolute inset-0" />
                    {item.name}
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {item.slug}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Category;
