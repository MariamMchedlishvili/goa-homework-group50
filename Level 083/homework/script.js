let hexColor = '0123456789abcdef'
let clickButton = document.getElementById('button')
let color = document.getElementById('color')
let main = document.querySelector('main')

clickButton.addEventListener('click', function () {
    let resultColor = '#'

    for (let num = 0; num < 6; num++) {
        let randomIndex = Math.floor(Math.random() * 16)
        resultColor += hexColor[randomIndex]
    }

    color.textContent = resultColor.toUpperCase()
    color.style.color = resultColor
    main.style.backgroundColor = resultColor
});

