// JavaScript is a versatile, high-level programming language primarily used for web development.
//  It allows developers to create dynamic and interactive web pages by manipulating the Document Object Model (DOM).
//  JavaScript is an essential part of the web development stack, alongside HTML and CSS.

// Key features of JavaScript include:

// 1. Client-Side Scripting: JavaScript runs in the browser, enabling real-time updates and interactions without needing to reload the page.
// 2. Event-Driven: JavaScript can respond to user actions, such as clicks, form submissions, and keyboard inputs.
// 3. Asynchronous Programming: JavaScript supports asynchronous operations, allowing tasks like data fetching to run in the background without blocking the main thread.
// 4. Cross-Platform: JavaScript can run on various platforms, including web browsers, servers (via Node.js), and even mobile devices.
// 5. Rich Ecosystem: JavaScript has a vast ecosystem of libraries and frameworks, such as React, Angular, and Vue.js, which simplify and enhance web development.

// Overall, JavaScript is a powerful tool for creating modern, responsive, and user-friendly web applications.



// (0)DOM 


// const ahmed = document.getElementById("test") // 1

// const test2 = document.getElementsByClassName('test') //[]
// const test3 = document.querySelector('.test') // [0]
// const test4 = document.querySelectorAll('.test') // [0,1,2]


// console.log(test)
// console.log(test2)
// console.log(test3)
// console.log(test4)

// ahmed.style.backgroundColor = "red"

// test.onclick = function() {
//     console.log('clicked')
// }




// (1)variable declaration

// var: Function-scoped or globally-scoped, can be re-declared and updated
// let: Block-scoped, can be updated but not re-declared within the same scope
// const: Block-scoped, cannot be updated or re-declared



// var x = false

// const y = 6;

// let z = 7;


// console.log()
// (2)console



// console.log(x)
// console.error(y)
// console.warn(x)




//(3)-data types 


// Primitive data types: string, number, boolean, null, undefined, symbol
//Non-Primitive Data Type:  object, array, function, date



// const x = 5 //number
// const y = "hello" //string
// const z = true //boolean
// const a = null //object
// const b = undefined  //undefined
// let c; //undefined

// const d = [1,'2',true,4,5];



// let e = {
//  name:"ali" ,
//  age:"30",
//  city:"cairo"  
// }


// const f = new Date() 

// console.log(typeof(f))

// const g = Symbol()

// console.log(typeof(g))


// const h = function(){
//     return 'hello'
// }
// console.log(typeof(h))



// console.log(x,typeof(x))
// console.log(y,typeof(y))       
// console.log(z,typeof(z))
// console.log(a,typeof(a)) 
// console.log(b,typeof(b))
// console.log(c,typeof(c))
// console.log(d,typeof(d))
// console.log(e,typeof(e))
// console.log(f,typeof(f))
// console.log(g,typeof(g))
// console.log(h,typeof(h))


//(4)loops

//for loop

// for(let i = 0; i < 10; i++){

//     console.log(i)

// }

// const testArray = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango', 'peach', 'pear', 'pineapple', 'strawberry'];

// for(let i = 0; i < testArray.length; i++){
//     console.log("your fruit is "+testArray[i]);

// }


// while loop

// let i = 0

// while(i >= 10){
//     console.log('while',i)
//     i--
// }

// while(i<30){
// console.log(i)
// i++
// }

//(5)if else

// * == vs === vs =

//|| //or
//&& //and


// const x = 10

// const y = 4


// if (x+y >20) {
//     console.log("hello")
// }else if(x+y>10){
//     console.log("world 2")
// }
// if(condition){code}else{code}
// condition ? code : else

// 5>10?console.log("first"):6>3?console.log("second"):console.log("third")

// x === 5?console.log('x is 5'):console.log('x is not 5')


//(6)functions

// function addNums(num1 = 1, num2 = 1){
//     return num1 + num2
// }




// function testFunction(x,y){
//     console.log("first",x)
//     console.log("second",y)
// }

// testFunction(5,6)


// let testFunction = function(){
//     console.log("test")
// }

// alert("test")

// const testArrowFunc =()=>{
//     console.log("test arrow function")
// }

// testArrowFunc(  )


// function testFunction(name){
//     console.log(`hello ${name}`)
// }


// testFunction("ali")

// console.log(addNums(5,5))

// arrow function

// const testFunction = (name)=>{
//     console.log(`hello ${name}`)
// }

// testFunction("ali")

// const addNums = (num1 = 1, num2 = 1) => num1 + num2

// console.log(addNums(5,5))

// *arrow fuction vs regular function













///////// session 2 ////////











// (7)object



// const car = {
//     name: 'BMW',
//     year: 2020,
//     color: 'black',
//     getCar: function(){
//         return `The car is ${this.name} and it is ${this.color}`
//     }
// }



// let user = {
//     name:"ali",
//     age:'50',
//     city:"cairo",
//     getName:function(){
//         return "MY name is " + this.name
//     }
// }

// console.log(user)

// user.name = "mohamed"


// console.log(user)


// user.phone = "01214654646"

// console.log(user)


// delete user.age

// console.log(user)


// console.log(user.getName)


// const name = user.name

// const age = user.age

// const {name,age,phone} = user

