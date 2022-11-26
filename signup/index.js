var user = [];


  
  const notifications = [
    "Email chưa được đăng ký"
  ]
  
  function getId (id){
    user 
    return document.getElementById(id);
    }
  function addUser(){
    var userMail = document.getElementById('emailInput').value;
    var userPass = doucment.getElementById('passwordInput').value;
    user.push(userMail);
    user.push(userPass);
    console.log(user);
    return false;
  }
  var newUser = localStorage.getItem("newUser");
  if(newUser === "true"){
    console.log(JSON.part((localStorage.getItem("account"))))
    getId("formLogin").classList.add("d-none");
    getId("body").innerHTML = '<div class = "alert alert-info" role="alert"> Sign UP </div>'
  }

  function handleSignup(event){ 
    event.preventDefault();

    var password = getId("passwordInput").value;
    var email = document.getElementById("emailInput").value;
    
    var user = { 
      email, 
      password
    }
    if (user){
      localStorage.setItem("account",JSON.stringify(user));
      document.getElementById("btnLogin").addEventListener("click",handleSignup)
    }
    else if (email == "" || password ==""){
      notification.classList.remove("d-none");
      notification.className = 'alert alert-danger';
      notification.innerText = "Please fill the required fields";
      return false;
    }
    else{
      notification.classList.remove("d-none");
      notification.className = 'alert alert-success';
      notification.innerText = 'Login Successful';

      localStorage.setItem("newUser",true);
      return true;
    }
   

  }


  