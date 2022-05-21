/*
Given an array of numbers, find the maximun sum of any contiguous subarray of the array.

For example, given the array [34,-50,42,14,-5,86], the maximum sum would be 137, since we take elements 42,14,-5, and 86.

Given the array [-5,-1,-8,-9], the maximun sum would be 0, since we would choose not to take any element.

Do this in O(n) time.

Follow up: What if the elements can wrap around?

For example, given [8,-1,-3,4], return 15, as we choose the numbers 3, 4 and 8 where the 8 is obtained from wrapping around.
*/
import * as d3 from "d3"

let a = [34,-50,42,14,-5,86]

//Brute force
function solution1(arr) {
    let max = 0
    let n = arr.length
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n+1; j++) {
            let temp = arr.slice(i,j)
            let sum = d3.sum(temp)
            max = Math.max(max, sum)
            console.log(temp)
        }
    }
    console.log(max)
}

//Kadane's algorithm, better solution
function solution2(arr) {
    let max_end_here = 0
    let max_so_far = 0
    for (let x of arr) {
        max_end_here = Math.max(x, x + max_end_here)
        max_so_far = Math.max(max_so_far, max_end_here)
    }
    console.log(max_so_far)
}

solution1(a)
solution2(a)