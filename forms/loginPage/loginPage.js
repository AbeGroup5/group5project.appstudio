let req = {}
let query = ''
let results = []
let pw = "123ABC" 
let netId = "dap58338"
let database = "375groupa5"
let allUsers =[]

SignInButton.onclick = function() {
    userNameID = userNameInput.value
    let password_id = PasswordInput.value

    query = `SELECT user_id FROM user WHERE username = '${userNameID}' AND password = '${password_id}'`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dap58338&pass=" + pw + "&database=" + database + "&query=" + query)
      let  logResults = JSON.parse(req.responseText)
      let 
      
        
    let found = False
    if ( != '' && results.length == 1)
        found = True
        
    if (found == True){
        console.log(`Welcome ${first_name}!`)
        ChangeForm(HomeSearch)
    } 
    else {
        console.log("Your username or password is incorrect or create an account")
      
    }
}



/* let req = {}
let query = ''
let results = []
let pw = "123ABC" 
let netId = "dap58338"
let database = "375groupa5"
let allUsers =[]

//check if user exists
let userNameInput = ""

SubmitButton.onclick=function(){
   userNameInput = inptLogin.value
  ipPassword = inpt.Login.value
  query = "Select * From user when "
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dap58338&pass=" + pw + "&database=" + database + "&query=" + query)

let found = false
if (results[0] != '' && results.length == 1)
  found = true 
  
  if (found == true) {
    console.log('Welcome ${userNameInput'}
    ChangeForm(HomeSearch)
    
  } else {
      console.log("Your username or password is incorrect")
      userNameInput = '' 

  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(`The results are /n ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
}   if (results.length == 0)
      lblMessage1.textContent = "Your name has been added to the database."
    else {
      lblMessage1.textContent

check password
let passwordInput = ""
/if(req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(`The results are /n ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
}   if (results.length == 0)
      lblMessage1.textContent = "Incorrect Password"
    else {
      changeform(userPage)

PasswordForgot.onclick=function(){
  var exitBtn = document.getElementById("exitBtn");
  exitBtn.addEventListener("click", password());

  function password() {
    var realPW = "<?php echo $pw ?>";
    var pword = prompt("Please enter your password:");
    if (realPW == pword) {
      self.location = "LoginBox.php"
    }
}
*/
