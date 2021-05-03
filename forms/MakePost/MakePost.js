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

let proffessor = drpProf.value
let rtg = drpRating.value
let comment = txtaPost.value

btnPost.onclick=function(){
  ChangeForm(PostMade)
}

// add to database call a fuction that connects to both, can connect to the google login form and use as proxy 
// addToDatabase() onclick for function button 