// console.log(name,age,phone)

// console.log(car.name)


// console.log(car.getCar())

// console.log(car.getCar())

// delete car.color //delete

// car.price = 50000 //add

// car.color = 'blue' //update

// console.log(car)





//destructuring


// const color = car.color

// const {name, year} = car

// const {name,color,year} = car

// const normalVar = car.name

// console.log(normalVar)
// console.log(name)

// (8)array


// const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango', 'peach', 'pear', 'pineapple', 'strawberry'];



// const filtered = ()=>{

//     const testArr = []

//     for(let i = 0; i < fruits.length; i++) {


//           fruits[i].length <= 5 ?testArr.push(fruits[i]) :''

//     }

//     return testArr

// }

// console.log(filtered())


// fruits.map((element,i)=>{
// console.log(element,i)
// })

// let testArr = [1,3,5,"hello",true]

// console.log(fruits[fruits.length-1])

// console.log(fruits[fruits.length])

// fruits.push('test') //add to end
// console.log(fruits)

// fruits.pop()

// console.log(fruits)


// fruits.splice(2,2,"test1","test2") //remove last element
// console.log(fruits)

// fruits[2] = "test"
// console.log(fruits)

// fruits.pop() //remove last element

// console.log(fruits)


// fruits[1] = 'grapes' //change

// console.log(fruits)


// console.log(fruits)

//destructuring

// const [fruit1, fruit2,el2,el,el5] = fruits
// console.log(el5)

// console.log(fruit1, fruit2)

// const nums = [1,2,3,4,5,19,7,8,9,10]

// const i = nums.find(() => {

//     if (num > 5) {
//      return x
//  }
// }) //find

// console.log(i)

//VS//


// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] == 'orange') {
//     fruits.splice(i,1)  
//   }

// }
// console.log(fruits)


// (9)map 

// *map vs loop

// *The Array entries() Method

// *The Array every() Method

// *The Array filter() Method

// *The Array forEach() Method

// *The Array keys() Method

// *The Array map() Method

// *The Array reduce() Method

// *The Array some() Method

// *The Array values() Method

// *The Array indexOf() Method

// *The Array lastIndexOf() Method


// *The Array findIndex() Method

// *The Array from() Method

// *The Array isArray() Method


// const users = [
//     {id: 1, name: 'john'},
//     {id: 2, name: 'sara'},
//     {id: 3, name: 'karen'}
// ]



// users.map((user,i)=>{
//     console.log(user,i)
// })


// const names = users.map((user,i)=>{
//     return(user.name)
// })


// console.log(names.includes('john')) 

// console.log(users.includes({id: 1, name: 'john'})) // why false 


// console.log(ids)


//(10) local storage and session storage
// const test = {
//     name:"ali",
//     age:30,
// }

// localStorage.setItem("user",JSON.stringify(test))




// console.log(JSON.parse(localStorage.getItem("user")))






// // console.log(JSON.parse(localStorage.getItem("add")))



// localStorage.removeItem("add")

// localStorage.clear()
// console.log(localStorage)




// sessionStorage.setItem("user", JSON.stringify(test))
// console.log(JSON.parse(sessionStorage.getItem("user")))

// console.log(JSON.stringify({age:30}))
// console.log({age:30})


// localStorage.setItem('age', 30)

// localStorage.removeItem('name')

// localStorage.clear()

// const name = localStorage.getItem('name')
// const age = localStorage.getItem('age')




// sessionStorage.setItem('name', 'john')

// sessionStorage.setItem('age', 30)


// sessionStorage.removeItem('name')

// console.log(sessionStorage)  

// sessionStorage.clear()
// localStorage.clear()

// const name = sessionStorage.getItem('name')
// const age = sessionStorage.getItem('age')



// crud operations //

// create
// read
// update
// delete

// const users = [{ id: 1, name: 'john' }, { id: 2, name: 'sara' }, { id: 3, name: 'karen' }]

// //create
// function createUser(user) {

//     users.push(user)


// }


// createUser({ id: 4, name: 'mohamed' })

//read
// function readUser(id) {

//     let returnedUser;

//     for (let i = 0; i < users.length; i++) {
//         if (users[i].id == id) {
//             returnedUser = users[i]
//         }

//     }
//     console.log('read user', returnedUser)

// }


// readUser(2)

// //update
// function updateUser(id, newName) {
//     let returnedUserIndex;

//     for (let i = 0; i < users.length; i++) {
//         if (users[i].id == id) {
//             returnedUserIndex = i
//         }

//     }


//     users[returnedUserIndex].name = newName


// }



// console.log(users.find(user => user.id == 2))


// updateUser(2, 'ali')

//delete

// function deleteUser(id) {
//     //1


//     let returnedUserIndex;

//     for (let i = 0; i < users.length; i++) {
//         if (users[i].id == id) {
//             returnedUserIndex = i
//         }

//     }

//     // console.log(returnedUserIndex)
//     users.splice(returnedUserIndex,1)


// }


// deleteUser(2)


// console.log(users)







const input = document.getElementById("inp")
const button = document.getElementById("test")





button.addEventListener("click", () => {
    console.log(input.value)

    localStorage.setItem("inputValue", input.value)
})




