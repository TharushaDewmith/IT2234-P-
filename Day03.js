//Question 1: functions
function PrintMsg()
{
	console.log("Hello!")
	
}
PrintMsg()

function sum()
{
	return 5+6
}
console.log(sum())

function sub(a,b)
{
  return a-b
}
console.log(sub(5,3))
console.log("_____________________________________________________________________________")

//Question 2:write a boolean function to find a given number is prime or not 


function isPrime(num)
{
	
	if(num<=1)
	{
		isprime=false;
	}
	else
	{
		for(let i=2; i<=num/2; ++i)
		{
			if(num%i==0)
			{
				isprime=false;
			}
		}
	}
	
	if(isPrime)
	{
		console.log( num + " is a prime number")
	}
	else
	{
		console.log(num +"is not a prime")
	}
	
}
isPrime(3)
console.log("_____________________________________________________________________________")


//Question 3:Write a recursive function to print numbers from 1 to n
function printNumbers(n, current = 1) {
    if (current > n) return; 
    console.log(current);
    printNumbers(n, current + 1); 
}

printNumbers(10);
console.log("_____________________________________________________________________________")

//arrow functions
const msg = () =>{return console.log("Hello!")}
//console.log(msg)
msg()
console.log("_____________________________________________________________________________")

//Question 4: Write arrow function to sum 2 numbers 
const add = (a,b)=> {return "Sum is " + (a+b)}
console.log(add(4,5))

//default parameter
const mult =(a,b=2)=>{ return "Mult is " + (a*b)}
console.log(mult(4,5))
console.log(mult(4))
console.log("_____________________________________________________________________________")
//rest parameter
/*const mysum = (...n)=>{
	console.log(n)
}
mysum(4,5,6,89,2)
console.log("_____________________________________________________________________________")
*/
//get sum of these numbers

/*const mysum = (...n) => {
	let t=0
	n.forEach ((i)=>t=t+i)
	console.log(t)
}
*/

const mysum =(...n)=>
{
  return n.reduce((t,i) => t=t+i)
}
console.log(mysum(4,5,6,8,2))
console.log("_____________________________________________________________________________")

//callback function
//a function passed as an argument

/*const myname =(name) => {console.log("My name is " +name)}
const greet =(msg, fun) =>{
	 console.log("Hi.." +msg)
	 fun
}
greet("Good Morning", myname("Tharusha"))
*/

const greet = (msg, fun) => {
	console.log("Hi.." +msg)
	fun()
}
greet("Good Morning", () => {console.log("My name is Tharusha")})

console.log("_____________________________________________________________________________")

const multtwo =(n) => n*2
const myarr =(mul,...n)=>
{
	n.forEach((i) => console.log(mul(i)))
}

myarr(multtwo,4,5,6,8,2)
console.log("_____________________________________________________________________________")