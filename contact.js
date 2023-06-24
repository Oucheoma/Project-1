function send() {
        let first_name = document.getElementById("first").value;
        let last_name = document.getElementById("last").value;
        let email_address = document.getElementById("email").value;
        if (first_name.length === 0 && last_name.length === 0) {
          alert("Fill the required boxes");
        } else {
          alert("Hello, " + first_name + " " + last_name);
        }
      
}