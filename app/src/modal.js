import { projects } from './constants.js';

export const modal = (projects) => {
    Object.keys(projects).forEach(project => {
        const dialog = document.createElement('dialog');
        dialog.className = 'dialog';
        dialog.id = project;
        dialog.ariaLabel = project;

        const divHeader = document.createElement('div');
        divHeader.className = 'project-header';

        const h3 = document.createElement('h3');
        h3.className = 'project-title';
        h3.textContent = projects[project].name;

        // Icons container
        const divIcons = document.createElement('div');
        divIcons.className = 'icons-container';

        // Project Icon (Links to Website)
        const aProjectIcon = document.createElement('a');
        aProjectIcon.href = projects[project].web;
        aProjectIcon.target = '_blank';

        const imgProjectIcon = document.createElement('img');
        imgProjectIcon.className = 'dialog-icon';
        imgProjectIcon.src = projects[project].icon;
        imgProjectIcon.alt = projects[project].name;

        aProjectIcon.append(imgProjectIcon);

        // GitHub Icon (Links to GitHub Repo)
        const aGithub = document.createElement('a');
        aGithub.href = projects[project].github;
        aGithub.target = '_blank';

        const imgGithub = document.createElement('img');
        imgGithub.className = 'dialog-icon github-icon';
        imgGithub.src = '/src/images/github-mark/github-mark.png';
        imgGithub.alt = 'GitHub';

        aGithub.append(imgGithub);

        // Append icons to container
        divIcons.append(aProjectIcon, aGithub);

        // Close Button
        const closeButton = document.createElement('img');
        closeButton.src = '/src/images/close-button.png';
        closeButton.className = 'dialog-close';
        closeButton.alt = "Close"
        closeButton.addEventListener('click', () => dialog.close());

        const divBody = document.createElement('div');
        divBody.className = 'project-body';

        const img = document.createElement('img');
        img.className = 'project-screenshot';
        img.src = projects[project].screenshot;
        img.loading = 'lazy';

        const p = document.createElement('p');
        p.className = 'project-description';
        p.textContent = projects[project].description;

        divHeader.append(h3, divIcons, closeButton);
        divBody.append(p, img);
        dialog.append(divHeader, divBody);

        document.body.append(dialog);

        // Close dialog when clicking outside
        dialog.addEventListener("click", (e) => {
            const dialogDimensions = dialog.getBoundingClientRect();
            if (
                e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom
            ) {
                dialog.close();
            }
        });

        // Close on Escape key
        dialog.addEventListener("keydown", (e) => {
            if (e.key === "Escape") dialog.close();
        });
    });
};
