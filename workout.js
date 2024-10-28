const workoutForm = document.getElementById('workout-form');
const historyList = document.getElementById('history-list');
const motivationMessage = document.getElementById('motivation-message');

const motivationalQuotes = [
    "Keep going! Your effort will pay off!",
    "Every workout counts, stay strong!",
    "Push yourself, because no one else will do it for you!",
    "Success is what happens after you have survived all your mistakes.",
    "Don’t stop when it hurts; stop when you’re done!"
];

workoutForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const exercise = document.getElementById('exercise').value;
    const duration = document.getElementById('duration').value;

    // Log the workout
    const listItem = document.createElement('li');
    listItem.textContent = `${exercise} - ${duration} minutes`;
    historyList.appendChild(listItem);

    // Show a motivational message
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    motivationMessage.textContent = motivationalQuotes[randomIndex];

    // Clear form
    workoutForm.reset();
});
