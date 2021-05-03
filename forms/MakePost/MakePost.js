Hamburger2.onclick=function(s){
  if (typeof(s) == "object") {
    return 
}
switch(s){
case "Login":
    ChangeForm(loginPage)
    break
case "Home Search":
    ChangeForm(HomeSearch)
    break
case "Posts":
    ChangeForm(PostMade)
    break
}
}

let professor = drpProf.value
let rtg = drpRating.value
let comment = txtaPost.value

btnPost.onclick=function(){
  ChangeForm(PostMade)
}

// add to database call a fuction that connects to both, can connect to the google login form and use as proxy 
// addToDatabase() onclick for function button 

let userDatabase = [ ]

UserCreate.onshow=function(){
  query = "SELECT  userName FROM user"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dap58338&pass=" + pw + "&database=" + database + "&query=" + query)
  if (req.status == 200) {
  userDatabase = JSON.parse(req.responseText)
  console.log(userDatabase)
} else {
  alert('error')
  }
}

btnCreate.onclick = function() {
  let first_name = iptFirst.value
  let last_name = iptLast.value
  let userName = iptUser.value
  let password = iptPass.value
  let usernameTaken = false 



  if (!first_name || !last_name || !userName || !password) {
    alert("Creation Incomplete!")

  }    else {
  
    
     for (i = 0; i < userDatabase.length; i++) {
        if (userName == userDatabase[i][0]) { //check indexing if fails
        usernameTaken = true 
        alert("This username is taken")
        break 
        } 
      }
        if (usernameTaken == false) {
        query = "INSERT INTO user (userName, password, first_name, last_name) VALUES ('"+userName+"','"+password+"','"+first_name+"','"+last_name+"')"


            req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dap58338&pass=" + pw + "&database=" + database + "&query=" + query)
            if (req.status == 200) {
              if (req.responseText == 500)
                alert("You've signed up! Click Login to continue")
            } else
              alert("There was an issue adding you to the server!")
          } 
        }
      }
   
logBtn.onclick=function(){
    ChangeForm(loginPage)
}


