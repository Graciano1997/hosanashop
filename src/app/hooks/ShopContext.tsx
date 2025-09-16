import { Product } from "@/types/product";
import { ProductShoppingCartItem, ShoppingCart } from "@/types/shopping";
import { createContext, useState } from "react";


const initialState: ShoppingCart = { items: [], qty: 0, total: 0 }

type ShopContextType = {
    cart: ShoppingCart;
    addItem: (item: Product, qty: number) => void;
    removeItem: (item: Product) => void,
    updateItem: (item: Product, qty:number) => void;
}

export const ShopContext = createContext<ShopContextType>({
    cart: initialState,
    addItem: () => { },
    removeItem: () => { },
    updateItem: () => {}
});

export default function ShopProvider({ children }: { children: React.ReactNode }) {

    const [cart, setCart] = useState(initialState);

    const removeItem = (item: Product) => {
        const shoppingCartItem: ProductShoppingCartItem | undefined = cart.items.find((product) => product.item.id == item.id);

        if (!shoppingCartItem) return;

        let newItems: Array<ProductShoppingCartItem> = cart.items.filter((product: ProductShoppingCartItem) => product.item.id != item.id);
        setCart({
            items: newItems,
            qty: cart.qty - shoppingCartItem.qty,
            total: cart.total - shoppingCartItem.subTotal
        })
    };

    const addItem = (item: Product, qty: number) => {

        let newItems: ProductShoppingCartItem[];

        newItems = [
            ...cart.items,
            {
                item,
                qty,
                subTotal: item.price * qty,
            },
        ];


        const newQty = cart.qty + qty;
        const newTotal = cart.total + item.price * qty;

        setCart({
            items: newItems,
            qty: newQty,
            total: newTotal,
        });
    };

    const updateItem = (item: Product, qty: number) => {

        if (qty <= 0) {
            removeItem(item);
            return;
        }

        const existingItem: ProductShoppingCartItem | undefined = cart.items.find((productCartItem) => productCartItem.item.id === item.id);

        if (!existingItem) return;

        let newItems: ProductShoppingCartItem[];

        if (existingItem) {
            newItems = cart.items.map((productCartItem) => {
                if (productCartItem.item.id === item.id) {
                    return { ...productCartItem, qty, subTotal: qty * item.price };
                }

                return productCartItem;
            });


            const deltaQty = qty - existingItem.qty;
            const deltaTotal = item.price * qty - existingItem.subTotal;

            setCart({
                items: newItems,
                qty: cart.qty + deltaQty,
                total: cart.total + deltaTotal,
            });
        }
    }



    return (
        <ShopContext.Provider value={{ cart, removeItem, addItem, updateItem }} >
            {children}
        </ShopContext.Provider>
    )
}