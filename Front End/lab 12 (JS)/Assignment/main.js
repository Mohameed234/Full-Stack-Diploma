//     ##############################  Task 5  #################################

//     write a program that take 3 integers from user then print the max element 
//     and the min element.

//     #########################################################################



// function Max(){

//     var int1 = parseInt(prompt("Put Your First Number"));
//     var int2 = parseInt(prompt("Put Your Second Number"));
//     var int3 = parseInt(prompt("Put Your Third Number"));


//     return Math.max(int1, int2, int3);
// }       

// document.write(` <h1 style="background-color: aqua;">The Max Number Is : <span style="color: red;">${Max()}</span> </h1>`);






// ###########################################################################################################################################################








//     ##############################  Task 6  #################################

//      Write a program that allows the user to insert integer number then 
//      check If a number is oven or odd

//     #########################################################################


// function evenOrOdd(){

//     var int = parseInt(prompt("Put Your Number"));

//     if(int % 2 == 0 ){
//         document.write(` <h1> The Number <span style="color: red;"> ${int} </span> Is : <span style="color: blue;"> Even </span> </h1> `)
//     }
//     else
//     {
//         document.write(` <h1> The Number <span style="color: red;"> ${int} </span> Is : <span style="color: blue;"> Odd </span> </h1>  `)
//     }

// }

// evenOrOdd();






// ###########################################################################################################################################################





//     ####################################  Task 7  #######################################

//       Write a program that take character from user then if it is vowel chars (a,e,I,o,u) 
//       then print vowel otherwise print consonant

//     #####################################################################################




// function vo(){

//     var char = prompt("Put Your Character");

//     if(char == 'a'|| char == "e" || char == "i" || char == "o" || char == "u" ){
//         document.write(` <h1> The Char <span style = "color: red;">${char}</span> Is : <span style="color: blue;">Vowel</span> </h1>`);
//     }
//     else{       
//         document.write(` <h1> The Char <span style = "color: red;">${char}</span> Is : <span style="color: blue;">Consonant</span> </h1>`);
//     }

// }

// vo();





// ###########################################################################################################################################################




//     ####################################  Task 8  #######################################

//        Write a program that allows user to insert integer then print all numbers between 
//        1 to that’s number

//     #####################################################################################



// function getNumbers(){
//     var int = parseInt(prompt("Put Your Number"));
//     document.write(`<h1> The  Numbers Between 1 And ${int} Is : </h1>`);

//     for(var y = 1; y <= int; y++ ){
//         document.write(`<h1 style="text-align: center; color: red; background-color: aqua;"> ${y} </h1>`);
//     }
// }
// getNumbers();







// ###########################################################################################################################################################






//     ####################################  Task 9  ####################################

//         Write a program that allows user to insert integer then print a multiplication 
//         table up to 12.

//     ##################################################################################


// function multiplication(){

//     var int = parseInt(prompt("Put Your Number"));

//     for(var y = int ; y / int <= 12 ; y += int){
//         document.write(`${y} `);
//     }

// }
// multiplication();







// ###########################################################################################################################################################





//     ####################################  Task 10  ##############################

//        Write a program that allows to user to insert number then print all even 
//        numbers between 1 to this number

//     #############################################################################






// function evenNumbers(){

//     var int = parseInt(prompt("Put Your Number"));
    
//     document.write(`<h1> The Even Numbers Between 1 And ${int} Is : </h1>`);

//     for(var y = 1 ; (y <= int) ; y++){

//         if((y % 2 == 0)){

//             document.write(` <h2 style="color: red; background-color: aqua; text-align: center">${y}</h2> `);
//         }
//     }


// }
// evenNumbers();





// ###########################################################################################################################################################





//     ###########################  Task 11  ###########################

//        Write a program that take two integers then print the power

//     #################################################################




// function power(){
//     var int = parseInt(prompt("Put Your Number"));
//     var power = parseInt(prompt("Put The Power Number"));

//     var value = int ** power;

//     document.write(`<h1 style="background-color: aqua;">The value of ${int} power ${power} Is : <span style="color: red;">${value}</span> </h1>`);

// }

// power();







// ###########################################################################################################################################################




//     ####################################  Task 12  #####################################

//         Write a program to enter marks of five subjects and calculate total, average and 
//         percentage.

//     ####################################################################################





// function marks(){

//     var int1 = parseInt(prompt("Mark 1 :"));
//     var int2 = parseInt(prompt("Mark 2 :"));
//     var int3 = parseInt(prompt("Mark 3 :"));
//     var int4 = parseInt(prompt("Mark 4 :"));
//     var int5 = parseInt(prompt("Mark 5 :"));

//     var total = int1 + int2 + int3 + int4 + int5;

//     var average = total / 5;

//     var percentage = average + "%";

//     document.write(`<h1 style="background-color: aqua;"> The Total Marks Is : <span style="color: red;">${total}</span> </h1>`);
//     document.write(`<h1 style="background-color: aqua;"> The Average Marks Is : <span style="color: red;">${average}</span> </h1>`);
//     document.write(`<h1 style="background-color: aqua;"> The Percentage Is : <span style="color: red;">${percentage}</span> </h1>`);

