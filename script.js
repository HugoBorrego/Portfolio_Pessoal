function showSection(sectionId) {
    // Oculta todas as seções
    let sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Mostra a seção selecionada
    let selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Mostra a seção inicial quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
