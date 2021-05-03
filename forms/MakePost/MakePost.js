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




// add to database call a fuction that connects to both, can connect to the google login form and use as proxy 
// addToDatabase() onclick for function button 

let switchForm = false

btnPost.onclick = function() {
let professor = drpProf.text
let rtg = drpRating.text
let comment = txtaPost.value



  if (!professor || !rtg || !comment) {
    alert("Form incomplete!")
  }    else {

        rtgInt = parseInt(rtg, 10)
        console.log(rtg)
        query = "INSERT INTO submission (text_entity, professor_name, rating) VALUES ('"+comment+"','"+professor+"','"+rtgInt+"')"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dap58338&pass=" + pw + "&database=" + database + "&query=" + query)
       results = JSON.parse(req.responseText)
            if (req.status == 200) {
              if (req.responseText == 500)
                alert('Post Succesful!')
                switchForm = true
                  if (switchForm == true){
                      ChangeForm(PostMade)
                        }
            } else {
                alert('Try again')
           
          }
        }
      }


