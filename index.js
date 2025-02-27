const { v4: uuidv4 } = require('uuid');
var validator = require('validator');
const { appendFileSync } = require('node:fs');

function generateUniqueID(firstname, lastname){
  if (!firstname || !lastname){
    return null;
  }
  let lowercaseFirstname = firstname.toLowerCase();
  let lowercaseLastname = lastname.toLowerCase();
  let firstletter = lowercaseFirstname.charAt(0);

  const uid = uuidv4().substring(0,8);
  console.log (uid);

  return firstletter+lowercaseLastname+uid

}

console.log(generateUniqueID("Athalia", "Marfil"))

function addAccount(userinfo){
  if (userinfo.length != 4){
    console.log(1)
    return false;
  }

  console.log(userinfo)
  let [firstname, lastname, email, age] = userinfo
  

  if (!firstname || !lastname || !email){
    console.log(2)
    return false;
  }
    
    
  if (!validator.isEmail(email) || age < 18){
    console.log(3)
    return false;
  }

  const uniqueID = generateUniqueID(firstname, lastname);
  if (!uniqueID){
    console.log(4)
    return false; 
  }

  const userData = firstname+','+lastname+','+email+','+ age +',' + uniqueID+"\n";

  try {
    appendFileSync('users.txt', userData);
    console.log('The "data to append" was appended to file!');
    return true;
  } catch (err) {
    return false;
  } 

}


//VALID
console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 58]));
addAccount(["Athalia", "Marfil", "acmarfil@up.edu.ph", 20]);

//INVALID
console.log(addAccount(["", "Turing", "aturing@w3c.com", 58]));
console.log(addAccount(["Athalia", "Lexine", "aturing@w3c.com"]));
console.log(addAccount(["Athalia", "Marfil", "HELLO", 20]));
console.log(addAccount(["Athalia", "Marfil", "HELLO", 10]));
console.log(addAccount(["Athalia", "", "HELLO", 10]));
