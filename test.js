import {addAccount, generateUniqueID} from './index.js';

// VALID GENERATE UNIQUE ID
console.log(generateUniqueID("Athalia", "Marfil"))

//INVALID
console.log(generateUniqueID("", "Marfil")) //must return null

//=================//


//VALID ADD ACCOUNT 
console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 58]));
console.log(addAccount(["Athalia", "Marfil", "acmarfil@up.edu.ph", 20]));

//INVALID
console.log(addAccount(["", "Turing", "aturing@w3c.com", 58]));
console.log(addAccount(["Athalia", "Lexine", "aturing@w3c.com"]));
console.log(addAccount(["Athalia", "Marfil", "HELLO", 20]));
console.log(addAccount(["Athalia", "Marfil", "HELLO", 10]));
console.log(addAccount(["Athalia", "", "HELLO", 10]));