numbers = [
    {
        number: "Four"
    },
    {
        number: "One"
    },
    {
        number: "Two"
    },
    {
        number: "Six"
    },
    {
        number: "Six"
    },
    {
        number: "Four"
    },
    {
        number: "Five"
    },
    {
        number: "One"
    },
    {
        number: "Five"
    },
    {
        number: "Two"
    }
    ]
    var arr1 =[]
    for(var i=0; i<numbers.length; i++){
        arr1.push(numbers[i].number)
         }
         var arr2 = Array.from(new Set(arr1))
         var arr3 = arr2.sort()
         console.log(arr3)

// remove space between words
var a = "  mozammil mahmood khan  ";
var arr = a.replaceAll(' ', '');
console.log(arr)

// remove extra space from start and end of the words
var b = "  mozammil mahmood khan   ";
var str = b.trim()
console.log(str)

// remove space from start of the string
var b = "  mozammil mahmood khan   ";
var str = b.trimStart();
console.log(str)

// remove space from end of the string
var b = "  mozammil mahmood khan   "; 
var str = b.trimEnd();
console.log(str)

// remove duplicate from the array
var duplicate = [2,43,5,4,3,2,43,8,5];
var uniqueArr = Array.from(new Set(duplicate))
console.log(uniqueArr);

// create class using javascript

// When it comes to creating classes, there is no fundamental difference between JavaScript
// and ES6 since ES6 is a version of JavaScript. However, the class syntax introduced
// in ECMAScript 6 makes creating classes in JavaScript more straightforward and more similar
// to class-based languages like Java or Python.

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Method defined using prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
};

// Create an instance of the class
const person1 = new Person("John", 30);

// Call the method on the instance
person1.greet();

// create class using ES6
class persion{
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    greet(){
        console.log("I am " + this.name, "and my age is" +this.age);
    }

}
const persion1 = new persion("mozammil", 29);
persion1.greet();

// Math object is used to perform mathematical tasks or oprtations

var a = 64.9;
var b = Math.random();
var b = Math.round(a);
var b = Math.sqrt(a);
var b = Math.floor(a);
var b = Math.ceil(a);
console.log(b)

// first letter of string capital
var str = "mozammil mahmood";
var capStr = str.charAt(0).toUpperCase() + str.slice(1);
console.log(capStr);

// capitalize every first letter of word in a string

var str = "mozammil mahmood hhan";
var arr = str.split(' ');
var finalArr = [];
for(var i=0;i<arr.length;i++){
    finalArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));

}
var finalStr = finalArr.join(' ');
console.log(finalStr)

// reverse the string with loop and without inbuild method
var str = "mozammil mahmood";
var finalStr = '';
for(var i=str.length-1; i>=0; i--){
    finalStr += str[i]
}
console.log(finalStr)

// reverse the string without loop
var str = "mozammil mahmood";
var arr = str.split('');
var finalArr = arr.reverse().join('');
console.log(finalArr)

// find largest number in an array

var arr = [20, 120, 111, 215, 54, 78]; 
var largest = Math.max.apply(null, arr);
console.log(largest)

// second largest number in an array
var arr = [20, 120, 111, 215, 54, 78]; // use int arrays
    var max = Math.max.apply(null, arr); // get the max of the array
    arr.splice(arr.indexOf(max), 1); // remove max from the array
    console.log(Math.max.apply(null, arr))

// using map method need to do not competed

var a = [2,3,4,5,7,8];
var arr = a.map(x=> x+5);
console.log(arr);

// String methods
//length
var str = "mozammil mahmood"
console.log(str.length);
//slice
var str1 = str.slice(4,10);
console.log(str1)


// swap two variable with temprory variable

var a =50;
var b =100;
var c = a;
a = b;
b = c;
console.log(a)
console.log(b)

// swap two variable without temprory variable

var x = 100;
var y = 200;
x = x + y;
y = x-y;
x = x-y;
console.log(x);
console.log(y)

// find square root

var a = 144;
var b = Math.sqrt(a);
console.log(b)

