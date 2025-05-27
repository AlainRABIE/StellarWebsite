function displayServices(services) {
    const servicesContainer = document.getElementById('services-container');
    servicesContainer.innerHTML = '';

    services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.classList.add('service');

        serviceElement.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;

        servicesContainer.appendChild(serviceElement);
    });
}

export default displayServices;