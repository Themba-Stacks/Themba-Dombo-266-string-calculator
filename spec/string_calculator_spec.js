const {add} = require("../src/string_calculator.js")

describe("Add", ()=>{
    it("should return 0",()=>{
        expect(add("")).toBe(0)
    });
});