// find are of rectangle
// area = (base * height) / 2

var base = 24;
var height = 12;
var area = (base * height) / 2
console.log(area)


// generate randon number
var a = Math.random();
console.log(a);

// Check if number is positive or divided by zero

function numberCheck (data){
    if(data > 0){
        console.log("number is positive")
   }else if(data < 0){
       console.log("number is nigative")
    }else{
        console.log("number is 0")
    }

}
 numberCheck(123)

// find even or odd number
function evenOdd(number){
    if(number % 2 == 0){
        console.log("number is even")
    }else{
        console.log("number is odd")
    }
}
evenOdd(8);

// find largest among three numbers

function largestNumber (num1, num2, num3){
    if(num1 >= num2 && num1 >= num3){
      console.log("largest number is" + " " + num1)
    } else if(num2 >= num1 && num2 >= num3){
      console.log("largest number is" + " " + num2)
    }else{
        console.log("largest number is" + " " + num3)
    }

}
largestNumber(45,99,71)

// find largest among three numbers using enbuild methos

function largestNumber (num1, num2, num3){

var largest = Math.max(num1, num2, num3)
console.log("largest number is" + " " + largest)

}
largestNumber(45,99,71)

// check the prime number
// prime number which is divided by 1 and itself
function checkPrime(number){
    isPrime = true;
    if(number == 1){
        console.log("Nither Prime Nor Composite Number");
    }else if(number > 1){
         for(var i=2; i<number; i++){
             if(number % i == 0){
                isPrime = false;
                break;
             }
         }
         if(isPrime){
            console.log(number + " " + "is Prime Number")
         }else{
            console.log(number + " " + "is Not a Prime Number") 
         }
    }
}
checkPrime(7);

// Multiplication table

function multiplication(number){
   for(var i=1; i<=10; i++){
    var result = number * i;
    console.log(number +"*" + i + "=" + " " + result);
   }
}
multiplication(19);

// Find some of natural number using given number

function someOfNaturalNumber(number){
    var sum = 0;
    for(var i = 1; i <= number; i++){
        sum += i;
    }
    console.log(sum)
}
someOfNaturalNumber(6);

// sort words in alphabet order

function sortString(text){
    var arr = text.split(' ').sort();
    var str = arr.join(" ");
    console.log(str)
}
sortString("i am mozammil mahmood");

// replace character of string
var str = "i am mozammil mahmood";
var rplaceStr = str.replace("mozammil", "Mudassar");
console.log(rplaceStr);

// Output for this
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: '+ arr[i]);
  }, 3000)
  // result : Index: 4, element: undefined
}

// check the number is integer or not

function checkNumber(num, str, bool){
if(Number.is(str)){
console.log("true")
}else{
    console.log("false")
}
}
checkNumber(33, "test", true)

// asked in interview
const length = 4;

const numbers = [];

for (var i = 0; i < length; i++);{

    numbers.push(i + 1);

}

console.log(numbers)// result will be [5]

// Asked in Interview

function foo() {
    let a = b = 0;
    a++;
    return a;
  }
  
  foo();
  typeof a; // This will result in a ReferenceError
  typeof b; // This will return "number"

  // Immidiately Invoked function expression (IIFE)

  (function(){
    console.log("test");
  })();

  // interview Question to find odd lowest number from an array
var arr = [2,131,4,151,111,231];
var val = [];
for(var i=0;i<arr.length;i++){
    if(arr[i] % 2 !=0){
        val.push(arr[i])
    }
}
var newVal = Math.min.apply(null, val)

console.log(newVal)
  
// flat array without using inbuild function

function flattenArray(arr) {
    const flattened = [];
  
    function recursiveFlatten(inputArr) {
      for (let i = 0; i < inputArr.length; i++) {
        if (Array.isArray(inputArr[i])) {
          recursiveFlatten(inputArr[i]);
        } else {
          flattened.push(inputArr[i]);
        }
      }
    }
  
    recursiveFlatten(arr);
    return flattened;
  }
  
  const arr = [2, 3, 4, 5, [24, 5, 6], 4, [4, 5, 6, [65, 7], 8]];
  //using enbuilt method
  // const flatten = arr.flat(2);
  const flattenedArr = flattenArray(arr);
  console.log(flattenedArr);

  // Asked in interview to print 1 to 10 after one second interval

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
for(var i=1; i<=arr.length; i++){
    printNum(i)
  }
  function printNum(data){
    setTimeout(function(){
    console.log(data);
    }, data*1000)
  }

