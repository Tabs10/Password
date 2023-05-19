// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables

  var passwordlength;
  var lowercriteria;
  var uppercriteria;
  var numbercriteria;
  var specialcharectors;
  var Mychoices;
  
// Variable Values

  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
  
// Function

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function

function generatePassword() {

// Password Length between 8 and 128

    passwordlength = prompt("Please select length of your password, choose between 8 and 128");
    console.log("Password length " + passwordlength);

    //passwordlength = prompt("Enter a password");
    
// Password Length Empty

    if(!passwordlength) {
    alert("Value Required");
      //while(!passwordlength){
        //passwordlength = prompt("Please select between 8 and 128");
        //console.log("Password length " + passwordlength);
      //} if (passwordlength < 8 || passwordlength > 128) {
        //  while(passwordlength < 8 || passwordlength > 128){
         // passwordlength = prompt("Please select between 8 and 128");
         // console.log("Password length " + passwordlength);
         // }
      //passwordlength = prompt("Enter a password");

    } else if (passwordlength < 8 || passwordlength > 128) {
    while(passwordlength < 8 || passwordlength > 128){
    passwordlength = prompt("Please select between 8 and 128");
    console.log("Password length " + passwordlength);
    }
    
// Password Length within Criteria

    } else { 
      lowercriteria = confirm("Lower case letters?");
      console.log("Lower case " + lowercriteria);
      uppercriteria = confirm("Upper case letters?");
      console.log("Upper case " + uppercriteria);
      numbercriteria = confirm("Numbers?");
      console.log("Number " + numbercriteria);
      specialcharectors = confirm("Special characters?");
      console.log("Special Character " + specialcharectors);
    };
    console.log("here");
   
  // If Non Selected

    if (!lowercriteria && !uppercriteria && !numbercriteria && !specialcharectors && passwordlength) {
      console.log("here");
      Mychoices = alert("Please choose criteria");
      lowercriteria = confirm("Lower case letters?");
      console.log("Lower case " + lowercriteria);
      uppercriteria = confirm("Upper case letters?");
      console.log("Upper case " + uppercriteria);
      numbercriteria = confirm("Numbers?");
      console.log("Number " + numbercriteria);
      specialcharectors = confirm("Special characters?");
      console.log("Special Character " + specialcharectors);}
      
  // All four Selected

    if (lowercriteria && uppercriteria && numbercriteria && specialcharectors) {
      console.log("here");
      Mychoices = lower.concat(upper, number, special);
      console.log(Mychoices);
    }
    
// Options for selection of any three

    else if (lowercriteria && uppercriteria && numbercriteria) {
      Mychoices = lower.concat(upper, number);
      console.log(Mychoices);
    }
    else if (lowercriteria && uppercriteria && specialcharectors) {
      Mychoices = lower.concat(upper, special);
      console.log(Mychoices);
    }
    else if (lowercriteria && numbercriteria && specialcharectors) {
      Mychoices = lower.concat(number, special);
      console.log(Mychoices);
    }
    else if (uppercriteria && numbercriteria && specialcharectors) {
      Mychoices = upper.concat(number, special);
      console.log(Mychoices);
    }

    // Options for Selection of any two

    else if (lowercriteria && uppercriteria) {
      Mychoices = lower.concat(upper);
      console.log(Mychoices);
    }
    else if (lowercriteria && numbercriteria) {
      Mychoices = lowerCase.concat(number);
      console.log(Mychoices);
    }
    else if (lowercriteria && specialcharectors) {
      Mychoices = lower.concat(special);
      console.log(Mychoices);
    }
    else if (uppercriteria && numbercriteria) {
      Mychoices = upper.concat(number);
      console.log(Mychoices);
    }
    else if (uppercriteria && specialcharectors) {
      Mychoices = upper.concat(special);
      console.log(Mychoices);
    }
    else if (numbercriteria && specialcharectors) {
      Mychoices = number.concat(special);
      console.log(Mychoices);
    }

    // 1 true option

    else if (lowercriteria) {
      Mychoices = lowerCase;
      console.log(Mychoices);
    }
    else if (uppercriteria) {
      Mychoices = blankUpper.concat(upperCase);
      console.log(Mychoices);
    }
    else if (numbercriteria) {
      Mychoices = number;
      console.log(Mychoices);
    }
    else if (specialcharectors) {
      Mychoices = special;
      console.log(Mychoices);
    };
  
    // Empty variable for the password lenght
    if(passwordlength > 8 && passwordlength < 128){
    var blankpassword = [];
    
    // Loop for random selection
    for (var i = 0; i < passwordlength; i++) {
      var Choices = Mychoices[Math.floor(Math.random() * Mychoices.length)];
      blankpassword.push(Choices);
      console.log(Choices);
    }
  
    // Join and return the password 
    var password = blankpassword.join("");
    console.log("Pasword is: " + password);
    return password;

    passwordText.value = password;
  }


// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);}
