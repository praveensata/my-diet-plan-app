// login.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert(`Welcome back, ${user.email}!`);
      window.location.href = 'dietplan.html'; // Redirect to diet plan page
    })
    .catch((error) => {
      console.error('Error during login:', error);
      alert('Login failed: ' + error.message);
    });
});

document.getElementById('showPassword').addEventListener('change', function () {
  const passwordField = document.getElementById('password');
  passwordField.type = this.checked ? 'text' : 'password';
});
