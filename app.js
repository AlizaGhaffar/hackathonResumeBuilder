function generateResume() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var summary = document.getElementById('summary').value;
    var school = document.getElementById('school').value;
    var degree = document.getElementById('degree').value;
    var graduationYear = document.getElementById('year').value;
    var companyName = document.getElementById('companyName').value;
    var workYear = document.getElementById('workYear').value;
    var skill = document.getElementById('skill').value;
    document.getElementById('resumeName').textContent = "Name: ".concat(name);
    document.getElementById('resumeEmail').textContent = "Email: ".concat(email);
    document.getElementById('resumePhone').textContent = "Phone: ".concat(phone);
    document.getElementById('resumeSummary').textContent = "Summary: ".concat(summary);
    document.getElementById('schoolName').textContent = "School Name: ".concat(school);
    document.getElementById('resumeDegree').textContent = "Degree: ".concat(degree);
    document.getElementById('resumeGraduationYear').textContent = "Graduation Year: ".concat(graduationYear);
    document.getElementById('resumeCompanyName').textContent = "Company Name: ".concat(companyName);
    document.getElementById('resumeWorkYear').textContent = "Work Years: ".concat(workYear);
    document.getElementById('resumeSkill').textContent = "Skill: ".concat(skill);
}
window.generateResume = generateResume;
