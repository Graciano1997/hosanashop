export type ProductShoppingCartItem = { item:Product, qty:number, subTotal:number }

export type ShoppingCart = {
    items: ProductShoppingCartItem[],
    qty:number,
    total:number,
}