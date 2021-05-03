let req = {}
let query = ''
let results = []
let pw = "123ABC" 
let netId = "dap58338"
let database = "375groupa5"
let allUsers =[]


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
        console.log('No user with this username') //alert? DELETE
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


