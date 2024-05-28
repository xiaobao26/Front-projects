const bgImg = document.getElementById('bg-img');
const loadingPercentage = document.getElementById('loading-percentage');

// setInterval(functionName, sec)

let count = 0;
let int = setInterval(blurring, 20);


function blurring() {
    count += 1 

    if (count > 99) {
        clearInterval(int);
    }

    loadingPercentage.innerText = `${count}%`;

    loadingPercentage.style.opacity = scale(count, 0, 100, 1, 0);

    bgImg.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`;

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min

}