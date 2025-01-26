// forgot.js
document.getElementById('resetPasswordForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;

  document.getElementById('loading').style.display = 'block'; // Show loading indicator

  auth.sendPasswordResetEmail(email)
    .then(() => {
      document.getElementById('loading').style.display = 'none'; // Hide loading indicator
      alert('Password reset email sent successfully!');
      window.location.href = 'login.html'; // Redirect to the login page
    })
    .catch((error) => {
      document.getElementById('loading').style.display = 'none'; // Hide loading indicator
      console.error('Error during password reset:', error);
      alert('Password reset failed: ' + error.message);
    });
});
