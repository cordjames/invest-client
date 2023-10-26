// for displaying the password
export default function togglePassword(passwordAgain) {
  //  if there is an argument and it as an element
  if (passwordAgain && passwordAgain?.current) {
    var passwordInput = passwordAgain.current;
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      return true;
    } else {
      passwordInput.type = "password";
      return false;
    }
  } else {
    return false;
  }
}
