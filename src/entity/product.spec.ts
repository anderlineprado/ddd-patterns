import Product from "./product"

describe("Product unit tests", () => {
    it("should throw error when id is empty", async () => {
        expect(() => {
            const product = new Product("", "Product 1", 100)
        }).toThrowError("Id is required")
    })

    it("should throw error when name is empty", async () => {
        expect(() => {
            const product = new Product("123", "", 100)
        }).toThrowError("Name is required")
    })

    it("should throw error when price is less than 0", async () => {
        expect(() => {
            const product = new Product("123", "Product 1", -1)
        }).toThrowError("Price must be greater than 0")
    })

    it("should change name", async () => {
        const product = new Product("123", "Product 1", 100)
        product.changeName("Product 2")
        expect(product.name).toBe("Product 2")
    })

    it("should change price", async () => {
        const product = new Product("123", "Product 1", 100)
        product.changePrice(150)
        expect(product.price).toBe(150)
    })
})