import Link from "next/link";

const cartItems = [
  { name: "Business Hosting", price: 24.99, cycle: "monthly", quantity: 1 },
  { name: "example.com", price: 11.99, cycle: "yearly", quantity: 1 },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold tracking-tight text-secondary-900">Shopping Cart</h1>
      <p className="mt-1 text-sm text-secondary-500">Review your order before checkout.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="space-y-3 lg:col-span-2">
          {cartItems.length === 0 ? (
            <div className="rounded-xl border border-secondary-200 bg-white p-10 text-center shadow-sm">
              <p className="text-sm text-secondary-500">Your cart is empty.</p>
              <Link
                href="/store"
                className="mt-2 inline-block text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                Browse Products &rarr;
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-xl border border-secondary-200 bg-white p-4 shadow-sm"
              >
                <div>
                  <h3 className="text-sm font-medium text-secondary-900">{item.name}</h3>
                  <p className="text-xs text-secondary-500">{item.cycle} billing</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-secondary-900">
                    ${item.price.toFixed(2)}
                  </span>
                  <button className="text-xs font-medium text-red-500 transition-colors hover:text-red-700">
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div>
          <div className="rounded-xl border border-secondary-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-sm font-semibold text-secondary-900">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-secondary-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-secondary-600">
                <span>Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <hr className="border-secondary-200" />
              <div className="flex justify-between font-semibold text-secondary-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="mt-5 w-full rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700">
              Checkout
            </button>
            <Link
              href="/store"
              className="mt-3 block text-center text-xs text-secondary-500 transition-colors hover:text-secondary-700"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
