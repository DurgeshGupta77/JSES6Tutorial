console.log("I am ready!");

//Template String Initiate

let para = document.getElementById('example');

let userName = "Durgesh";
let surName = "Gupta";
let num1 = 5000;
let num2 = 5000;

let newText = `${userName}
${surName} has a Salary of Rs. ${num1 + num2}
`;

para.innerText = newText;

//Template String Close

//Destructuring Elements Open

//Destructuring Objects
const personalInfo = {
    "fullName" : "Durgesh Prasad Gupta",
    "emStatus" : "Student",
    "age" : 22,
    "Employment" : "Fintech Nepal Pvt. Ltd."
}

const {fullName, emStatus} = personalInfo;

console.log(fullName, emStatus)

//Destructuring Objects and reassigning to new name
const {age : a, Employment: em} = personalInfo;

console.log(a, em);

//Destructuring Array
const arr = ["Durgesh", "Prasad", "Gupta"];

let [firstName, middleName ,lastName] = arr;

console.log(firstName)

//Destructuring Array and reassigning Array Items to new variable
const fn = firstName;
console.log("After assigning to new variable first name becomes "+fn);

//Destructuring Array and giving new content to array items
firstName = "Aayush";
console.log("After giving new content first name becomes "+firstName);

//Destructuring Elements Close

//Object Literal Open
function addressMaker(city, province){
    const newAddress = {city, province};
    console.log(newAddress);
}

addressMaker("Kathmandu", "Gandaki");

function newAddressMaker(address){
    const {city, province} = address;
    const theAddress = {
        city,
        province,
        country : 'Nepal'
    };

    console.log(`The city of durgesh is ${theAddress.city} located in ${theAddress.province} and ${theAddress.country}`)
}

newAddressMaker({city: 'Kathmandu', province: 'Gandaki'});

//Object Literal Close

//For of loop
let incomes = [10000,15000,20000];
let total = 0;

for(let income of incomes){
    total+=income;
}

console.log(total);
//For of loop Closed

//Spread Operator
//Spread Operator in Array
let arr1 = [1,2,3,4,5,6];
let arr2 = [...arr1];

console.log("The array after spread is "+arr2);

arr2.push(true);

console.log("The arr2 after pushing value is "+arr2);
console.log("The arr1 after updating arr2 is "+arr1);

//Spread Operator in Object
let obj1 = {
    "collegeName" : "Herald College"
}

let obj2 = {
    ...obj1
};

console.log("Object Spread in obj2 gives "+obj2.collegeName);
//Spread Operator Closed


//REST OPERATOR OPEN
function add(...nums){
    console.log("The REST operator trial gives "+nums);
}

add(4,5,6,7,8);
//REST OPERATOR CLOSED


//Arrow Function OPEN
function multiply(...nums){
    let total = nums.reduce((x,y) => x*y);
    console.log("Arrow Function Multiplication gives "+total);
}

multiply(1,2,3,4,5,6)
//Arrow Function CLOSED

//Default Parameter Opened
function newAdd(numArray = []){//Providing default array value of [] when nothing is provided during function call
    let total = 0;
    numArray.forEach(element => {
        total+=numArray
    });
    console.log(total);
}

newAdd();
//Default Parameter Closed

//includes() Opened
let someArr = [1,2,3,4,5,6];

console.log(someArr.includes(2));
//includes() closed



//Import and Export Open
import { data, data2 } from "./example.js";
console.log(data +"," + data2);
//Import and Export Closed

//padStart() and padEnd() Open
let str = "Durgesh";

console.log(str.padEnd(10,"a"));//Total Number of Characters, Character to be added to end of String
console.log(str.padStart(10,"a"));//Total Number of Characters, Character to be added to start of String

//Async and Await
async function resolveAfter3Seconds(){
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve('resolved');
        }, 3000);
    });
};

async function getAsyncData(){
    const results = await resolveAfter3Seconds();
    console.log(results);
};

getAsyncData();


//Set
const exampleSet = new Set([1,1,1,2,2,2,3,3,3,4,4,4,4]);
exampleSet.add(5);

console.log(exampleSet);