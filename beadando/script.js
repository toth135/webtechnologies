var attempt = 3;

function validate() {
    var username = document.getElementById("uname").value;
    var password = document.getElementById("psw").value;

    fetch("./users.json").then(function(res) {
        // res instanceof Response == true.
        if (res.ok) {
            res.json().then(function(data) {
                //console.log(data);
                var success = false;
                for (var i = 0; i < data.length; i++) {
                    
                    if (data[i].username == username && data[i].password == password) {
                        alert("Sikeres bejelentkezés");
                        window.location = "fooldal.html";
                        success = true;
                        break;
                    } 
                }
                if (success == false) {
                    attempt--;
                        alert("You have left " + attempt + " attempt;");
                        if (attempt == 0) {
                            document.getElementById("uname").disabled = true;
                            document.getElementById("psw").disabled = true;
                            document.getElementById("submit").disabled = true;
                            return false;
                        }
                }
            });
        } else {
            console.log("Looks like the response wasn't perfect, got status", res.status);
        }
    }, function(e) {
        console.log("Fetch failed!", e);
    });

}