function next(current, next) {
  document.getElementById(current).classList.remove("active");
  document.getElementById(next).classList.add("active");
}

function validatePassword() {
  const pwd = document.getElementById("password").value;
  const rule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,10}$/;

  if (!rule.test(pwd)) {
    alert("Password must be 8–10 characters with uppercase, lowercase & number");
    return;
  }

  alert("Account approved!");
  next("level3","login");
}
