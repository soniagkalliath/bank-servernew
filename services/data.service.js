let accountDetails ={
       
    1000:{acno:1000,balance:10000,username:"Ajith",password:"testuser"},
    1001:{acno:1001,balance:20000,username:"Joseph",password:"testuser1"},
    1002:{acno:1002,balance:25000,username:"Anupama",password:"testuser2"}

}
let currentUser;
const register = (acno,username,password)=>{
    console.log("register called")
   // return;
    if(acno in accountDetails){
      
      return {
          status:false,
          statusCode: 422,
          message:"User already exist. Please Log in"
      };
    }
    
    accountDetails[acno]={
      acno,
      balance:0,
      username,
      password
    }
  
  console.log(accountDetails);
    return {
       status: true,
       statusCode: 200,
       message:"Registration successful"
    }
  }

  const login = (accno,pwd) =>{
    let dataset = accountDetails;
    if (accno in dataset) {
        var pswd1 = dataset[accno].password
        //console.log(pswd1);
        if (pswd1 == pwd) {
            currentUser = dataset[accno].username
            //this.saveDetails();

            return {
                status: true,
                statusCode: 200,
                message: "Login successful"
            }
        }

        else {
            return {
                status: false,
                statusCode: 422,
                message: "incorret password"
            }
        }
    }
    else {
        
        return {
            status: false,
            statusCode: 422,
            message: "No user exist with provided Account Number"
        }
    }
}

const deposit = (accno,pwd,amount) => {
    var amt = parseInt(amount);
    let dataset=accountDetails;
    if(accno in dataset){
      var pswd1 = dataset[accno].password
      //console.log(pswd1);
      if(pswd1==pwd){
       dataset[accno].balance+=amt
      //this.saveDetails();
      return {
        status: true,
        statusCode: 200,
        message: "Account has been credited",
        balance:dataset[accno].balance
    }
              }
    
    else{
        return {
            status: false,
            statusCode: 422,
            message: "incorret password"
        }
    
    }
   }
    else{
        return {
            status: false,
            statusCode: 422,
            message: "No user exist with provided Account Number"
        }
     
    }
  
  }

  const withdraw = (accno,pwd,amount) => {
    var amt = parseInt(amount);
    let dataset=accountDetails;
    if(accno in dataset){
      var pswd1 = dataset[accno].password
      //console.log(pswd1);
      if(pswd1==pwd){
       dataset[accno].balance-=amt
      //this.saveDetails();
      return {
        status: true,
        statusCode: 200,
        message: "Account has been debited",
        balance:dataset[accno].balance
    }
              }
    
    else{
        return {
            status: false,
            statusCode: 422,
            message: "incorret password"
        }
    
    }
   }
    else{
        return {
            status: false,
            statusCode: 422,
            message: "No user exist with provided Account Number"
        }
     
    }
  
  }

  module.exports={
      register,
      login,
      deposit,
      withdraw

  }