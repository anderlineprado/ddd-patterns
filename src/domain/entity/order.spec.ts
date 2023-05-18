import Order from "./order"
import OrderItem from "./order_item"

describe("Order unit tests", () => {
    it("should throw error when id is empty", async () => {
        expect(() => {
            let order = new Order("", "123", [])
        }).toThrowError("Id is required")
    })

    it("should throw error when customer id is empty", async () => {
        expect(() => {
            let order = new Order("123", "", [])
        }).toThrowError("Customer id is required")
    })

    it("should throw error when item id is empty", async () => {
        expect(() => {
            let order = new Order("123", "123", [])
        }).toThrowError("Items are required")
    })

    it("should calculate total", async () => {
        const item = new OrderItem("i1", "Item 1", 100, "p1", 2)
        const item2 = new OrderItem("i1", "Item 2", 200, "p2", 2)
        const order = new Order("o1", "c1", [item])

        const total = order.total()
        expect(total).toBe(200)

        const order2 = new Order("o2", "c1", [item, item2])
        const total2 = order2.total()
        expect(total2).toBe(600)
    })

    it("should throw error if the item quantity is greater than 0", async () => {
        expect(() => {
            const item = new OrderItem("i1", "Item 1", 100, "p1", 0)
            const order = new Order("o1", "c1", [item])
        }).toThrowError("Quantity must be greater than 0")
    })

})