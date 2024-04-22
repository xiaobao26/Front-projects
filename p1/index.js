const panels = document.querySelectorAll('.panel');

// remove active class in all panel
function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}

// only add active class when click this panel
// let all panels add click listener
// then when click this panel, remove active class in all panels
// only add active class in this panel(which click)
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClass(); 
        panel.classList.add("active");
    })
})