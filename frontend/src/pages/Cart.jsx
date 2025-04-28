import CartList from "../components/cartList";
import OrderSummary from "../components/orderSummary";
import VoucherForm from "../components/voucherForm";
import { useCart } from "../context/cartContext";

function Cart() {

  const {cart} = useCart();

  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              <CartList/>
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            
            <OrderSummary/>

            <VoucherForm/>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Cart;
