Array.prototype.map = function(cb) {
    const a = this;
    const res = [];
    for(let i of a){
        console.log(i);
        res.push(cb(0));
    }
    return res;
}

const arr = [1, 3, 5, 2];

console.log(arr.map((ele) => {
    return ele*2;
}));
