let user = [
    {
        name: "ouarda ouarda",
        email: "ouardaouarda@gmail.com",
        password: "12345678@",
        balance: 1000,
        loan : 0,
        investement:[],
        history: []
}
];

// let user = {
//         name: "ouarda ouarda",
//         email: "ouardaouarda@gmail.com",
//         password: "1234",
//         balance: 1000,
//         loan : 0,
//         investement:[],
//         history: []
// };


while (true) {
    let choice=prompt("1- Sign Up \n 2- Login \n 3- Change Password")
    
    
    if (choice === "1") {
        signUp();
       

    }else if (choice === "2") {
        let loginUser = login();
        if (loginUser) {
            bankSysytem(loginUser) 
        }
        
    }else if (choice === "3") {
       changePassword()

    }
    if (choice === "exit") {
        break;
        
    }
  
}

// !-----User-------
function signUp() {
    // ========Name=============================
    let nom = prompt("Enter Full Name").trim();
    if (nom.length < 5) {
        alert("Short name")
        return;
    }
    // ==========Email======================
    let email = prompt("Enter Email").trim();
    email = email.toLowerCase();
    if (email.includes(" ")) {
        alert("Remove Space");
        return;
    }
    if (email.length < 10) {
        alert("Email short")
        return;
    }
    let exist = user.find( u => u.email === email)
    if (exist) {
        alert("Email Exist")
    }
    if (!email.includes("@")) {
        alert("Email must contain @")
    }

    // ==============Age====================
    let age = prompt("Enter Age").trim();
    if (age.includes(" ")) {
        alert("Remove Space");
        return;
    }
     if (age.length === 0 || age.length >= 3) {
        alert("Invalid Age")
        return;
    }
    if (isNaN(age)) {
        alert("Age must cotain Numbers");
        return;
    }
    // ============Password=================
    let password = prompt("Enter Password").trim();
    if (password.includes(" ")) {
        alert("Remove Space");
        return;
    }

    if (!password.includes("@") &&
        !password.includes("#") &&
        !password.includes("-") &&
        !password.includes("+") &&
        !password.includes("*") &&
        !password.includes("/")) {
        alert("Add one Special Caracter");
        return;
    }
     if (password.length < 7) {
        alert("Password short")
        return;
    }
    let confirm = prompt ("Confirm");

    
    
    if (confirm === password) {
    user.push({
        name: nom,
        email: email,
        age: age,
        password: password,
        balance: 0,
        loan: 0,
        investement:[],
        history:[],

    });
    console.log("Account Created");
    
    } else {
    console.log("Incorrect Password");
    return;
    
   }
}
console.log(user);

// !------Login--------------------

function login(){
    let em = prompt("Enter Email");
    
    let usr = user.find( user => 
        user.email === em );
    if (!usr) {
        alert("eamail not found");
        return;
    } 
    let pas = prompt("Enter Password");
    if ( usr.password === pas) {
        alert("Connecte");
        return usr;
    }
    else{
        alert("wrong pass")
    }
}

// !--------Change Password--------
function changePassword(){
  let email = prompt ("Enter Your Email");
  let emailUser = user.find(u => u.email === email);
  if (!emailUser) {
    alert("Email not Found");
    return;
  } else {
    let newPassword = prompt("Enter Your New Password");
    newPassword = user.password;
    alert("Your Password Changed")
  }
}

// !TODO--------------------------------
function bankSysytem(userAccount) {
    while (true) {
    let choice=prompt("Banc Menu: \n 1- Check Balance \n 2- Withdraw \n 3- Deposit \n 4- loan \n 5- Investissemnt \n 6- History \n 7- Logout")
    
    
    if (choice === "1") {
        alert("You Balance: " + userAccount.balance);
       

    }else if (choice === "2") {
         withdraw(userAccount);
        
    }
    else if (choice === "3") {
        deposit(userAccount);
       

    }else if (choice === "4") {
       loan(userAccount);
    
    
    }else if (choice === "5") {
        investement(userAccount)
    }
    else if (choice === "6") {
        displayHistory(userAccount);
    }
    else if (choice === "7" || choice === "exit") {
        alert("Logged out");
       break;
    }
    
}
}
// !----------Withdraw---------------
function withdraw(userAccount) {
    let montant =  Number(prompt("chhal bghiti ts7ab ?"));
    if (montant > 0 && montant <= userAccount.balance) {
        userAccount.balance = userAccount.balance -montant;
        alert("ob9alik :" +userAccount.balance)
        userAccount.history.push("withdraw:" +montant)
        
    }
    else{
        alert("Montant invalid")
    }
}



// !---------------Deposit--------------
function deposit(userAccount) {
    let montant = Number(prompt("chhal bghiti t7at dlflos"));
    if (montant > 0 && montant <= 1000) {
        userAccount.balance += montant;
        userAccount.history.push("deposit:" + montant)
        console.log(userAccount.history);
        alert("Success deposit")
        alert("Blance: " + montant)
        
    }
    else{
        alert("Montant invalid")
    }

}

// !------------Loan--------------------
function loan(userAccount) {
    let credit = userAccount.balance *20 / 100;
    mablagh = Number(prompt("chhal bghiti credit?"));
    if (mablagh > 0 && mablagh <= credit) {
        userAccount.balance += mablagh;
        userAccount.loan = mablagh;
        userAccount.history.push("loan: " + mablagh);
        alert("credit: " + userAccount.balance)
        
    } else {
        alert("credit mamno3")
    }
    
}
console.log(user);

// !--------------Investment---------------
function investement(userAccount) {
    let invst = Number(prompt("chhal bghiti t investi?"));
    userAccount.balance -= invst;
    userAccount.investement.push(invst);
    userAccount.history.push("Investissement: " + invst);
    alert("Successful invst: " + invst)
}