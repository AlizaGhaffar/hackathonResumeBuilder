function goBack() {
    window.location.href = 'index.html';
}
function displayResume() {
    // Get URL parameters
    var queryParams = new URLSearchParams(window.location.search);
    // Extract data from URL parameters
    var name = queryParams.get('name') || '';
    var email = queryParams.get('email') || '';
    var experience = queryParams.get('experience') || '';
    var skills = queryParams.get('skills') || '';
    // Display data
    var resumePreview = document.getElementById('resumePreview');
    if (resumePreview) {
        resumePreview.innerHTML = "\n            <h2>".concat(name, "</h2>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
    }
}
// Run displayResume function when the page loads
window.onload = displayResume;
