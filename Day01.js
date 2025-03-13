//print hello world
console.log("Hello World")

//Define 2 variables and do mathematical operations
console.log("----- Mathematical Operations ------");
let num1 = 10
let num2 = 5

console.log(num1+num2)
console.log(num1-num2)
console.log(num1/num2)
console.log(num1*num2)

//print numbers from 1-10
console.log("----- Print numbers from 1-10 ------");
for(let i=1; i<=10; i++){
	console.log(i)
}

//print only the odd numbers
console.log("----- Print odd numbers ------");
for(let i=0; i<10; i++){
	if(i%2 == 1){
		console.log(i)
	}
}

//print numbers in reverse
console.log("----- Print numbers in reverse ------");
for(let i=10; i>0; i--){
	console.log(i)
}

/*4. reverse the numbers in left and right 4321-5-9876
Ex -:
	15
	654321-7-15 14 13 12 11 10 9 8
*/
console.log("----- Print numbers in reverse ------");
let number = 9
let mid = parseInt(number/2) + 1

for(let j=mid-1; j>0; j--){
	console.log(j)
}

console.log(mid)

for(let j=number; j>mid; j--){
	console.log(j)
}