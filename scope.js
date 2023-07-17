function a(){
    var b = 3;
    c();
    function c(){
        console.log(b);

    }
}

a();