const strongElements = document.querySelectorAll('main strong');
let currentIndex = 0;
const styleSwitcher = document.getElementById('styleSwitcher');
const styleSheet = document.getElementById('styleSheet');
let currentStyle = 0;
const styles = ['src/css/styleFigma.css', 'src/css/style.css', 'src/css/styleBW.css', 'src/css/stylePBC.css', 'src/css/styleV.css']; // Added .css
const buttonClasses = ['styleFigma', 'style', 'styleBW', 'stylePBC', 'styleV'];

styleSwitcher.addEventListener('click', () => {
    currentStyle = (currentStyle + 1) % styles.length;
    styleSheet.href = styles[currentStyle];
    buttonClasses.forEach(className => styleSwitcher.classList.remove(className));
    styleSwitcher.classList.add(buttonClasses[currentStyle]);
});


function changeColor() {
    strongElements.forEach(strong => {
        strong.style.color = colors[currentIndex];
    });
    currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeColor, 3000); // Change color every 2 seconds