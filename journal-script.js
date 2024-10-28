document.addEventListener('DOMContentLoaded', () => {
    const journalForm = document.getElementById('journalForm');
    const entriesContainer = document.getElementById('entriesContainer');

    // Handle journal entry form submission
    journalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const entryDate = document.getElementById('entryDate').value;
        const entryContent = document.getElementById('entryContent').value;

        const entryDiv = document.createElement('div');
        entryDiv.innerHTML = `<strong>${entryDate}</strong><p>${entryContent}</p>`;
        entriesContainer.appendChild(entryDiv);

        journalForm.reset();
    });
});
