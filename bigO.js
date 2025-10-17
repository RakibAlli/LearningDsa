function sumUpTo(n) {
    let total = 0;
    for (let i = 1; i < n; i++) {
        total += i;
    }
    return total;
}
console.log(sumUpTo(5));

function sumUpTo(n) {
    return n * (n + 1) / 2;
}
console.log(sumUpTo(5));

// The time complexity of this function is O(n) because the loop runs n times.