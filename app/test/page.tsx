'use client';

import React, { useEffect } from 'react';
import shoppingCart from '../helpers/shoppingCart';

const Test = () => {
  const cart = shoppingCart();

  useEffect(() => {
    cart.addItem({ id: 1, name: 'T-shirt', price: 20, quantity: 2 });
    cart.addItem({ id: 2, name: 'Jean', price: 50, quantity: 5 });
    cart.addItem({ id: 3, name: 'Short', price: 45, quantity: 4 });

    console.log(cart.getCart());

    console.log(cart.getTotal());

    console.log(
      cart.removeItem({ id: 2, name: 'Jean', price: 50, quantity: 5 }),
    );
  }, [cart]);

  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-blue-600">
        Bienvenue sur ma premiére page !
      </h1>
    </div>
  );
};
export default Test;
