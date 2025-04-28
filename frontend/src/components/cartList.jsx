import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

function CartList() {
  const { cart, removeFromCart } = useCart();
  const handleRemoveProduct= async (productId) => {
    removeFromCart(productId);
  };
  console.log("cart:",cart)

  return cart.map((cart) => (
    
    <div
      key={cart.id}
      className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm  md:p-6"
    >
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        {/* <Link to={cart.link} className="shrink-0 md:order-1"> */}
        <img
          className="hidden h-20 w-20 dark:block"
          src={cart.image_url}
          alt={cart.name}
        />
        {/* </Link> */}

        <label htmlFor="counter-input" className="sr-only">
          Choose quantity:
        </label>
        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            <button
              type="button"
              id="decrement-button"
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              -
            </button>
            <input
              type="text"
              id="counter-input"
              data-input-counter
              className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 "
              placeholder=""
              value={cart.quantity}
              required
            />
            <button
              onClick={() => handleAddToCart(cart.id)}
              type="button"
              id="increment-button"
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              +
            </button>
          </div>
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900">{cart.price}</p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <Link
            to="#"
            className="text-base font-medium !text-gray-900 hover:underline "
          > 
          {cart.name}
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={()=>handleRemoveProduct(cart.id)}
              type="button"
              className="inline-flex !bg-transparent items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
            >
              <svg
                className="me-1.5 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
}
export default CartList;
