Hamburger1.onclick=function(s){
if (typeof(s) == "object") {
    return
}
switch(s) {
case "Login":
    ChangeForm(loginPage)
    break
case "Make Post":
    ChangeForm(MakePost)
    break
case "Posts":
    ChangeForm(PostMade)
    break
}
}

let univ = drpUniversity.value
let dep = drpDepartment.value
let classNum = iptClassNumber.value
let prof = iptLastName.value


btnSubmit.onclick=function(){
    ChangeForm(MakePost)
  //connect to sql database with parameters
  //take us to post page, nit yet created
}
