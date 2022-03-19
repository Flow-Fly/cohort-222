const { product, isEven, sumArray, maxOfArray } = require("../src/functions");

// describe (string, () => {}) -> Suite (group of tests)
// it(string, () => {}) -> spec (from specifications) and it contains one or more expectations that test the state of the code
// expect(function.matcher(output) -> This is the actual expectation that will test the code.




describe("product(x, y)", () => {
  it('should be declared', () => {
    expect(typeof product).toBe('function');
  })

  it('should return a number', () => {
    expect(typeof product(4, 10)).toBe('number');
  })

  it('should multiply correctly two numbers', () => {
    expect(product(5, 10)).toEqual(50);
  })
})

describe("isEven(num)", () => {
  it('should be declared', () => {
    expect(typeof isEven).toBe('function');
  })

  it('should return true if num is even', () => {
    expect(isEven(4)).toEqual(true);
  })

  it('should return false if num is odd', () => {
    expect(isEven(3)).toEqual(false);
  })
})

describe("sumArray(numbers)", () => {
  it('should be declared', () => {
    expect(typeof sumArray).toBe('function');
  })

  it('should return 0 with an empty array', () => {
    expect(sumArray([])).toEqual(0);
  })

  it('should return the sum of all numbers with a non-empty array', () => {
    expect(sumArray([1, 2, 3, 4])).toEqual(10);
  })
})

describe("maxOfArray(numbers)", () => {
  it('should be declared', () => {
    expect(typeof sumArray).toBe('function');
  })

  it('should return 0 with a empty array', () => {
    expect(maxOfArray([])).toEqual(0);
  })

  it('should return the highest number of a non-empty array', () => {
    expect(maxOfArray([2, 1, 32, 454, 1])).toEqual(454);
  })
})