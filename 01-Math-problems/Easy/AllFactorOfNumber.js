//print all factor of a N

// Time Complexity : O(N) and Space Complexity : O(1)
const printAllFactor = (n) => {
    for (let i = 1; i <= n; i++)
        if (n % i === 0) console.log(i);
}



// Time Complexity : O(sqrt(N)) and Space Complexity : O(1)
const printAllFactorSQRT = (n) => {
    for (let i = 1; i <= Math.sqrt(n); i++)
        if (n % i == 0)
            if (n / i == i)
                console.log(i + " ");
            else
                console.log(i + " " + n / i + " ");
}

printAllFactor(25);
console.log("===============");
printAllFactorSQRT(81);


/**
 * 
 * ### Logic Behind Using `i` and `n/i`

1. **Pairing of Factors**:
   - Factors of a number `n` can be expressed as pairs. If `i` is a factor of `n`, then `n/i` is also a factor. For example,
    if `n = 12`, and `i = 3`, then `n/i = 4`. Both `3` and `4` are factors of `12`.

2. **Efficiency**:
   - By iterating only up to the square root of `n`, we reduce the number of iterations needed. For every factor `i` found 
    below the square root, its corresponding factor `n/i` is automatically found without needing to check all the way up to `n`.

3. **Avoiding Duplicates**:
   - When `i` is equal to `n/i` (which happens when `n` is a perfect square), printing `i` once prevents duplicates. For
    example, for `n = 16`, when `i = 4`, both factors are the same (`4`), so it’s printed only once.

### Summary
    Using both `i` and `n/i` allows us to efficiently find and print all factors of `n` while minimizing iterations and avoiding
     duplicates, leveraging the mathematical relationship between paired factors.
 * 
 */