const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentCount = 1;

prev.addEventListener('click', () => {
    currentCount--

    if (currentCount < 1) {
        currentCount = 1;
    } else {
        update()
    }
})

next.addEventListener('click', () => {
    currentCount++

    if (currentCount > circles.length) {
        currentCount = circles.length
    } else {
        update()
    }
})



function update() {
    circles.forEach((circle, index) => {
        if (index < currentCount) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const active = document.querySelectorAll('.active');
    progress.style.width = (active.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentCount === 1) {
        prev.disabled = true;
    } else if (currentCount === circles.length) {
        console.log(true)
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}

