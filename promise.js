//Promise is an object representing eventual completion of an asynchronous operation.

const userLeft = true;
const userWatchingCatMeme = false;


function watchingTurtorial() {
    return new Promise((resolve, reject) => {

        if (userLeft) {
            reject({
                name: 'user left',
                message: ':(',
            })
        }
        else if(userWatchingCatMeme){
            reject({
                name: 'user watching cat meme',
                message: ':(',
            })
        }

        else(
            resolve('Thumbs up and subscribe')
        )


    })
}

watchingTurtorial().then((message)=>{
console.log('success '+ message)
}).catch((error)=>{
    console.log(error.name +' '+ error.message)
})

