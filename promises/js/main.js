const fakeRequest = (url) => {
    const rand = Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(rand < 0.7){
                resolve("Here is your Jazzmaster's DATA");
            }
            reject("REQUEST ERROR!");
        }, 1000)
    }); 
}


fakeRequest('/squire/jazzmaster')
    .then((data) => {
        console.log('REQUEST DONE!');
        console.log("data, is:", data)
    })
    .catch ((err) => {
        console.log("OH no!", err);
    })