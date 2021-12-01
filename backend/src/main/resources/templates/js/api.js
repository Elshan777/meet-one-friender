$(document).ready(function() {
            var url = "#.java"; //this is for API URL
            
            $("#submit-btn").click(function(){
				
				var nama2= $('#user-email').val().length;
				var pass2= $("#user-password").val().length;
				if (nama2 == 0) {				
				$(".pesan-nama").css('display','block');
				return false;
			}else if (pass2 == 0) {
				$(".pesan-pass").css('display','block');
				return false;
			} else {
                var usermail= $.trim($("#user-email").val());
                var pass= $.trim($("#user-password").val());
				
                $("#status").text("Authenticating...");
                var loginString ="usermail="+usermail+"&pass="+pass+"&login=";
                $.ajax({
                    type: "POST",crossDomain: true, cache: false,
                    url: url,
                    data: loginString,
                    success: function(data){
                        if(data == "success") {
                            $("#status").text("Login Success..!");
                            localStorage.loginstatus = "true";
							window.localStorage.setItem("loggedIn", 1);
							window.localStorage.setItem("usermail", usermail);
                            window.location.href = "chat.html"; //this is for page after login
                        }
                        else if(data == "error")
                        {
                            $("#status").text("Email or Password Wrong..!");
                        }
                    }
                });
			}
            });

            $("#submit-btn").click(function(){
                var usermail= $.trim($("#user-email").val());
                var pass= $.trim($("#user-password").val());
				var fullname= $.trim($("#fullname").val());
				var datebirth= $.trim($("#dateofbirth").val());
				var gender= $.trim($("#gender").val());
				var city= $.trim($("#city").val());

                $("#status").text("Creating New Account...");
                var dataString="useremail="+useremail+"&pass="+pass+"&fullname="+fullname+"&datebirth="+datebirth+"&gender="+gender+"&city="+city+"&register=";
                $.ajax({
                    type: "POST",crossDomain: true, cache: false,
                    url: url,
                    data: dataString,
                    success: function(data){
                        if(data == "success")
                            $("#status").text("Registered success");
                        else if( data == "exist")
                            $("#status").text("Account is already there");
                        else if(data == "error")
                            $("#status").text("Register Failed");
                    }
                });
            });
        });