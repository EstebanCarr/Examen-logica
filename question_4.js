function plusicual( arr, num) {
for (let i = 0; i < arr.length; i++) {
    for (let n = i + 1; n < arr.length; n++) {
        if (arr[i]+arr[n]===num) {
            return true
        }
        
    }
}
return false
}
console.log(plusicual([2, 5, 8, 44, 1, 7], 9)); 
console.log(plusicual([55, 3, 8, 11, 45, 1], 12)); 
console.log(plusicual([4, 8, 48, 44, 1], 11));