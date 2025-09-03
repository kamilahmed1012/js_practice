// Asynchronous JS
// console.log('hello')
// setTimeout(()=>{
//     console.log('hi my self kamil, how about you')
// },3000)
// console.log('Good Bye')

// Call back function

// const scriptLoad = (src , callback) => {
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = () => {
//         console.log('script is loaded', script.src)
//         callback(null, src)
//     }
//     script.onerror = function (){
//         console.log('Error loading Script with SRC: '+ src)
//         callback(new Error('Src got some Error'))
//     }
//     document.head.append(script)
// }

// function hello(error, src){
//     if (error){
//         console.log(error)
//     }
//     console.log('hello')
// }
// function bye(){
//     alert('bye')
// }

// scriptLoad('	https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js', hello )

// async function getData (){
//     const url = 'https://jsonplaceholder.typicode.com/todos'
//     try{
//         const response = await fetch(url);
//     if(!response.ok){
//         throw new Error(`Response Status: ${response.status}`)
//     }
//     const result = await response.json()
//     console.log(result)
//     }catch(error){
//         console.log(error)
//     }
// }

// getData()

// Problem 01-02
// Write a program to load a javaScript file i  a browser using Promises. Use .then() to display an alert when the load is complete  .

// async function getData (src){
//    return new Promise((resolve, reject) => {
//     let script = document.createElement('script')
//     script.src = src;
//     script.onload = () => {
//         resolve(`${src} is loaded successfully`)
//     }
//     document.body.appendChild(script)
// })
// }

// let a  =  getData('https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js')
// a.then((value)=>{
//     console.log(value)
// })

// async function loadScript() {
//     console.log(a)
//     console.log('script is loaded')
// }

// loadScript()

// Problem 03

// let p = () => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             reject(new Error('This is not acceptable'))
//         }, 3000)
//     })
// }

// let a = async () => {
//     try{
//         let c = await p()
//         console.log(c)
//     }catch(error){
//         console.log('The error is handle')
//     }
// }

// a()

let newPromise = async () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(10)
        }, 1000)
    })
}
let newPromise2 = async () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(8)
        }, 2000)
    })
}
let newPromise3 = async () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(13)
        }, 3000)
    })
}

const run = async () => {
    console.time('run')
    let a1 = newPromise()
    let a2 = newPromise2()
    let a3 = newPromise3()
    let allPromise = await Promise.all([a1, a2, a3])
    console.log(allPromise)
    console.timeEnd('run')
}

run()