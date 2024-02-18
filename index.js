function sendEmail() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  if (name.value == "" || email.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    alert("This form has been successfully submited!");
  }
}

let form = document.getElementById("form-submit");
form.addEventListener("submit", sendEmail);
