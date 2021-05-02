/* import { lpgs } from "./lpjs.js";

loglpjs();
 
 fields.loglpjs.html("<meta name="google-signin-client_id" content="935629036102-c5hqfcuhk5a2c8ujkviarnc64431njmk.apps.googleusercontent.com">);
 
 function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse(AIzaSyCSV7XUKItR7LX455m6QEUkgqz2Fc6ycGk).id_token;
    console.log("ID Token: " + id_token);
  }
  
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
  
  */