// }

// marks();








// ###########################################################################################################################################################





//     ####################################  Task 13  #####################################

//         Write a program to enter marks of five subjects and calculate total, average and 
//         percentage.

//     ####################################################################################


// function month(){
//     var int = parseInt(prompt("Put The Month Number:"));

//     if(int == 1){
//         document.write(`<h1>The Month Is : january</h1> `);
//         document.write(`<h1>Days In Month : 31 day</h1> `);
//     }
//     else if( int == 2 ){
//         document.write(`<h1>The Month Is : February</h1> `);
//         document.write(`<h1>Days In Month : 28 day</h1> `);
//     }
//     else if(int == 3){
//         document.write(`<h1>The Month Is : March</h1> `);
//         document.write(`<h1>Days In Month : 31 day</h1> `);
//     }
//     else if(int == 4){
//         document.write(`<h1>The Month Is : April</h1> `);
//         document.write(`<h1>Days In Month : 30 day </h1>`);
//     }
//     else if(int == 5){
//         document.write(`<h1>The Month Is : May</h1> `);
//         document.write(`<h1>Days In Month : 31 day</h1> `);
//     }
//     else if(int == 6){
//         document.write(`<h1>The Month Is : June</h1> `);
//         document.write(`<h1>Days In Month : 30 day</h1> `);
//     }
//     else if(int == 7){
//         document.write(`<h1>The Month Is : July</h1> `);
//         document.write(`<h1>Days In Month : 31 day</h1> `);
//     }
//     else if(int == 8){
//         document.write(`<h1>The Month Is : August</h1> `);
//         document.write(`<h1>Days In Month : 31 day</h1> `);
//     }
//     else if(int == 9){
//         document.write(`<h1>The Month Is : September</h1> `);
//         document.write(`<h1>Days In Month : 30 day</h1> `);
//     }
//     else if(int == 10){
//         document.write(`<h1>The Month Is : october</h1> `);
//         document.write(`<h1>Days In Month : 31 day</h1> `);
//     }
//     else if(int == 11){
//         document.write(`<h1>The Month Is : Novamber</h1> `);
//         document.write(`<h1>Days In Month : 30 day</h1> `);
//     }
//     else if(int == 12){
//         document.write(`<h1>The Month Is : Decamber</h1> `);
//         document.write(`<h1>Days In Month : 31 day</h1> `);
//     }
//     else{
//         document.write("<h1>This Number Is Not Exist</>")
//     }

// }

// month();





// onther answer   *************** ^__^ ****************




// function month(){

//     var int = parseInt(prompt("Insert The Number of The Month: "));

//     if(int == 2 ){
//         document.write(`<h1> Days in Month : 28 </h1>`);
//     }
//     else if(int == 4 || int == 6 || int == 9 || int == 11){
//         document.write(`<h1> Days in Month : 30 </h1>`);
//     }
//     else if(int == 1 || int == 3 || int == 5 || int == 17 || int == 8 || int == 10 || int == 12){
//         document.write(`<h1> Days in Month : 31 </h1>`);
//     }
//     else{
//         document.write("<h1>This Number Is Not Exist</>")
//     }


// }
// month();








// ###########################################################################################################################################################




//     ####################################  Task 14  #####################################

//          Write a program to input marks of five subjects Physics, Chemistry, Biology, 
//          Mathematics and Computer, Find percentage and grade

//     ####################################################################################





// function grad(){

//     var Physics = parseInt(prompt("Put Your Mark in Physics:"));
//     var Chemistry = parseInt(prompt("Put Your Mark in Chemistry:"));
//     var Biology = parseInt(prompt("Put Your Mark in Biology:"));
//     var Mathematics = parseInt(prompt("Put Your Mark in Mathematics:"));
//     var Computer = parseInt(prompt("Put Your Mark in Computer:"));

//     var percentage = (Physics + Chemistry + Biology + Mathematics + Computer) / 5;

//     if(percentage >= 90 ){
//         document.write(`<h1> Grade A </h1>`);
//     }
//     else if(percentage >= 80 ){
//         document.write(`<h1> Grade B </h1>`);
//     }
//     else if(percentage >= 70 ){
//         document.write(`<h1> Grade C </h1>`);
//     }
//     else if(percentage >= 60 ){
//         document.write(`<h1> Grade D </h1>`);
//     }
//     else if(percentage >= 50 ){
//         document.write(`<h1> Grade E </h1>`);
//     }
//     else if(percentage < 40 ){
//         document.write(`<h1> Grade F </h1>`);
//     }
    
// }
// grad();







// ###########################################################################################################################################################

//                                                                   Using SWitch  

// ###########################################################################################################################################################






//     ####################################  Task 15  #####################################

//           Write a program to print total number of days in month

//     ####################################################################################




// function days(){
//     var month = parseInt(prompt("Insert Number :"));

