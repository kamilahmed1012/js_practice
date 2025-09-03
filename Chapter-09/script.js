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

// Problem-01
// Write a program to load a javaScript file i  a browser using Promises. Use .then() to display an alert when the load is complete  .

// const p1 = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         resolve('Hello World!')
//     }), 2000}) 

// p1.then((value)=> {
//     alert(value)
// }).catch((error)=>{
//     console.log(error)
// })