// asked in interview to find the index of val value
const a = [1,2,3,4,5,6,7,8,9,10];
const val = 5;

for (let i = 0; i < a.length; i++) {
  if (a[i] === val) {
    console.log(i) // 4
    
  }
}

// Asked in interview for clouser 
function add(num1){

    console.log(num1)

    function add1(num2){
        console.log(num2 + num1);
       

    }
    add1(2)

}
add(4)

// Asked in interview
  console.log(1 + "2" + "2"); //122
	console.log(1 + +"2" + "2"); // 32
	console.log(1 + -"1" + "2"); //02
	console.log(+"1" + "1" + "2"); //112
	console.log("A" - "B" + "2"); //nan2
	console.log("A" - "B" + 2); //nan

// asked in interview
let obj1 = {
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    age: 30,
    gender: "Male",
    address: {
        street: "493",
        city: "New York",
        country: "USA"
    },
    dependants: ['A', 'B', 'C']
}

let obj2 = {...obj1}; // ... is spread operator

obj2.age = 40;
obj2.dependants.push('D');
obj2.address.country = "UK";

console.log(obj1 === obj2); // false
console.log(obj1.gender === obj2.gender);//true
console.log(obj1.age === obj2.age); // false
console.log(obj1.address === obj2.address); //true

// asked in interview to find the keys of object
let obj2 = {
    "AUS": {
      "name": "Australia",
      "center": [-104.231, 65.76],
      "zoom": 12
  },
  "USA": {
      "name": "United States of America",
      "center": [-104.231, 65.76],
      "zoom": 12
  }
};

let keys = Object.keys(obj2);
console.log(keys); // Output: ["AUS", "USA"]

// asked in interview fo find the Key by name

let obj2 = {
    "AUS": {
      "name": "Australia",
      "center": [-104.231, 65.76],
      "zoom": 12
  },
  "USA": {
      "name": "United States of America",
      "center": [-104.231, 65.76],
      "zoom": 12
  }
};

function findKeyByName(obj, targetName) {
    for (let key in obj) {
        if (obj[key].name === targetName) {
            return key;
        }
    }
    return null; // Return null if the name is not found
}

let key = findKeyByName(obj2, "United States of America");
console.log(key); // Output: "USA"

// Find Duplicate from the array using javascript

function duplicateCheck(arr){
    let seen = new Set();
    let duplicate = new Set();
    for(let i=0; i<arr.length; i++){
      if(seen.has(arr[i])){
      duplicate.add(arr[i])
      }else{
      seen.add(arr[i])
      }
    }
    return Array.from(duplicate)
    }
    
    let array = [1, 2, 3, 4, 2, 5, 6, 3, 7,7];
    let dupli = duplicateCheck(array);
    console.log(dupli); // [2,3,7]

// asked in interview to reverse given array without using methods
function bubbleSortDescending(arr) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap the elements
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var arr = ["donkey", "monkey", "lion", "zebra"];
arr = bubbleSortDescending(arr);
console.log(arr);
//["zebra","monkey","lion","donkey"]
  
  
// Asked in interview to Write a function to convert a string from camel case 
// to snake case. for e.g input : thisIsATest output : This_Is_A_Test using javascript

function camelToSnakeCase(input) {
    // Use a regular expression to find places where a lowercase letter is followed by an uppercase letter
    const result = input.replace(/([a-z])([A-Z])/g, '$1_$2');

    // Convert the first letter to uppercase and the rest to lowercase
    const finalResult = result.replace(/_/g, function(match, offset, string) {
        return '_' + string.charAt(offset + 1).toUpperCase();
    });

    // Ensure the first letter is also capitalized
    return finalResult.charAt(0).toUpperCase() + finalResult.slice(1);
}

