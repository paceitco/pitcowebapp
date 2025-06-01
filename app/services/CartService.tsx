// CartService.js or .ts
let cartItems: any[] = [];

export default {
  getCartItems: () => {
    return [...cartItems]; // return a shallow copy
  },

  addItemToCart: (item: any) => {
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ ...item, quantity: 1 });
    }
  },

  removeItemFromCart: (item: any) => {
    const index = cartItems.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      if (cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
      } else {
        cartItems.splice(index, 1);
      }
    }
  },
  
  removeAllRelatedItemsFromCart: (item: any) => {
    let index = cartItems.findIndex((i) => i.image === item.image); // TODO: preferrably use type/name
    while (index !== -1) {
        console.log(`Removing ${index} - ${cartItems[index].image}`);
        // removeItemFromCart(cartItems[index]);
      if (cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
      } else {
        cartItems.splice(index, 1);
      }
      index = cartItems.findIndex((i) => i.image === item.image); // TODO: preferrably use type/name
    }
  },

  clearCart: () => {
    cartItems = [];
  }
};
