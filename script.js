document.getElementById('start-button').addEventListener('click', function() {
    const startTimeInput = document.getElementById('start-time').value;
    const endTimeInput = document.getElementById('end-time').value;

    if (!startTimeInput || !endTimeInput) {
        alert("Please enter both start and end times.");
        return;
    }

    const startTime = new Date();
    const [startHours, startMinutes] = startTimeInput.split(':');
    startTime.setHours(startHours, startMinutes, 0, 0);

    const endTime = new Date();
    const [endHours, endMinutes] = endTimeInput.split(':');
    endTime.setHours(endHours, endMinutes, 0, 0);

    if (endTime <= startTime) {
        alert("End time must be after start time.");
        return;
    }

    // Start the countdown
    startCountdown(startTime, endTime);
});

function startCountdown(startTime, endTime) {
    const timerInterval = setInterval(() => {
        const now = new Date();
        const remainingTime = endTime - now;

        // Calculate hours, minutes, and seconds
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 100