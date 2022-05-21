/* 
This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division? 
*/

let a = [1,2,3,4,5]

//Using division
function solution1(arr) {
    let result = []
    let product = arr.reduce(
        (pValue, cValue) => pValue * cValue
    )
    for (let x of arr) {
        result.push(product/x)
    }
    console.log(result)
}

//Not using division
function solution2(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let temp = [...arr]
        temp[i] = 1
        let product = temp.reduce(
            (pValue, cValue) => pValue * cValue
        )
        result.push(product)
    }
    console.log(result)
}

solution1(a)
solution2(a)