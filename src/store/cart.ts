import { atom, map } from 'nanostores';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export const cartItems = map<Record<string, CartItem>>({});
export const isCartOpen = atom(false);

export function addItemToCart(item: Omit<CartItem, 'quantity'>) {
  const existingItem = cartItems.get()[item.id];
  if (existingItem) {
    cartItems.setKey(item.id, {
      ...existingItem,
      quantity: existingItem.quantity + 1,
    });
  } else {
    cartItems.setKey(item.id, {
      ...item,
      quantity: 1,
    });
  }
}

export function removeItemFromCart(itemId: string) {
  const items = cartItems.get();
  delete items[itemId];
  cartItems.set(items);
}

export function updateItemQuantity(itemId: string, quantity: number) {
  const items = cartItems.get();
  if (items[itemId]) {
    if (quantity > 0) {
      cartItems.setKey(itemId, {
        ...items[itemId],
        quantity,
      });
    } else {
      removeItemFromCart(itemId);
    }
  }
}