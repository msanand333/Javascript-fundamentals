function y() {
    var a = 10;
    function z() {
        console.log(a);
    }
    a = 100; // case II
    return z;
}

var x = y();
console.log(x);
x();

// Function bundled together with its lexical scope forms a closure

/** SCENARIO 2 **/

function a() {
    var y = 20;
    function b() {
        var x = 10;
        function c() {
            console.log(x,y);
        }
      c();
    }
    b();
}

a();


/** SCENARIO 3 **/

function print(){
    for (var i=1;i<=5;i++){

        setTimeout(()=>{   // loop executed and 5 setTimeouts stored in memory for execution.
            console.log(i)
        },1000*i)
      
    }
}
print();