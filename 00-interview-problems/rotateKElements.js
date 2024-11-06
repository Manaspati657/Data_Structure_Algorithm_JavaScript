const inp = [1,8,3,2,5,4],no = 3;
console.log(inp);


const rotateKElement = (arr , k) => {
    let l = arr.length;
    k = k % l;
    while(k > 0){
        let lastElement = arr[l-1];

        for(let i = l-1 ; i > 0 ; i--)
            arr[i] = arr[i-1];

        arr[0] = lastElement;
        k--;
    }
}

rotateKElement(inp,no);
console.log(inp);