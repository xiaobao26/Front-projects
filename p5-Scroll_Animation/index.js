const containers = document.querySelectorAll('.container');

window.addEventListener('scroll', checkContainers);
// if I not start this function, the page will only show title
checkContainers()


function checkContainers() {
    const triggerBottom = window.innerHeight / 5 * 4;

    containers.forEach(container => {
        const containerTop = container.getBoundingClientRect().top;

        if (triggerBottom > containerTop) {
            container.classList.add('show')
        } else {
            container.classList.remove('show')
        }
    })
}

