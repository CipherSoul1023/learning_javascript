//Output some code.
//console.log("Hello World!");

//window alert
//window.alert("Are you alive?");

/* This
    is 
    a multiline
    commment
*/

//Basic DOM manipulation. The getElementById() in js grants you the ability to be able to modify js content anyhow.

//document.getElementById("myHi").textContent = "Hello";
//document.getElementById("myP").textContent = "Hello World!"

/* Variables:
        const -> Constant
        let -> Local variable
        var -> Apparently you should avoid this as much as possible.
*/

//Accepting User Input In Java.

//Easy way -> Window Prompt
/*let username;
username = window.prompt("What is your username: ")
console.log(username);
*/

//Professional Way -> HTML Textbox.
//let username;

//This is another DOM manipulation where we create a function when an element in the html file is clicked,
//whatever is included in that function will be called.

/*
document.getElementById("MySubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    message = document.getElementById("MyH1").textContent = `What's Up ${username}`;

};
*/

/*
//Type Casting

//Converting age to an input
const age = Number(age);

//Converting username to a string
let username = String(username)

//Converting isStudent to a bool.
let isStudent = Boolean(isStudent)
*/


/*
//Creating a random number between 0 and n
let randomNum = Math.floor(Math.random() * n)+1;

//Creating a random number between n and m(Where n is the maximum)
let randomNum = Math.floor(Math.random() * (n - m)) + n;
*/

//Checked Property(.checked) In js
// The checked property is a property in js that checks the checked state of a radio button or
//check box
// e.g MyCheckBox.checked


/* The spread operator
    -> This is an operator that takes in a list of numbers and separates them in =to individual
        numbers.

   The Rest Parameter.
    -> Tis is used when as a parameter of a function if on doesn't know how many inputs are going
        to be passed into the function.
        e. function sum(...numbers){}
        
*/

/*function combineStrings(...words){
    combined_string = "";
    for (let word in words){
        combined_string += word;
    }

    return combined_string;
}

*/


/* Callbacks
    1. A call back is a function that is passed in as an arguement to another function.

    Apparently, callbacks are used in asynchronous events. e.g File reading, Fetching an API.

    e.g 
    function sayHello(callback){
        console.log("Hello!");
        callback();    
    }
    
    function sayGoodbye(){
        console.log("Goodbye!");
    }

    sayHello(sayGoodbye) -> What happens here is that when the function sayHello is done, we invoke the
                            saYGoodbye function.

    2. In js, if one line of the program takes more than the other, the one that takes less time to run
        will be executed first. But what if the second line depends on the output of the first line?
        That is where callbacks come in, where we manipulate both fnctions in a way that the second line
        will wait for the first line to run then the second line will also run as well.

    Extra Info: setTimeout -> Sets how much time does what is passed in that function will take to run.
        e.g setTimeout(function{
            console.log("Hello");
        }, 3000) -> Runs for 3 seconds.
*/

/*
    forEach() -> method used to iterate through an array of some elements and apply a specific function.(Callback)
                e.g array.forEach(function(element, index, array){
                
                })

*/

/*
    1. The map()  Method -> Accepts a callback and applies that callback in each element of an array
                            - It also returns a new modified array.
    
    2. Syntax -> const newArray = array.map(function(array, element, index){
        // Work Done Here
    })

*/

/*
    1. The filter() method -> creates a new array by filtering out elements.

    2. Syntax -> const newArray = array.filter(function(array, element, index){
        // Work Done Here
    })

    The function passed into the filter method will return a boolean value, then the filter method
    will stick all the values that return true in the new array.

*/

/*
    1. The reduce() Method -> This reduces the elements of an array into a single value.

    2. Syntax -> const cumulative = array.reduce(function(accumulator, currentValue, index, array) {
                                        // logic goes here
                                    }, initialValue);


*/

/*
    1. Function Expressions
        - The Difference Between Function Expressions and Function Declarations.
            e.g Function Declaration.
                - function hello(){
                    console.log("hello");
                }
                - You can call it before it is written in the code.

                Function Expression.
                - const hello = function(){
                    console.log("hello");
                }
                - You can call it after it is written on the code.
*/

/* 
    const numbers = [1, 2, 3, 4, 5, 6];

    const squares = function(element){
        return Math.pow(element, 2);
    }

    const squaredNumbers = numbers.map(squares);
*/

/* 
    Arrow Functions -> A concise way to write function expressions and it is best when using
                        functions that you are going to use once.
                        (parameters) => some code

*/

/*

    //Function Declaration
    function hello(){
        console.log("Hello");
    }

    //Function Expression
    const hello = function(){
        console.log("Hello");
    }

    //Arrow Functions
    const hello = () => console.log("Hello World");

*/

/*
    1. EventListeners - This is a way for javascript to wait for something to happen in the code and 
                        then respond with some code.

    2. Syntax -> element.addEventListener(event, function);

*/

/*
    Javascript Objects -> These are groups of ralted data, in short, it is similar to a python
                            dictionary.
                            e.g const person = {
                                        Name: "Frans",
                                        Surname: "Makhafola",
                                        Age: 10,
                                }
    A Method In Javascript -> This is basically a function that belongs to an object.


*/

/*
    1. The THIS keyword: It is a reference to the object where THIS is used.
                        -> THIS can help us access properties inside of the object 
                            we are working on.

*/

/*
    Constructors -> All I know is that this is a special method, almost similar to a class though.
    
    The Syntax:
        function Person(name, surname, age){
            this.name = name;
            this.surname = surname;
            this.age = age;
        }

        // Creating an instance of the constrctor.
        const person1 = new Person("Frans","Makhafola", 18);

    Accessing Some Elements:
        person1.name;
        person1.surname;
        person1.age;
*/

/*
    Classes -> These are tools that make it way easier to work with objects.
        Syntax:
            class Person{
                //Constructor Here
                constructor(name, surname){
                        this.name = name;
                        this.price = price;
                    }
                }

    

 */

/*
    The static keyword -> This is the keyword that is able to differentiate something that belongs to
                            an object and something that belongs to the class itself.
                        
                        -> We can access a method or a property, declared with the static keyword,
                            without creating an object. 

*/

/*
    Inheritance -> This occurs when the child class inherits the properties of the parent class,
                    by passing the the parent class in the parameters of the child class.

                Syntax Of Inheritance:
                    class Animal{
                        }

                    class Cat extends Animal{
                        }


*/

/*
    The Super Keyword -> This keyword allows you access a method or property of the parent class,
                            without overriding the same property from the child class.

                    The Syntax:
                        class Animal{
                                constructor(){
                                    
                                    }

                                speak();
                            }

                        class Rabbit extends Animal{
                                constructor(){
                                        super();
                                    }
                                
                                speak(){
                                        super.speak();
                                    }
                            }

*/

/*
    Getters And Setters -> These are special methods you can use to write and read encapsulated data.

    The Syntax Of Getters and Setters:
        class Rectange{
            constructor(width, height){
                this.width = width;
                this.height = height;
            }

            //It is a must for the method of this function to match the property being accessed.
            // And the newWidth variable automatically becomes the property itself.
            set width(newWidth){
                if (newWidth > 0){
                    this._width = newWidth;                
                }

                else{
                    console.error("Invalid width");    
                }
            }

            set height(newHeight){
                if (newHeight > 0){
                    this._height = newHeight;                
                }

                else{
                    console.error("Invalid width");    
                }
            }

            get width(){
                return this._width;
            }

            get height(){
                return this._height;
            }
            
        
        }


*/