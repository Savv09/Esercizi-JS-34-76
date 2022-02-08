function sum(...num) {
    return  num.reduce((p, n) => {
        return p + n;
    })    
}

console.log(sum(1, 2, 3, 4, 5));