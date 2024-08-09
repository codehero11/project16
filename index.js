// Login form validation and redirect
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (username === '') {
        alert('Username cannot be empty');
        return;
    }
    
    if (password === '') {
        alert('Password cannot be empty');
        return;
    }
    
    // Simple password length check
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }

    // Simulate login success
    window.location.href = "main.html"; // Redirect to main content page
});

// Function to open a tab
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tabcontent by default
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the active class from all tablinks
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected tab content and add active class to the clicked tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Function to open an inner tab
function openInnerTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all inner-tabcontent by default
    tabcontent = document.getElementsByClassName("inner-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the active class from all inner-tablinks
    tablinks = document.getElementsByClassName("inner-tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected inner tab content and add active class to the clicked tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
