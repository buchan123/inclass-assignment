function openForm() {
  let obj = document.getElementById("login");
  if (obj.style.display === "none") {
    obj.style.display = "inline-block";
  } else {
    obj.style.display = "none";
  }
}

function openQuiz() {
  let obj = document.getElementById("quiz");
  if (obj.style.display === "none") {
    obj.style.display = "inline-block";
  } else {
    obj.style.display = "none";
  }
}

function showPassword() {
  let x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function isUpperCase(str) {
  return str == str.toUpperCase() && str != str.toLowerCase();
}

function validate() {
  let x = document.forms["form-login"]["username"].value;
  let y = document.forms["form-login"]["password"].value;

  let x1 = document.getElementById("alert-username");
  x1.innerHTML = "";
  let x2 = document.getElementById("alert-password");
  x2.innerHTML = "";

  let flag = 0;
  for (let i = 0; i < x.length; i++) {
    if (x.charAt(i) == "@") {
      flag = 1;
      var ans = document.getElementById("alert-username");
      ans.innerHTML = "<div style='color:green;'>Valid Username!!</div>";
      break;
    }
  }

  if (flag == 0) {
    var ans1 = document.getElementById("alert-username");
    ans1.innerHTML = "<div style='color:red;'>Invalid Username!!</div>";
  } else {
    var special = false;
    var caps = false;
    if (y.length < 8) {
      var ans2 = document.getElementById("alert-password");
      ans2.innerHTML = "<div style='color:red;'>Invalid Password!!</div>";
    } else {
      for (var i = 0; i < y.length; i++) {
        if (y.charAt(i) == "#" || y.charAt(i) == "$" || y.charAt(i) == "%") {
          special = true;
        } else if (isUpperCase(y.charAt(i))) {
          caps = true;
        }
      }

      if (!caps && !special) {
        var ans2 = document.getElementById("alert-password");
        ans2.innerHTML = "<div style='color:red;'>Invalid Password!!</div>";
      } else {
        var ans2 = document.getElementById("alert-password");
        ans2.innerHTML = "<div style='color:green;'>Valid Password!!</div>";
      }
    }
  }
}
