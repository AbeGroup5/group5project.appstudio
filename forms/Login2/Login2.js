let req = {}
let query = ''
let results = []
let pw = "123ABC" 
let netId = "dap58338"
let database = "375groupa5"
let allUsers =[]

btnLogin.onclick = function() {
    user_id = iptUsername.value
    let password_id = iptPassword.value

    query = `SELECT user_id FROM user WHERE username = '${user_id}' AND password = '${password_id}'`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dap58338&pass=" + pw + "&database=" + database + "&query=" + query)
    results = JSON.parse(req.responseText)
        
    let found = False
    if (results[0] != '' && results.length == 1)
        found = True
        
    if (found == True){
        console.log(`Welcome ${first_name}!`)
        ChangeForm(HomeSearch)
    } 
    else {
        console.log("Your username or password is incorrect or create an account")
        currentUser = ''
    }
    
}


/*

//check if user exists
let userNameInput = ""

//btnLogin.onclick=function(){
//  userNameInput = inptLogin.value
//  ipPassword = inpt.Login.value
//  query = "Select * From user when "
//  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dap58338&pass=" + pw + "&database=" + database + "&query=" + query)

// password in array that are organzied in the same order
// test arrays
let userID = ['rjm13600', 'rjm12500', 'rjm13400']
let password = ['hi', 'hello', 'hey']
let loginPass = false
//test propmts
let user = iptUsername.value
let pw = iptPassword.value
//user = user.trim()
//pw = pw.trim()

btnLogin.onclick=function(){
  // login button on submit
   userNameInput = inptLogin.value
  ipPassword = inpt.Login.value
  query = "Select * From user when "
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dap58338&pass=" + pw + "&database=" + database + "&query=" + query)

for (i = 0; i < userID.length; i++) {
  if (user == userID[i] && pw == password[i]) {
  loginPass = true;
  break;
} 
  }
  
// Test to see if login is succesful
if (loginPass == true) {
  alert('Login Succesful')
} else { 
  alert('Login not Succesful')
}

}
*/