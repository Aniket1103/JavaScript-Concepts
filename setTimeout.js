function a(){
    console.log("in a func a");
}
console.log(typeof a)


for(var i = 0; i < 5; i++){
    (function inc(x){
        setTimeout(() => {
            console.log(x);
        }, 2000);
    })(i);
}