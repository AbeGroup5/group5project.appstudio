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
case "Map":
    ChangeForm(MAPAPI)
    break
}
}

let professor = drpProf.value
let rtg = drpRating.value
let comment = txtaPost.value

// add to database call a fuction that connects to both, can connect to the google login form and use as proxy 
// addToDatabase() onclick for function button 
/*
let postDatabase = [ ]

MakePost.onshow=function(){
  query = "SELECT professor_name FROM submission"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dap58338&pass=" + pw + "&database=" + database + "&query=" + query)
  if (req.status == 200) {
  userDatabase = JSON.parse(req.responseText)
  console.log(postDatabase)
} else {
  alert('error')
  }
}
*/
btnPost.onclick = function() {


/*
  if (!professor || !rtg || !comment) {
    alert("Form incomplete!")

  }    else {
*/
        query = "INSERT INTO submission (text_entity, professor_name, rating) VALUES ('"+comment+"','"+professor+"','"+rtg+"')"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dap58338&pass=" + pw + "&database=" + database + "&query=" + query)
        //results = JSON.parse(req.responseText)
            if (req.status == 200) {
              if (req.responseText == 500)
                alert('Post Succesful!')
            } else {
                alert('Try again')
           
          }
        }
      

/*
btnPost.onclick=function(){
  ChangeForm(PostMade)
}
*/
