//What is a callback function in javascript
setTimeout(function () { // Async operation
    console.log('timer')
}, 5000)

function x(y) {
    console.log('x');
  y();
}

x(
    function y() {
        console.log('y')
    }
)

//JS is synchronous single threaded language


function attachEventListerner(){
    let count=0;
    const testArray = [2,4,2,2,2]
    // document.querySelector('#clickMe').addEventListener('click',function xyx(){
    //     console.log("button clicked",++count)
    // })

    // for (let i=1;i<=5;i++){
    //     setTimeout(function(){
    //         console.log(i)
    //     },i*1000)
    // }
   console.log(testArray.length) 
}

attachEventListerner();



