type Item = {
  id: number;
  quantity: number;
  name?: string;
  price: number;
};

type Cart = Item[];

const shoppingCart = () => {
  let cart: Cart = [];

  const findItemCart = (id: number) =>
    cart.findIndex((item: Item) => item.id === id);

  return {
    addItem(item: Item) {
      const index = findItemCart(item.id);

      if (index === -1) {
        cart.push({ ...item, quantity: 1 });
      } else {
        cart[index].quantity++;
      }
      console.log(`${item.name} ajouté au panier.`);
    },

    removeItem(item: Item) {
      const index = findItemCart(item.id);
      if (index !== -1) {
        cart.splice(index, 1);
      }
      console.log(`${item.name} retiré du panier.`);
    },

    getCart() {
      return cart;
    },

    getTotal() {
      return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    },
  };
};

export default shoppingCart;
