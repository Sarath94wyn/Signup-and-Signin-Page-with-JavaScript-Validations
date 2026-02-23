
function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const city = document.getElementById("city").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (!/^[A-Za-z ]+$/.test(fullname)) {
      alert("Enter valid full name");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Enter valid email");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Phone number must be 10 digits");
      return;
    }

    if (!/^[A-Za-z]+$/.test(city)) {
      alert("City must contain only alphabets");
      return;
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password)) {
      alert("Password must be 8+ characters with letters & numbers");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Signup successful!");
    window.location.href = "index.html";
  });
}

const signinForm = document.getElementById("signinForm");

if (signinForm) {
  signinForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = loginEmail.value.trim();
    let password = loginPassword.value;

    if (
      email === localStorage.getItem("userEmail") &&
      password === localStorage.getItem("userPassword")
    ) {
      window.location.href = "landingPage.html";
    } else {
      alert("Invalid credentials");
    }
  });
}

function logout() {
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userPassword");

  alert("You have been logged out successfully!");

  window.location.href = "index.html";
}