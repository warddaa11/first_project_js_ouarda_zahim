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