// Example usage
const camelCaseString = 'thisIsATest';
const snakeCaseString = camelToSnakeCase(camelCaseString);
console.log(snakeCaseString); // Output: This_Is_A_Test

// Asked in intervew
// var arr = [2,7,8,11]; and target = 9 , output = [0,1] find this using javascript

function findTwoSum(arr, target) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (obj[complement] !== undefined) {
            return [obj[complement], i];
        }
        obj[arr[i]] = i;
    }
    return [];
}

let arr = [2, 7, 8, 11];
let target = 15;
let result = findTwoSum(arr, target);
console.log(result);  // Output: [0, 1]

//asked in interview to find number of each charater
var str = "aaaaaahhhhhhhhhurrrrrrrrrrrrrrggggggggggggiiiiiiiiapoooooooooortttttttthhhhhhhhhffftttttttttty";
var charCount = {};

for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (charCount[char]) {
        charCount[char]++;
    } else {
        charCount[char] = 1;
    }
}

console.log(charCount);

// sort arr descending order without enbuild method
let arr = [33,21,44,5,66,21,23,2,89,11];

  for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length-1-i; j++){
      if(arr[j] < arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr)

  // sort array in assending order without enbuilt method

  let arr = [33, 21, 44, 5, 66, 21, 23, 2, 89, 11];

for(let i=0; i<arr.length-1; i++){
  for(let j=0; j<arr.length-1-i; j++){
   if(arr[j] > arr[j + 1]){
     let temp = arr[j];
     arr[j] = arr[j + 1];
     arr[j + 1] = temp
   }
  }
}
console.log(arr);

  // Asked in interview to sort array in o of n complexity using javascript
const arr = [5, 2, 9, 1, 8, 3, 5, 1];
const max = Math.max.apply(null, arr);
sortNum(arr, max);
console.log(arr);

function sortNum(arr, max) {
  const count = new Array(max + 1).fill(0);
  const value = new Array(arr.length);

  for (let i=0; i<arr.length; i++) {
    count[arr[i]]++;
  }
  for (let i=1; i<=max; i++) {
    count[i] += count[i-1];
  }
  for (let i=arr.length-1; i>= 0; i--) {
    value[count[arr[i]]-1] = arr[i];
    count[arr[i]]--;
  }
  for (let i=0; i<arr.length; i++) {
    arr[i] = value[i];
  }
}
// Asked in interview to find second largest number from array without using method
const a = [2,4,6,7,22,19];
const resultt = findlarge(a);
console.log(resultt)

function findlarge(arr){
    if(arr.length < 2){
    return null;
    }
    
    let large = -Infinity;
    let seconodLarge = -Infinity;
    
    for(let i=0; i<arr.length; i++){
      if(arr[i] > large){
        seconodLarge = large;
        large = arr[i];
      }else if(arr[i] > seconodLarge && arr[i] != large){
       seconodLarge = arr[i]
      }
    }
    
    return seconodLarge;
}
// Asked in interview const input = "AAABBCCDDDADAA"; And Output: A3B2C2D3A1D1A2
function compressString(input) {
    let result = '';
    let count = 1;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
            count++;
        } else {
            result += input[i] + ":" + count +", ";
            count = 1;
        }
    }

    return result;
}

const input = "AAABBCCDDDADAA";
const output = compressString(input);
console.log(output); // Output: A3B2C2D3A1D1A2

// Asked in interview to find the lowest and hieghest number from array without inbuild method. 

var arr = [2,3,5,6,7,22,11,1];
var small = arr[0];
for(var i=0; i<arr.length; i++){
  if(arr[i] < small){
     small = arr[i];
  }
}
console.log(small)

var arr = [2,3,5,6,7,22,11,1];
var large = arr[0];
for(var i=0; i<arr.length; i++){
  if(arr[i] > large){
     large = arr[i];
  }
}
console.log(large);

