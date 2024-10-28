document.getElementById('composition-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2); // Calculate and round to two decimal places

    // Display results
    document.getElementById('weight-output').textContent = `Weight: ${weight} kg`;
    document.getElementById('height-output').textContent = `Height: ${height * 100} cm`; // Convert back to cm for display
    document.getElementById('bmi-output').textContent = `BMI: ${bmi}`;
    document.getElementById('composition-card').style.display = 'block'; // Show the results card
});
