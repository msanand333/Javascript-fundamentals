function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)
        if (location == 'google') {
            resolve('Google says HI')
        } else {
            reject('We can only talk to google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('processing response')
        resolve(`Extra information, ${response}`)
    })
}


// //Using promises

// makeRequest('google').then(response=>{
//     console.log('response received')
//     return processRequest(response)
// }).then(processedResponse=>{
//     console.log(processedResponse)
// }).catch(err=>{
//     console.log(err)
// })


//Using async await

async function doWork() {
    try {
        const response = await makeRequest('google');
        console.log('response received');
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    }
    catch (err) {
        console.log(err)
    }


}

doWork();
