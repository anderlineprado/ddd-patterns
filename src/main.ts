import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";

let customer = new Customer("123", "Anderson");
const address = new Address("Rua rua", 2, "12230-720", "São Paulo");

customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10, "i1", 2);
const item2 = new OrderItem("2", "Item 2", 20, "i1", 2);

const order = new Order("1", "123", [item1, item2])