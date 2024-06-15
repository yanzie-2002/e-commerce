var btn =document.getElementById('btn');
btn.addEventListener('click', function(){

    var UN=document.getElementById('user').value;
    var PW=document.getElementById('pass').value;

    

    if (user ==""){         
    alert("Username is required");
    }
    else if(pass == ""){
        alert("Password is required");
    }
  
    else if (user == "cherwin" && pass == "loay"){
       alert("access granted");
    
    
    localStorage.setItem("one",user);
    window.location.href="cart.html";
    }

    else{
        alert("Access denied");
    }
  
    
});