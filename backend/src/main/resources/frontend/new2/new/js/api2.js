$(document).ready(function() {
	$("#submit-btn").click(function(){

var usermail= $("#user-email").val();
var pass= $.trim($("#user-password").val());
var fullname= $.trim($("#fullname").val());
var datebirth= $.trim($("#dateofbirth").val());
var gender= $.trim($("#gender").val());
var city= $.trim($("#city").val());

window.localStorage.setItem("usermail", usermail);
window.localStorage.setItem("pass", pass);
window.localStorage.setItem("fullname", fullname);
window.localStorage.setItem("datebirth", datebirth);
window.localStorage.setItem("gender", gender);
window.localStorage.setItem("city", city);

var val = window.localStorage.getItem("usermail");
var val2 = window.localStorage.getItem("pass");
var val3 = window.localStorage.getItem("fullname");
var val4 = window.localStorage.getItem("datebirth");
var val5 = window.localStorage.getItem("gender");
var val6 = window.localStorage.getItem("city");
 
console.log(val)
console.log(val2)
console.log(val3)
console.log(val4)
console.log(val5)
console.log(val6)
	});
});