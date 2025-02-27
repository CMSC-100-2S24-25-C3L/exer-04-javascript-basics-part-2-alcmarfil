// const { v4: uuidv4 } = require('uuid');
// var validator = require('validator');
// const { appendFileSync } = require('node:fs');
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';

function generateUniqueID(firstname, lastname){
  if (!firstname || !lastname){ //check first if null 
    return null;
  }

  //make it lowercase 
  let lowercaseFirstname = firstname.toLowerCase(); 
  let lowercaseLastname = lastname.toLowerCase();
  let firstletter = lowercaseFirstname.charAt(0); //get the first letter 

  const uid = uuidv4().substring(0,8); //get only 8 characters of the string 
  //console.log (uid);

  return firstletter+lowercaseLastname+uid //return the uid 

}


function addAccount(userinfo){
  if (userinfo.length !== 4){ //if something is missing return null 
   // console.log(1)
    return false;
  }

  //console.log(userinfo)
  let [firstname, lastname, email, age] = userinfo
  

  if (!firstname || !lastname || !email){ //check if it is null
   // console.log(2)
    return false;
  }
    
    
  if (!validator.isEmail(email) || age < 18){ //check if email is valid and age is above 18
   // console.log(3)
    return false;
  }

  const uniqueID = generateUniqueID(firstname, lastname); // generate unique id 

  if (!uniqueID){ //if uid is null return false
   // console.log(4)
    return false; 
  }

  const userData = firstname+','+lastname+','+email+','+ age +',' + uniqueID+"\n"; 

  // save to file 
  try {
    appendFileSync('users.txt', userData); 
  //  console.log('The "data to append" was appended to file!');
    return true;
  } catch (err) {
    return false;
  } 

}

export {addAccount, generateUniqueID}

