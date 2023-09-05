//make a function that searches a deeply nested object for a value

const obj = {
    a : {
        a0: {
            a00: "texta00"
        },
        a1: {
            a10: "texta10",
            a101: "texta101",
            a11: {
                a1010: "texta1010"
            }
        },
        a2: {
            a20: "texta20",
            a21: "texta21",
            a23: {
                a232: "texta232"
            }
        }
    },
    b : {
        b0: {
            b00: "textb00"
        },
        b1: {
            b10: "textb10",
            b101: "textb101",
            b11: {
                b1010: "textb1010"
            }
        },
        b2: {
            b20: "textb20",
            b21: "textb21",
            b23: {
                b232: "textb232"
            }
        }
    },
}

function find(obj, val){
    // console.log(1)
    for(let x in obj) {
        if(typeof obj[x] === "object") find(obj[x], val);
        else {
            // console.log("else")
            return obj[x] === val;
        }
    }
}

console.log(find("texta1010", obj));

