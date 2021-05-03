SignInButton.onclick = function() {
    userNameID = userNameInput.value
    let password_id = PasswordInput.value
    
    query = `SELECT user_id FROM user WHERE userName = '${userNameID}' AND password = '${password_id}'`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dap58338&pass=" + pw + "&database=" + database + "&query=" + query)
    logResults = JSON.parse(req.responseText)
       
      
        
    let found = False
    if (logResults[0] != '' && logResults.length == 1)
        found = True
        
    if (found == True){
        console.log(`Hello there ${userNameID}!`)
        ChangeForm(HomeSearch)
    } 
    else {
        console.log("Incorrect Username or Password!")
      
    }
}
signUp.onclick=function(){
    ChangeForm(UserCreate)
}


