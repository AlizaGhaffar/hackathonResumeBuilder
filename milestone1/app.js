function previewResume() {
    // Collect form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create a query string with the form data
    var queryString = new URLSearchParams({
        name: name,
        email: email,
        experience: experience,
        skills: skills
    }).toString();
    // Redirect to the preview page with query parameters
    window.location.href = "preview.html?".concat(queryString);
}
