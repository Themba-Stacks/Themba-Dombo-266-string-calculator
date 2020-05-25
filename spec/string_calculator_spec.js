const {add} = require("../src/string_calculator.js")

describe("Add", ()=>{
    
    it("should return for empty string",()=>{
        expect(add("")).toBe(0)
    });

    it("should return interger value of string",()=>{
        expect(add("1")).toBe(0)
    });

    it("should return added interger values",()=>{
        expect(add("1,1")).toBe(0)
    });

    it("should return added total of multiple string values",()=>{
        expect(add("1,2,3,4")).toBe(10)
    });



    it("should handle new lines between integers",()=>{
        expect(add("1\n2,3")).toBe(6)
    });

    it("should handle different delimeters",()=>{
        expect(add("//;\n1;2")).toBe(3)
    });

    it("should not allow negative numbers",()=>{
        expect(()=>{add("-1,-2,3,4")}).toThrow(new Error("negatives not allowed"))
    });



    it("should ignore integers greater or equal to 1000",()=>{
        expect(add("//;\n1000,1;2")).toBe(3)
    });

    it("should handle delimiters of any length",()=>{
        expect(add("//[(-_-')][%]\n1(-_-')2%3")).toBe(6)
    });

    it("should return error for invalid input",()=>{
        expect(()=>{add("   //;\n1000,1;2")}).toThrow(new Error("invalid input"))
    });



});