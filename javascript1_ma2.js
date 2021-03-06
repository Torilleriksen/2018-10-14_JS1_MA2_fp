//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
Person.prototype.nationality = "English";

var myFather = new Person("John", "Doe", 50, "blue");

console.log myFather.nationality;

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 var newArray = number.slice(5); 

//3. Delete the last number in the array that you created above.

delete number[9]; 

//4. Given the following paragraph, create a JavaScript function that 
changes all mentions of strawberry to banana and strawberries to bananas: 

Strawberries are a popular part of spring and summer diets throughout America. 
Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. 
They announce the impending arrival of the ruby red berries that so many people crave. 
Ripe strawberries taste sweet and have only a slight hint of tartness. 
They are also one of the healthiest fruits around. 
There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.

var firstFruit = ["banana"];
var secondFruit = ["strawberry"];

firstFruit[0] = "strawberry": 
secondFruit[0] = "banana"; 

/*. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, 
remove all elements out of the array that we just created. There after add in 4 names of cars inside that array.
Log it to the console.*/

var footballClub = ["Manchester", "Arsenal", "Liverpool", "Chelsea"];

footballClub.pop(0,1,2,3);
footballClub.push("BMW", "VW", "Fiat", "Audi");

console.log(footballClub);
    
//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var myPeople = [
  {person: 'Eva', role: 'Friend'},
  {person: 'Trond', role: 'Parent'},
  {person: 'Gregory', role: 'boyfriend'},
  ]

var nameDisplay = myPeople.filter(function(person){
  return (person.myPeople === "Trond";
          }]
          
 console.log(nameDisplay); 

//7. Create a simple function that logs the date.

var d = new Date();
  console.log(d);
