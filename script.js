const box = document.querySelector('.box')

/* Callback Hell
setTimeout(() =>{
    box.classList.add('bigger')
    setTimeout(() =>{
        box.classList.add('circle')
        setTimeout(()=>{
            box.classList.add('move')
            setTimeout(()=>{
                box.classList.add('colored')
                setTimeout(()=>{
                    box.classList.remove('colored')
                    setTimeout(()=>{
                        box.classList.remove('move')
                        setTimeout.apply(()=>{
                            box.classList.remove('circle')
                            setTimeout(()=>{
                                box.classList.remove('bigger')
                            })
                        })
                    })
                })
            })
        },500)
    },500)
}, 500)
*/
let loadingBar = false;
/*
new Promise((resolve, reject)=> {
    //if operations done and succesed
    resolve({
        name: 'Yusuf',
        surname: 'Akier'
    })
    // if operations wrong
    reject('not resolved');
})
.then(data => {
    data.web = 'https://gamesunited.co'
    return data
})
.then(data => {
    console.log(data)
})
.catch(data => {
    console.log(data)
})
.finally(() => {
    loadingBar = true;
    console.log('Already finished')
})
*/

/*
// wait is a function (variable func)
const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

wait(500)
.then(()=> console.log('Animasyon Basladi'))
.then(() => {
    box.classList.add('bigger')
    return wait(500)

})
.then(() => {
    box.classList.add('circle')
    return wait(500)
})
.then(() => {
    box.classList.add('move')
    return wait(500)
})
.then(() => {
    box.classList.add('colored')
    return wait(500)

})
.then(() => {
    box.classList.remove('colored')
    return wait(500)

})
.then(() => {
    box.classList.remove('move')
    return wait(500)

})
.then(() => {
    box.classList.remove('circle')
    return wait(500)
})
.then(() => {
    box.classList.remove('bigger')
    return wait(500)
})
.finally(() =>{
    console.log("Animasyon Bitti")
})

// Callback Execute Method
class Yusuf {
    resolved = []
    rejected = []

    constructor(callback) {
        callback(this.resolve.bind(this), this.reject.bind(this))
    }
    resolve(data){
        //this.resolved.map(callback=> callback())
        this.rejected = []
        this.resolved.reduce((old, current) => current(old), data)
    }
    reject(data){
        this.resolved = []
        this.rejected.reduce((old, current) => current(old), data)
    }
    then(callback){
        this.resolved.push(callback)
        return this
    }
    catch(callback){
        this.reject.push(callback)
        return this
    }
}

new Yusuf((resolve, reject) => {
    setTimeout(()=>{
        reject('yusuf can akier')
        resolve('yusuf akier')
    }, 500)
}).then(() => {
    console.log('First then block')
}).then(() => {
    console.log('Second then block')
}).catch(() => console.log('error!'))
*/

// if all promises resolved then block will sucessed but one of promises reject it would not be sucessed
const prom1 = new Promise(resolve => setTimeout(resolve, 1000, 'yusuf can akier'))
const prom2 = new Promise(resolve => setTimeout(resolve, 800, 'batuhan arslan'))
const prom3 = new Promise((resolve, reject) => setTimeout(resolve, 800, 'enes elmal'))

Promise.all([prom1, prom2, prom3])
.then(([data1 , data2, data3]) => console.log(response))
.catch(err => console.log(err))


// Promise race
const prom4 = new Promise(resolve => setTimeout(resolve, 1000, 'yusuf can akier'))
const prom5 = new Promise(resolve => setTimeout(resolve, 800, 'batuhan arslan'))
const prom6 = new Promise((resolve, reject) => setTimeout(resolve, 800, 'enes elmal'))

Promise.race([prom4, prom5, prom6])
.then(response => console.log(response))
.catch(err => console.log(err))

// Promise allSettled

Promise.allSettled([prom4, prom5, prom6])
.then(response => console.log(response))

// Promise any : first exist data but resolved promised data


fetch("http://worldtimeapi.org/api/timezone/Europe/Istanbul")
.then( response => {
     console.log(response.json())
})
.then(data => console.log(data))