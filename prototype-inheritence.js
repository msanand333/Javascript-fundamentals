let arr = ['anand','v'];
/**
 arr.__proto__ = Array.prototype
 arr.__proto__.__proto__ = Object.prototype
 arr.__proto__.__proto__.__proto__ = null
 */


let object = {
    name:'anand',
    job:'tech'
}
/**
 object.__proto__ = Object.prototype
 object.__proto__.__proto__ = null
 */

function fun(){
    console.log('fun')
}

/**
 fun.__proto__ = Function.prototype
 fun.__proto__.__proto__ = Object.prototpe
 fun.__proto__.__proto__.__proto__ = null
 */
