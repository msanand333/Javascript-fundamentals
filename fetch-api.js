



const url='https://official-joke-api.appspot.com/jokes/programming/random'

async function getData(){

 
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
}

getData();

