const getStoredCart = () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  return [];
};

const addToLs = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  saveCartToLS(cart);
};
const saveCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

export { addToLs, getStoredCart };
