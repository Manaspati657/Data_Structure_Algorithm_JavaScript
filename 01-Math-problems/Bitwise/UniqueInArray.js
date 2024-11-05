// get the unique number from array .

const inp = [2, 3, 3, 4, 2, 6, 4]; // unique is 6 all other have their duplicates.


const getUnique = (arr) =>{
    let unique = 0 ;
    arr.forEach(element => {
        unique = unique ^ element;
    });

    return unique;
}

console.log(getUnique(inp));
