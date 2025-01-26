// registration.js
document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const dobDay = document.getElementById('dobDay').value;
  const dobMonth = document.getElementById('dobMonth').value;
  const dobYear = document.getElementById('dobYear').value;
  const sex = document.getElementById('sex').value;
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (!validatePhone(phone)) {
    alert("Invalid phone number. Please enter a 10-digit phone number.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Invalid email address.");
    return;
  }

  if (!validateDOB(dobDay, dobMonth, dobYear)) {
    alert("Invalid date of birth.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return;
  }

  document.getElementById('loading').style.display = 'block'; // Show loading indicator

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return db.collection('users').doc(user.uid).set({
        phone: phone,
        email: email,
        dob: { day: dobDay, month: dobMonth, year: dobYear },
        sex: sex,
        weight: weight,
        height: height,
      });
    })
    .then(() => {
      document.getElementById('loading').style.display = 'none'; // Hide loading indicator
      alert('Registration Successful!');
      window.location.href = 'login.html';
    })
    .catch((error) => {
      document.getElementById('loading').style.display = 'none'; // Hide loading indicator
      console.error('Error during registration:', error);
      alert('Registration failed: ' + error.message);
    });
});

function validatePhone(phone) {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateDOB(day, month, year) {
  const dob = new Date(`${year}-${month}-${day}`);
  const today = new Date();
  return dob < today;
}
