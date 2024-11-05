// check no is even or odd 


const isEvenOrOdd = (n) =>  (n & 1) === 0;

console.log(isEvenOrOdd(6));
console.log(isEvenOrOdd(9));
console.log(isEvenOrOdd(2));
console.log(isEvenOrOdd(13));

/**
### Bitwise AND (`&`) Operation

- The `&` operator compares corresponding bits of two numbers.
- It outputs `1` only if both bits are `1`; otherwise, it outputs `0`.

**Example**:  
For `n = 6` (which is `110` in binary) and `1` (which is `0001` in binary):

          0110  (6 in binary)
        & 0001  (1 in binary)
        -------
        0000  (result)

- Result is `0` → `6` is even.


For `n = 9` (which is `1001` in binary):

  1001  (9 in binary)
& 0001  (1 in binary)
-------
  0001  (result)

- Result is `1` → `9` is odd.

### Summary
- **`(n & 1) === 0`**: True for even, False for odd.
 */

