const logButton = document.getElementById('log-button');
const waterHistory = document.getElementById('water-history');
const waterIntakeInput = document.getElementById('water-intake');
const dailyGoalInput = document.getElementById('daily-goal');
const goalMessage = document.getElementById('goal-message');

let dailyGoal = 2000; // Default daily goal in ml
let totalWaterIntake = 0;

// Automatic reminders every hour
setInterval(() => {
    alert('Time to drink water! Stay hydrated!');
}, 3600000); // 1 hour in milliseconds

logButton.addEventListener('click', function() {
    const waterIntake = parseInt(waterIntakeInput.value);
    if (!isNaN(waterIntake)) {
        totalWaterIntake += waterIntake;

        // Log the water intake
        const listItem = document.createElement('li');
        listItem.textContent = `${waterIntake} ml`;
        waterHistory.appendChild(listItem);

        // Clear the input field
        waterIntakeInput.value = '';

        // Update goal message
        goalMessage.textContent = `Total water intake today: ${totalWaterIntake} ml out of ${dailyGoal} ml`;
    }
});

document.getElementById('set-goal').addEventListener('click', function() {
    const goalInput = parseInt(dailyGoalInput.value);
    if (!isNaN(goalInput)) {
        dailyGoal = goalInput;
        goalMessage.textContent = `Your daily goal has been set to: ${dailyGoal} ml`;
        dailyGoalInput.value = '';
    }
});
