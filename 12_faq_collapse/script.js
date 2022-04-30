const faqToggleButtons = document.querySelectorAll(".faq-toggle")

faqToggleButtons.forEach((faqToggleButton) => {
    faqToggleButton.addEventListener('click', () => {
        faqToggleButton.parentNode.classList.toggle('active')
    })
})