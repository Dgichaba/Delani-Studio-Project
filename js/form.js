// // function to send email and return a message
// function sendMessage(){
//   var name =$("#name").val();
//   var email=$("#email").val();
//   var message=$("#message").val();
//   if(name===""){ // Validate Name Input Field
//     $("#error").html("Please enter Your Name");
//   }
//   else if (email===""){ // Validate Email
//     $("#error").html("Please enter Your Email");
//   }
//   else if (message===""){
//     $("#error").html("Please enter Your Message");
//   }
//   else{
//    $("#response").html("Thank you " +name+"! Your message has been received. We shall get back to you shorty");
//   }
//    event.preventDefault();       
// }

$("form").submit(function() {
  var name= $("#name").val();
  alert("We've received your message "+name+". Thank you for contacting us");
  event.preventDefault();
});