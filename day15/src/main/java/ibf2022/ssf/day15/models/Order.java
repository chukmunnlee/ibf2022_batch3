package ibf2022.ssf.day15.models;

import jakarta.validation.constraints.Min;

public class Order {

    private String item;
    
    @Min(value=1, message="Must order at least 1 item")
    private int quantity;

    // Normal or rush
    private String delivery;

    public String getItem() { return item; }
    public void setItem(String item) { this.item = item; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

    public String getDelivery() { return delivery; }
    public void setDelivery(String delivery) { this.delivery = delivery; }

    @Override
    public String toString() {
        return "Order [item=" + item + ", quantity=" + quantity + ", delivery=" + delivery + "]";
    }

}
