const {repeatStr, removeChar, positiveSum, opposite} = require('../intro.js')


describe("String function", function(){
  

  test("Repeat String 'n' count", function() {
    expect(repeatStr(5, "Привет")).toBe("ПриветПриветПриветПриветПривет");
    expect(repeatStr(0, "Привет")).toBe("");
    expect(repeatStr(3, "Привет")).toEqual("ПриветПриветПривет")
    })

  test("This function removes first and end char in string", function(){
    expect(removeChar("Я есть Грот")).toBe(" есть Гро");
    expect(removeChar(" Я есть Грот ")).toEqual("Я есть Грот");
    })
  })

describe("Number operations functions", function(){
  test("This function sums up positive numbers in array", function(){
    const array = [-5, 10, 1, 5];
    const array1 = [-5, 10, 1, 5, 10, 0, -1];
    expect(positiveSum(array)).toBe(16);
    expect(positiveSum([-5, 10, 1, 5, 10, 0, -1])).toEqual(26);
    expect(positiveSum([-5, 10, 1, 5, 10, 0, -1])).toBeGreaterThan(0)
  })
  test("This function change positive number to minus number and backwards", function(){
    expect(opposite(-5)).toBe(5),
    expect(opposite(5)).toBe(-5),
    expect(opposite(-5)).toBeGreaterThan(0)
  })

})


