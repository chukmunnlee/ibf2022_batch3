export interface CartItem {
  item: string
  quantity: number
}

export interface Cart {
  cartId: string
  title: string
  comments?: string
  items: CartItem[]
}
