// function add(){
//     var a=50,b=70,c=60,d=90,e=100;
//     console.log(a+b-c*d/e)
// }

// add();


// function add(a,b,c,d,e){
    
//     console.log(a+b-c*d/e)
// }

// add(20,30,40,50,60);



// function biodata(name,age,city){
//     console.log(`My name is ${name}.I am ${age} year old. I live in ${city}`);
    
// }

// biodata(prompt("Enter your name"), prompt('Enter your Age'),prompt('Enter your city'));


// function palindrome(word){
//     var reverseWord = "";

   
//     for (var i = word.length -1 ; i>=0 ; i--){
//         reverseWord += word[i];
//     }
//     if(word=== reverseWord){
//         return `the word is palindrome`;
        
//     }else{
//         return "the word is not palindrome"
//     };
// };

// console.log(palindrome(prompt('Enter any word')));




// function MultiplicationTable(table,range){
//     for (var i =1; i<=range ; i++){
//         document.write(`${table} x ${i} = ${table*i} <br>`)
//     }
// }

// MultiplicationTable(prompt(`Enter any number`) ,prompt(`Enter range`))




// function res(a,b){
//     var res = a+b;
//     return res;

// };

// console.log(res(20,20));



// function greet(message){
 
//     return message;

// }

// var messageGet = greet(`Hello World...`);
// console.log(messageGet);



function Calculator(firstVal,secondVal,operator){
      if(operator === `+`){
        return firstVal+secondVal
      }
      else if (operator===`-`){
        return firstVal - secondVal
      }else if (operator===`*`){
        return firstVal * secondVal
      }else if (operator===`%`){
        return firstVal % secondVal
      }else if (operator===`/`){
        return firstVal / secondVal
      }else{
        return `Invalid Operator`
      }
    };

console.log(Calculator(+prompt(`Enter first number`),+prompt(`Enter second number`),prompt(`Enter operator`)));
