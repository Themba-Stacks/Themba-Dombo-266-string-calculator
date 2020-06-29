const { add } = require("../src/string_calculator.js");

describe("Add", () => {
  it("should return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return interger value of string", () => {
    expect(add("1")).toBe(1);
  });

  it("should return added interger values", () => {
    expect(add("1,1")).toBe(2);
  });

  it("should return added total of multiple string values", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  it("should handle new line between integers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it("should handle different delimeters symbols", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  it("should handle differen delimeters numeric", () => {
    expect(add("//4\n142")).toBe(3);
  });

  it("should handle differen delimeters alphabetic", () => {
    expect(add("//df\n1df2")).toBe(3);
  });

  it("should not allow negative numbers", () => {
    expect(() => add("-1,-2,3,4")).toThrowError("negatives not allowed -1,-2");
  });

  it("should ignore integers greater or equal to 1000", () => {
    expect(add("//;\n1000,1;2")).toBe(3);
  });

  it("should handle delimiters of any length", () => {
    expect(add("//***\n1***2***3")).toBe(6);
  });
  it("should handle different delimiters of any length", () => {
    expect(add("//[(-_-')][%]\n1(-_-')2%3")).toBe(6);
  });

  it("should handle different delimiters of any length", () => {
    expect(add("//[***][%%%]\n1***2%%%3")).toBe(6);
  });

  it("should handle different delimiters of any length", () => {
    expect(add("//[:D][%]\n1:D2%3")).toBe(6);
  });

  it("should handle different delimiters of any length", () => {
    expect(add("//[abc][777][:(] \n1abc27773:(1")).toBe(7);
  });

  it("should return error for strings ending with other symbols", () => {
    expect(() => add("//;\n1000;1;2;")).toThrowError("invalid input");
  });

  it("should return error for strings beginning with special characters", () => {
    expect(() => add("   //;\n1000,1;2")).toThrowError("invalid input");
  });

  it("should return error for strings beginning numeric characters", () => {
    expect(() => add("1,2,3//;\n1000,1;2")).toThrowError("invalid input");
  });

});
