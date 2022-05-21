/*
Given an array of integers that are out of order, determine the bounds of the smallest window that must be sorted in order for the entire array to be sorted.

For example, given [3,7,5,6,9], you should return (1,3)
*/

let a = [3,7,5,6,9]

//Brute force, sort and then check
function solution1(arr) {
    let s = [...arr]
    let left, right = undefined
    s.sort()
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != s[i] && left == undefined) {
            left = i
        }
        else if (arr[i] != s[i]) {
            right = i
        }
    }
    console.log(left,right)
}

//Better version
function solution2(arr) {
    let left, right = undefined
    let max = -Infinity
    let min = Infinity
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(arr[i], max)
        if (arr[i] < max) {
            right = i
        }
    }
    for (let i = arr.length-1; i >= 0; i--) {
        min = Math.min(arr[i], min)
        if (arr[i] > min) {
            left = i
        }
    }
    console.log(left,right)
}

solution1(a)
solution2(a)