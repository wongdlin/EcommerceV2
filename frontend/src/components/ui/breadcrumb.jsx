import { Link, useLocation, useParams } from "react-router-dom";

function Breadcrumb({ product }) {
  const location = useLocation();
  const { id, productId } = useParams(); // Get category and product IDs

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const breadcrumbs = [];

  // Home breadcrumb
  breadcrumbs.push({ id: "home", name: "Home", href: "/" });

  // Category breadcrumb
  if (pathSegments[0] === "categories") {
    breadcrumbs.push({
      id: "categories",
      name: "Categories",
      href: "/categories",
    });
  }

  // Specific category breadcrumb
  if (pathSegments[1]) {
    breadcrumbs.push({
      id: "category",
      name: `Category ${id}`,
      href: `/categories/${id}`,
    });
  }

  // Product breadcrumb (if present)
  if (pathSegments[2] && productId) {
    breadcrumbs.push({
      id: "product",
      name: product.name,
      href: `/categories/products/${productId}`,
    });
  }

  return (
    <nav aria-label="Breadcrumb" className="hidden md:block mt-20">
      <ol
        role="list"
        className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.id} className="flex items-center">
            <Link
              to={breadcrumb.href}
              className="mr-2 text-sm font-medium text-gray-900"
            >
              {breadcrumb.name}
            </Link>
            {index < breadcrumbs.length - 1 && (
              <svg
                fill="currentColor"
                width={16}
                height={20}
                viewBox="0 0 16 20"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            )}
          </li>
        ))}
        {/* Product breadcrumb wrapped in Link */}
        {product && (
          <>
            <svg
              fill="currentColor"
              width={16}
              height={20}
              viewBox="0 0 16 20"
              aria-hidden="true"
              className="h-5 w-4 text-gray-300"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
            <li className="text-sm">
              <Link
                to={`/categories/products/${product.id}`}
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </Link>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
