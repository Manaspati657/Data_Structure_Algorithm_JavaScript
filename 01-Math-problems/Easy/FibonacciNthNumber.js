//fibonacci series : 0 1 1 2 3 5 8 13 21 34 ....

//serise start from 0 1 and last 2 number sum is third number


//print the series


const printFibonacciSeries = ( n ) => {
    let n1 = 0 , n2 = 1 ;
    const arr = [];

    while( n > 0){
        arr.push(n1);
        const n3 = n1+n2;
        n1 = n2;
        n2 = n3;
        n--; 
    }
    console.log(arr);
}

// printFibonacciSeries(10);

const printNthFibonacciNumber = (n) =>{
    let n1 = 0 , n2 = 1, i = 1 ;

    while( i <= n){
        if(n === i) return n1;
        const n3 = n1+n2;
        n1 = n2;
        n2 = n3;
        i++; 
    }
    return -1;
}

console.log(printNthFibonacciNumber(10));



