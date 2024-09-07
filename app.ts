function generateResume() {
    
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const summary = (document.getElementById('summary') as HTMLTextAreaElement).value;
    const school = (document.getElementById('school') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const graduationYear = (document.getElementById('year') as HTMLInputElement).value;
    const companyName = (document.getElementById('companyName') as HTMLInputElement).value;
    const workYear = (document.getElementById('workYear') as HTMLInputElement).value;
    const skill = (document.getElementById('skill') as HTMLInputElement).value;

   
    (document.getElementById('resumeName') as HTMLParagraphElement).textContent = `Name: ${name}`;
    (document.getElementById('resumeEmail') as HTMLParagraphElement).textContent = `Email: ${email}`;
    (document.getElementById('resumePhone') as HTMLParagraphElement).textContent = `Phone: ${phone}`;
    (document.getElementById('resumeSummary') as HTMLParagraphElement).textContent = `Summary: ${summary}`;
    (document.getElementById('schoolName') as HTMLParagraphElement).textContent = `School Name: ${school}`;
    (document.getElementById('resumeDegree') as HTMLParagraphElement).textContent = `Degree: ${degree}`;
    (document.getElementById('resumeGraduationYear') as HTMLParagraphElement).textContent = `Graduation Year: ${graduationYear}`;
    (document.getElementById('resumeCompanyName') as HTMLParagraphElement).textContent = `Company Name: ${companyName}`;
    (document.getElementById('resumeWorkYear') as HTMLParagraphElement).textContent = `Work Years: ${workYear}`;
    (document.getElementById('resumeSkill') as HTMLParagraphElement).textContent = `Skill: ${skill}`;
}


(window as any).generateResume = generateResume;















