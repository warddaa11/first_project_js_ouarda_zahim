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