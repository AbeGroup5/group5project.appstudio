submitBtn.onclick = function() {
  let first_name = iptFirst.value
  let last_name = iptLast.value
  let userName = iptUser.value
  let password = iptPass.value

  if (!first_name || !last_name || !userName || !password) {
    alert("Fill out all columns")

  } else {
    for (i = 0; i < userName.length; i++) {
     
      if (foundEmail == false) { //need to update foundEmail
        console.log('No user with this email') // use alert?
        //Do same thing with user now
        for (i = 0; i < userNameData.length; i++) {
        if (userName == userNameData[i][0]) { //check indexing if fails
        foundUser = true // need to update found user
        lblAlertSign.value = "There is a user with this username already" // need to update label
        break // if foundEmail the item in the database jump out of loop
        } 
      }
        if (foundUser == false) {
        console.log('No user with this email') //alert?
          if (password != repeatPass) // do we have repeat password?
            lblAlertSign.value = "The two passwords don't match" // update label
          if (password == repeatPass) {
            query = "INSERT INTO user (userName, password, first_name, first_name) VALUES ('" + userName + "','" + password + "',  '" + first_name + "','" + last_name + "')"


            req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dap58338&pass=" + pw + "&database=" + database + "&query=" + query)
            if (req.status == 200) {
              if (req.responseText == 500)
                lblAlertSign.value = "You have successfully sign up!" // update label
            } else
              lblAlertSign.value = "There was a problem with adding the user to the database." // update label
          } else
            lblAlertSign.value = "Error: " + req.status // update label
        }
      }
    }
    }