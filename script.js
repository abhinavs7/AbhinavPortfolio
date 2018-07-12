
// Initialize Firebase

  var config = {
    apiKey: "AIzaSyAWjDL0-rTE_LRAkZ3lUiuqcB1sYTMz85U",
    authDomain: "portfolio-abhinav.firebaseapp.com",
    databaseURL: "https://portfolio-abhinav.firebaseio.com",
    projectId: "portfolio-abhinav",
    storageBucket: "",
    messagingSenderId: "315855754982"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$("#submit").click(function (event) {
    event.preventDefault();
    name = $("#FormControlInput1").val().trim();
    email = $("#FormControlInput2").val().trim();
    message = $("#FormControlTextarea1").val().trim();
    if(name.length>0 && email.length>0 && message.length>0){
        database.ref("PortfolioMessages").push({
            name: name,
            email: email,
            message: message
        });
        $("#myModal").modal('show');
    }
    

    $("#FormControlInput1").val("");
    $("#FormControlInput2").val("");
    $("#FormControlTextarea1").val("");
});