// Asked in interview for timer 1 to 10 if hit 10 than restrat using html and js;
let count = 1;
function stratTimer(){
  setInterval(() => {
    document.getElementById("timer").innerText = count;
    count++;
    if(count > 10){
      count = 1;
    }
  }, 1000)
}
stratTimer();
// Html
<div>
<h1 id="timer">1</h1>
</div>

// find average of array using javascript
const num = [10, 20, 30, 40, 50];
const sum = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const average = sum / num.length;
console.log(average); 

//Asked in interview 
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = ['a', 'b', 'c', 'd', 'e'];

function swapArrays(arr1, arr2) {
    // Calculate the length of the shorter array
    let length = Math.min(arr1.length, arr2.length);

    // Swap the elements as specified
    for (let i = 0; i < length; i++) {
        let temp = arr1[i];
        arr1[i] = arr2[length - 1 - i];
        arr2[length - 1 - i] = temp;
    }
}

// Perform the swap
swapArrays(arr1, arr2);

console.log("arr1:", arr1); // ['e', 'd', 'c', 'b', 'a', 6, 7, 8, 9]
console.log("arr2:", arr2); // [5, 4, 3, 2, 1]

//Asked in interview to find counts of duplicate numbers from array using javascript

function countDuplicateNumbers(arr) {
  const counts = {};
  const duplicates = {};
  // Count the occurrences of each number
  arr.forEach(num => {
      counts[num] = (counts[num] || 0) + 1;
  });
  // Store only the numbers that have duplicates
  for (let num in counts) {
      if (counts[num] > 1) {
          duplicates[num] = counts[num];
      }
  }
  return duplicates;
}

// Example usage:
const number = [1, 2, 3, 4, 2, 3, 5, 6, 1, 1];
console.log(countDuplicateNumbers(number)); 
// Output: { '1': 3, '2': 2, '3': 2 }

// Asked in interview to find missing numbers from an array
const nums = [3, 0, 1, 2, 8,10,12];
const n = Math.max.apply(null, nums);
const find = findMissing(nums, n);
console.log(find);
 function findMissing(arr, n){
   const missingNum = [];
   const numSet =new Set(arr);
   for(let i=0; i<=n; i++){
     if(!numSet.has(i)){
     missingNum.push(i);
     }
   }
   return missingNum;
 } 
//Expected Output: [4,5,6,7,9,11];

//Asked in interview to merge 2 arrays
const employees = [
  { id: 1, name: 'John', age: 28, salary: 40000 },
  { id: 2, name: 'Jane', age: 32, salary: 50000 },
  { id: 3, name: 'Doe', age: 45, salary: 60000 },
  { id: 4, name: 'Smith', age: 25, salary: 35000 },
  { id: 5, name: 'Emily', age: 31, salary: 45000 }
];
const NewEmployees = [
  { id: 6, name: 'John', age: 28, salary: 40000 },
  { id: 7, name: 'Jane', age: 32, salary: 50000 }
];
let mergeEmp = [...employees, ...NewEmployees];
//let mergeEmp = employees.concat(NewEmployees)
console.log(mergeEmp);

//Asked in interview to find fibonachi series for given number
function callFibo(n){
  let a =0; 
  let b=1;
  let c;
  console.log(a);
  console.log(b);
  for(let i=2; i<n; i++){
      c = a + b;
      console.log(c);
      a = b;
      b =c;
  }
}
callFibo(5);

// Asked in interview
let inputData = "ABC";
let findoutput = find(inputData);
console.log(findoutput);
function find(str){
  let result = [];
    function recursiveFunct(empty, str){
      if(str.length===0){
        result.push(empty);
      }else{
        for(let i=0; i<str.length; i++){
           recursiveFunct(empty + str[i], str.slice(0, i) + str.slice(i + 1));
        }
      }
    }
    recursiveFunct('', str);
    return result.join(',');
}

// Asked in interview output:[7,9,1,3,5] 
let inputNum = [1, 3, 5, 7, 9];
let find = findOut(inputNum);
console.log(find);
function findOut(arr){
  return arr.slice(-2).concat(arr.slice(0,-2))
}









