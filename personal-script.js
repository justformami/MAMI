document.addEventListener('DOMContentLoaded', () => {
    const personalInfoForm = document.getElementById('personalInfoForm');
    const noteForm = document.getElementById('noteForm');
    const reminderForm = document.getElementById('reminderForm');
    const notesContainer = document.getElementById('notesContainer');
    const reminderList = document.getElementById('reminderList');

    // Handle personal information form submission
    personalInfoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const bio = document.getElementById('bio').value;

        alert(`Information Saved:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nBio: ${bio}`);
        personalInfoForm.reset();
    });

    // Handle note form submission
    noteForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const noteInput = document.getElementById('noteInput');
        const note = noteInput.value;
        const noteDiv = document.createElement('div');
        noteDiv.textContent = note;
        notesContainer.appendChild(noteDiv);
        noteInput.value = '';
    });

    // Handle reminder form submission
    reminderForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const reminderInput = document.getElementById('reminderInput');
        const reminder = reminderInput.value;
        const reminderItem = document.createElement('li');
        reminderItem.textContent = reminder;
        reminderList.appendChild(reminderItem);
        reminderInput.value = '';
    });
});
