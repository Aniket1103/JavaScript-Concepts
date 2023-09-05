function sum(a, b){
    return a + b;
}

function product(a, b){
    return a * b;
}

function op(operation){
    return function(a){
        return function (b){
            return operation(a, b);
        }
    }
}


// console.log(op(product)(10)(2));

const p10 = op(product)(10);

const s10 = op(sum)(10);

console.log(p10(5));
console.log(s10(5))
