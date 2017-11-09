var select = document.getElementById("qualification");
var options = ["Tenth", "Intermediate", "Degree", "B.Tech", "M.Tech"];
for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
		function validateForm() {
    			var x = document.forms["myForm"]["email"].value;
    			var y = document.forms["myForm"]["password"].value;
    			var z = document.forms["myForm"]["confirm_password"].value;
    			var gender = document.forms["myForm"]["gender"].value;
    			var qualification = document.forms["myForm"]["qualification"].selectedIndex;
                var subscribe = document.forms["myForm"]["subscribe"];
    			var address = document.forms["myForm"]["address"].value;
    			
    			if (x == "") {
       				 alert("Email must be filled out");
       				 //document.getElementById('mail').innerHTML = "Email must be filled out";
    			}
    			else if (y == ""){
    				alert("password must be filled");
    			}
    			else if (z == ""){
    				alert("confirm must be filled");
    			}
    			else if (z !== y){
    				alert("password match be matched");
    			}
    			else if(gender == ""){
    				alert('Gender Must be selected.!');
    			}
    			else if (qualification == 0){
    				alert('choose your qualification');
    			}
                else if(subscribe.checked == false){
                    alert('choose subscribe');
                }
    			else if (address == ""){
    				alert('Enter your Address..!!')
    			}
    			else{
    				console.log("successfully saved");
    				document.forms["myForm"].reset();
    			}

}