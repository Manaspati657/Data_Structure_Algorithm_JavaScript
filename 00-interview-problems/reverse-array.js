// Reverse array without any extra space

console.log("hello world");

const arr=[3,10];
// const arr=[3,10,2,4,6,7,1,9];

console.log(arr);


const revArr = ( inp ) =>{
    let l= 0,r = inp.length-1;
    while(l < r){
        //swap 
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;

        l++;
        r--;
    }
}

revArr(arr);
console.log(arr);

