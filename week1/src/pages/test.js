
var funcs = [];

for (var i = 0; i < 3; i++) {
    funcs[i] = function() { return i; };
    // console.log(funcs[i]()); // [
    //     [Function (anonymous)],
    //     [Function (anonymous)],
    //     [Function (anonymous)]
    //   ]
    console.log(i); // 0 1 2 3
}
console.log(i);
for (var j = 0; j < funcs.length; j++) {
    console.log(funcs[j]()); // 3 3 3 
}