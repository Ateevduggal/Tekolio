function submitForm(e) {
    e.preventDefault();

    var phone=document.getElementsByName("phone")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var persons_name = document.getElementsByName("name")[0].value;

    const req = {
        "phone": phone,
        "email": email,
        "name": persons_name,
    };

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
        }
      };
      xhttp.open("POST", "https://nfd1nrydm1.execute-api.us-east-1.amazonaws.com/production/contact-form-put-item", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify(req));
}

$(document).ready(function(){
    $("#button1").click(function(){
        if($("#floatingNumber").val() === "pattern"){
            $("#error").hide(3);
            $("#phoneValid").hide(3);
        } else {
            $("#error").show(3);
        }
        if($("#floatingInput").val() === "pattern"){
            $("#error").hide(3);
        } else {
            $("#error").show(3);
        }
        });

    $('#floatingNumber').on('keyup', function () {
        $("#phoneValid").show(3);
    });

    $('#floatingInput').on('keyup', function () {
        $("#phoneValid").hide(3);
    });
})

var myForm = document.getElementById("myForm");
myForm.addEventListener("submit", submitForm);

