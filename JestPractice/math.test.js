const operations = {
    add: (num1, num2) => {
        return num1 + num2
    },

    subtract: (num1, num2) => {
        return num1 - num2

    },

    multiply: (num1, num2) => {
        return num1 * num2

    },

    divide: (num1, num2) => {
        return num1 / num2
    }
}

describe("Math Tests", () => {
    
    it("Can add", () => {
        console.log(2 + 2)
    })

    it("Can subtract", () => {
        console.log(6 - 1)
    })

    it("Can multiply", () => {
        console.log(3 * 5)
    })

    it("Can divide", () => {
        console.log(12 / 6)
    })
})