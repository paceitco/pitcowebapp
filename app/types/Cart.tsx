export type CartItem = {
    id: string;
    image: string;
    description: string;
    price: number;
    quantity: number;
};

export class CartItemStack {
    items: CartItem[];

    constructor() {
        this.items = [];
    }

    push(cartItem: CartItem) {
        this.items.push(cartItem);
    }

    pop() {
        if (this.items.length === 0) 
            return "Stack is empty!";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
};

export default CartItemStack;
