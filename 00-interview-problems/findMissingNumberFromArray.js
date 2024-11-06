const inp = [11,12,13,14,15];


// if array is always sorted then also if array is not sorted then also we have to sort it

const findMissingNumber = (arr) =>{
    const l = arr.length;
    if(l > 1){
        let n = arr[l-1] - (l-1);
        arr.forEach(element => {
            if(element != n) return n;
            n++;
        });
        return n;
    }

    return null;
}

console.log(findMissingNumber(inp));
