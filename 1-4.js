/* 
Given an array of integers, return a new array where each element in the new array is number of smaller elements to the right of that element in the original input array.

For example, given the array [3,4,9,6,1], return [1,1,2,1,0], since:
    There is 1 smaller element to the right of 3 (1)
    There is 1 smaller element to the right of 4 (1)
    There is 2 smaller element to the right of 9 (6,1)
    There is 1 smaller element to the right of 6 (1)
    There is 0 smaller element to the right of 1
*/

import * as d3 from "d3"

let a = [3,4,9,6,1]

//Chill approach
function solution1(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let count = 0
        let temp = arr.slice(i+1,arr.length)
        for (let x of temp) {
            if (arr[i] > x) {
                c++
            }
        }
        result.push(count)
    }
    console.log(result)
}

//BST approach
function solution2(arr) {
    arr.reverse()
    let temp = []
    let result = []
    for (let x of arr) {
        let i = d3.bisectLeft(temp,x)
        temp.splice(i,0,x)
        result.push(i)
    }
    console.log(result.reverse())
}

solution1(a)
solution2(a)