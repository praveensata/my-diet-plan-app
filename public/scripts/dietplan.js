// Function to fetch and parse the CSV file
function loadDietPlans() {
  // Get user input values
  const user = {
    age_group: document.getElementById('age-group').value,
    gender: document.getElementById('gender').value,
    activity_level: document.getElementById('activity-level').value,
    goal: document.getElementById('goal').value,
    diet_type: document.getElementById('diet-type').value
  };

  // Fetch the CSV file
  fetch('data/dietplans.csv')
    .then(response => response.text()) // Get CSV content as text
    .then(data => {
      // Parse the CSV text using PapaParse
      Papa.parse(data, {
        header: true,    // Treat the first row as the header
        dynamicTyping: true,  // Automatically convert numbers
        complete: function (results) {
          // Handle the parsed data
          console.log('Parsed Diet Plans:', results.data);
          // Now you can use the diet plans in your application logic
          generateDietPlan(results.data, user); // Pass user info to function
        }
      });
    })
    .catch(error => {
      console.error('Error loading CSV:', error);
    });
}

// Function to generate a diet plan based on user input
function generateDietPlan(dietPlans, user) {
  const filteredPlans = dietPlans.filter(plan =>
    plan.age_group === user.age_group &&
    plan.gender === user.gender &&
    plan.activity_level === user.activity_level &&
    plan.goal === user.goal &&
    plan.diet_type === user.diet_type
  );

  // Display the diet plan or handle it further
  if (filteredPlans.length > 0) {
    const plan = filteredPlans[0]; // Select the first matching plan
    displayDietPlan(plan); // Call function to show the plan in the UI
  } else {
    document.getElementById('diet-plan').innerHTML = 'No diet plan found for the selected criteria.';
  }
}

// Function to display the diet plan on the page
function displayDietPlan(plan) {
  // Display the diet plan in a user-friendly format
  document.getElementById('diet-plan').innerHTML = `
      <h2>Your Diet Plan</h2>
      <h3>Breakfast: ${plan.breakfast}</h3>
      <h3>Lunch: ${plan.lunch}</h3>
      <h3>Dinner: ${plan.dinner}</h3>
      <h3>Total Calories: ${plan.calories}</h3>
  `;
}
// Function to save the selected diet plan to Firestore
function saveDietPlanToFirestore(plan, user) {
  console.log('Saving diet plan:', plan);
  console.log('For user:', user);

  // Reference to Firestore collection where diet plans are stored
  const dietPlansRef = firestore.collection('diet_plans').doc(user.age_group + "_" + user.goal); // You can use any unique key

  // Store the diet plan data
  dietPlansRef.set({
    age_group: user.age_group,
    gender: user.gender,
    activity_level: user.activity_level,
    goal: user.goal,
    diet_type: user.diet_type,
    meals: {
      breakfast: plan.breakfast,
      lunch: plan.lunch,
      dinner: plan.dinner
    },
    calories: plan.calories,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  })
    .then(() => {
      console.log('Diet plan successfully saved to Firestore!');
    })
    .catch((error) => {
      console.error('Error saving diet plan to Firestore:', error);
    });
}
