"use client";

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
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-xl font-bold text-gray-900">Shopping Cart</h1>
      <p className="mt-1 text-sm text-gray-500">Review your order before checkout.</p>

      <div className="mt-6 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-3">
          {cartItems.length === 0 ? (
            <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
              <p className="text-sm text-gray-500">Your cart is empty.</p>
              <Link href="/" className="mt-2 inline-block text-sm font-medium text-primary-600 hover:text-primary-700">
                Browse Products &rarr;
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                  <p className="text-xs text-gray-500">{item.cycle} billing</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-900">${item.price}</span>
                  <button className="text-xs text-red-500 hover:text-red-700">Remove</button>
                </div>
              </div>
            ))
          )}
        </div>

        <div>
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between font-semibold text-gray-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="mt-5 w-full rounded bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-700 transition-colors">
              Checkout
            </button>
            <Link href="/" className="mt-3 block text-center text-xs text-gray-500 hover:text-gray-700">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