//     switch(month){

//         case 1 :
//             document.write(`<h1>Days In Month : 31 day</h1> `);
//             break;
//         case 2 :
//             document.write(`<h1>Days In Month : 28 day</h1> `);
//             break;
//         case 3 :
//             document.write(`<h1>Days In Month : 31 day</h1> `);
//             break;
//         case 4 :
//             document.write(`<h1>Days In Month : 30 day</h1> `);
//             break;
//         case 5 :
//             document.write(`<h1>Days In Month : 31 day</h1> `);
//             break;
//         case 6 :
//             document.write(`<h1>Days In Month : 30 day</h1> `);
//             break;
//         case 7 :
//             document.write(`<h1>Days In Month : 31 day</h1> `);
//             break;
//         case 8 :
//             document.write(`<h1>Days In Month : 31 day</h1> `);
//             break;
//         case 9 :
//             document.write(`<h1>Days In Month : 30 day</h1> `);
//             break;
//         case 10 :
//             document.write(`<h1>Days In Month : 31 day</h1> `);
//             break;
//         case 11 :
//             document.write(`<h1>Days In Month : 30 day</h1> `);
//             break;
//         case 12 :
//             document.write(`<h1>Days In Month : 31 day</h1> `);
//             break;
//         default : 
//             document.write(`<h1>Error</h1>`); 
//     }
// }
// days();






// ###########################################################################################################################################################





//     ####################################  Task 16  #####################################

//            Write a program to check whether an alphabet is vowel or consonant

//     ####################################################################################



// function vo(){
//     var char = prompt("Insert Charecter:");

//     switch(char){
//         case "a" :
//             document.write(`<h1>The char ${char} is : Vowel</h1>`);
//             break;
//         case "e" :
//             document.write(`<h1>The char ${char} is : Vowel</h1>`);
//             break;
//         case "i":
//             document.write(`<h1>The char ${char} is : Vowel</h1>`);
//             break;
//         case "o":
//             document.write(`<h1>The char ${char} is : Vowel</h1>`);
//             break;
//         case "u":
//             document.write(`<h1>The char ${char} is : Vowel</h1>`);
//             break;
//         default:
//             document.write(`<h1>The char ${char} is : Consonant</h1>`);    
//     }
// }
// vo();






// ###########################################################################################################################################################






//     ####################################  Task 17  #####################################

//                    Write a program to find maximum between two numbers

//     ####################################################################################


// function max(){
//     var number1 = prompt("Put Number1: ");
//     var number2 = prompt("Put Number2: ");
    



//     switch(number1){
//         case number2  :
//             document.write(`Number ${number1} Equal Number ${number2}`);
//             break;
//         default:
//             document.write(`The Max Is : ${Math.max(number1,number2)}`);
//     }
// }
// max();




// ###########################################################################################################################################################





//     ####################################  Task 18  #####################################

//                     Write a program to check whether a number is even or odd

//     ####################################################################################



// function evenOrOdd(){
//     var int = parseInt(prompt("Insert Number :"));
   
//     var check = int % 2;

//     switch(check){
//         case 0 :
//             document.write("The Number Is Even");
//             break;
//         default:
//             document.write("The Number Is Odd");
            
//     }
// }
// evenOrOdd();





// ###########################################################################################################################################################




//     ####################################  Task 19  #####################################

//          Write a program to check whether a number is positive or negative or zero

//     ####################################################################################




// function checkNumber(){

//     var int = parseInt(prompt("Insert Number"));

//     var check 


//     switch(int){
//         case 0 :
//             document.write("The Number Is Zero");
//             break;
//         default:
//             int > 0 ? document.write("The Number Is Positive") : document.write("The Number Is Negative");    //  ^__^

//     }
// }
// checkNumber();



// ###########################################################################################################################################################




//     ####################################  Task 20  #####################################

//                      Write a program to create Simple Calculator 

//     ####################################################################################



// function calc(){
//     var Number1 = parseInt(prompt("Number1 :"));
//     var Number2 = parseInt(prompt("Number2 :"));


//     var operation = prompt("Put Your Operation: ");
//     var value;

//     switch(operation){
//         case "+":
//             value = Number1 + Number2;
//             document.write(`Number1 + Number2 = ${value}`);
//             break;
//         case "-":
//             value = Number1 - Number2;
//             document.write(`Number1 - Number2 = ${value}`);
//             break;
//         case "*":
//             value = Number1 * Number2;
//             document.write(`Number1 * Number2 = ${value}`);
//             break;
//         case "/":
//             value = Number1 / Number2;
//             document.write(`Number1 / Number2 = ${value}`);
//             break;
//         case "**":
//             value = Number1 ** Number2;
//             document.write(`Number1 ** Number2 = ${value}`);
//             break;
//         case "%":
//             value = Number1 % Number2;
//             document.write(`Number1 % Number2 = ${value}`);
//             break;
//         default :
//             document.write("مش فاكر بقا الباقي ");

//     }
// }
// calc();