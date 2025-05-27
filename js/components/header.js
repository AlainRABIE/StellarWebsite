function createHeader() {
    const header = document.createElement('header');
    header.classList.add('site-header');

    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerHTML = '<h1>Stellar</h1>'; // Replace with an actual logo image if needed

    const nav = document.createElement('nav');
    const navLinks = ['Home', 'About', 'Services', 'Contact'];
    const ul = document.createElement('ul');

    navLinks.forEach(link => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${link.toLowerCase()}.html">${link}</a>`;
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(logo);
    header.appendChild(nav);

    return header;
}

export default createHeader;