'use strict'; 


(function()
{

  // 1.  Create an empty object with the object literal( object literal = {})
  //---------------------------------------------------------------------------

  //   let person = {};

  //   display(person);

  //2.  Create an object and populate the properties using an object literal
  //------------------------------------------------------------------------

    // let person = {
    //   firstName: 'Barbara',
    //   lastName: 'Engle'
    // };

    // display (person);
    // display (person.firstName);

    //3.  To Demonstrate the Dynamic Nature of Javascript
    //---------------------------------------------------
    //  What is person?  There is no class defined.  
    //  That is the beauty of working in a dynamically typed language.  
    //  You don't have to create the types ahead of time to be able to work with them.  
    //  That is also the downside because there is no type checking done for you. 
    //  The dynamic nature of Javascript means that you can change the shape of an object after it is created.

    //  let person = {
    //   firstName: 'Barbara',
    //   lastName: 'Engle'
    // };
 
    // display (person);
    // display (person.firstName);

    // person.age = 100;

    // display (person);

    //4.  Adding a Function to an Object
    //----------------------------------
    //   let person = {
    //   firstName: 'Barbara',
    //   lastName: 'Engle',
    //   age: 42
    // };
 
    // display (person);
    // display (person.firstName);

    // person.isAdult = function(){ return this.age >= 18; }

    // //Note the keyword [this] in the function.  That is the way to reference other properties in the same object from within the object.

    // display (person.isAdult());

    //5.  Creating an Object using variables as properties
    //----------------------------------------------------
    //
    // function registerUser(fName,lName){
    //   let person ={
    //     firstName: fName,
    //     lastName: lName
    //   };
    //   display(person);
    // }

    // registerUser('Cathy','Dunstan');

    //OR
    // function registerUser(firstName,lastName){
    //   let person = {
    //     firstName,
    //     lastName,
    //     age: 25,
    //     isAdult() {return this.age >= 18;}     
    //   }
    //   display(person.isAdult());
    // }

    // registerUser ('Cathy','Dunstan');

    //Note the shorthand syntax for the function.  This syntax can only be used in an object literal





   
})(); 



//     //person.age = 17;
//     //person.isAdult = function () { return this.age >= 18; }

//     display(person.isAdult());

//    /*  function registerUser (fName,lName)
//     {
//       let person = {
//         firstName:fName,
//         lastName:lName
//       }
//     } */

//     function registerUser(firstName,lastName)
//     {
//       let person = {
//         firstName,
//         lastName
//       };
//     }

//     display(Object.keys(person));

//     //OR

//     for (let propertyName in person)
//     {
//       display(propertyName);
//     }

//     let person1 = 
//       {firstName: 'Barbara',
//       lastName: 'Engle',
//       age: 17,
//       isAdult() {return this.age>= 18;}
//       }

//       let person2 ={};


//     Object.is(person1,person2);  //false

//     Object.assign(person2,person1);

//     display(person1===person2); //false

//     display (person1,person2);

//     //A better demo of the merge function
//     // REMEMBER MUTATION RULES, DON'T MUTATE ANYTHING THAT IS PASSED IN AS A PARAMETER

//     let personDetails = {
//         name: { firstName: 'Barbara',
//                 lastName: 'Engle'
//               },
//         age: 17,
//       isAdult() {return this.age>= 18;}
//       };

//       let personStats =
//       {height:6,
//       weight:60};

//       Display(Object.assign({},personStats,personDetails));

//       Object.defineProperty(personDetails,'fullName',
//       {get: function(){
//         return this.name.first + ' ' + this.name.last;
//       };
//       set: function(value){
//         var nameParts = value.split('');
//         this.name.firstName = nameParts[0];
//         this.name.lastName = nameParts[1];
//       };
//       }})



// })();