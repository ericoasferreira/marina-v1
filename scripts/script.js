const accordionButtons = document.querySelectorAll('.custom-accordion-button');
const accordionContents = document.querySelectorAll('.custom-accordion-content');

for (let i = 0; i < accordionButtons.length; i++) {
  accordionButtons[i].addEventListener('click', function (event) {
    event.preventDefault();
    const isActive = this.classList.contains('active');

    // Close all sections
    closeAllSections();

    if (!isActive) {
      this.classList.add('active');
      accordionContents[i].style.display = 'block';
    }
  });
}

function closeAllSections() {
  for (let i = 0; i < accordionContents.length; i++) {
    accordionButtons[i].classList.remove('active');
    accordionContents[i].style.display = 'none';
  }
}