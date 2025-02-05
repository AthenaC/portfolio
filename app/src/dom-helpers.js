import { projects } from './constants.js';
import { modal } from './modal.js';
import profile from "./images/profile.jpg"
import motorcycle from "./images/motorcycle.jpg"
import githubIcon from "./images/github-mark/github-mark.png"
import linkedinIcon from "./images/linkedin-icon.png"

const about = () => {
    const section = document.querySelector('.about-page');

    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const pHobbies = document.createElement('p');
    const imgProfile = document.createElement('img');
    const imgMotorcycle = document.createElement('img');
    const div = document.createElement('div');
    const divHobbies = document.createElement('div');

    h1.id = 'about';
    p.id = 'about-body';
    pHobbies.id = 'about-hobbies';
    imgProfile.src = profile;
    imgProfile.id = 'profile';
    imgProfile.alt = 'Profile Picture';
    imgMotorcycle.src = motorcycle;
    imgMotorcycle.id = 'motorcycle';
    imgMotorcycle.alt = 'Motorcycle Picture';
    div.id = 'about-container';
    divHobbies.id = 'hobbies-container';
    
    h1.textContent = 'About';
    p.textContent = "I thrive on growth, challenges, and continuous learning. With a background in customer service and leadership, I’ve honed problem-solving and communication skills that translate seamlessly into tech. Transitioning into software development has fueled my passion for building impactful solutions. Driven by curiosity and a commitment to making a difference, I bring a unique blend of experience, technical skills, and dedication to every opportunity.";

    pHobbies.textContent = "I’m a passionate foodie who loves exploring new restaurants and revisiting favorites, with Manhattan as my go-to for nostalgic walks. Boxing is my therapy—it keeps me strong and confident. I hope to own my dream piano one day and revisit the classical pieces I once played. When the weather is right, nothing beats the thrill of riding my motorcycle—my preferred mode of transportation, so punctuality is never a concern.";

    div.append(imgProfile, p);
    divHobbies.append(pHobbies, imgMotorcycle);
    section.append(h1, div, divHobbies);
};

const project = (projects) => {
    const section = document.querySelector('.projects-page');
    
    const h1 = document.createElement('h1');
    h1.id = 'projects';
    h1.textContent = 'Projects';
    
    const container = document.createElement('div');
    container.className = 'project-container';
    
    Object.keys(projects).forEach(project => {
        const span = document.createElement('span');
        const preview = document.createElement('img');
        const name = document.createElement('h3');
        
        span.ariaLabel = project;
        span.dataset.project = project;
        preview.src = projects[project].preview;
        name.textContent = projects[project].name;
        
        span.append(preview, name);
        container.append(span); 
    });

    section.append(h1, container);

    container.addEventListener('click', (e) => {
        const span = e.target.closest('span');
        if (!span) return;
        
        const projectId = span.dataset.project;
        const dialog = document.querySelector(`dialog#${projectId}`);

        dialog ? dialog.showModal() : console.error(`Dialog for project ${projectId} not found.`);
    });
};

const followMe = () => {
    const div = document.querySelector('.follow-me');

    const h1 = document.createElement('h1');
    const imgGithub = document.createElement('img');
    const aGithub = document.createElement('a');
    const imgLinkedin = document.createElement('img');
    const aLinkedin = document.createElement('a');

    h1.id = 'follow-me-title';
    h1.textContent = 'Follow Me @';
    
    imgGithub.src = githubIcon;
    imgGithub.id = 'github-icon';
    imgGithub.alt = 'GitHub Icon';
    aGithub.href = 'https://github.com/AthenaC';
    aGithub.target = 'blank';

    
    imgLinkedin.src = linkedinIcon;
    imgLinkedin.class = 'linkedin-icon';
    imgLinkedin.alt = 'LinkedIn Icon';
    aLinkedin.href = 'https://www.linkedin.com/in/athena-chang-460813ab/';
    aLinkedin.target = 'blank';

    aGithub.append(imgGithub);
    aLinkedin.append(imgLinkedin);
    div.append(h1, aGithub, aLinkedin);
};

const footer = () => {
    const footer = document.querySelector('footer');
    const p = document.createElement('p');
    const span = document.createElement('span');
    span.textContent = '&copy;'
    p.append(span);
    p.textContent = `© ${new Date().getFullYear()} All Rights Reserved`;
    footer.append(p);
};

export const render = () => {
    about();
    modal(projects);
    project(projects);
    followMe();
    footer();
};