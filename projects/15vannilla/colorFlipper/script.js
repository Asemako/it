const body = document.querySelector(".body");
const btn = document.querySelector(".btn");
const code = document.querySelector(".code");

const randomColor = () => {
    let colorValue = "ABCDEF0123456789";
    let colorCode = "";
    for (let i = 0; i < 6; i++) {
        colorCode += colorValue.charAt(
            Math.floor(Math.random() * colorValue.length)
        );
    }
    return colorCode;
};

const changeBGColor = () => {
    btn.addEventListener("click", () => {
        const color = randomColor();
        body.style.backgroundColor = `#${color}`;
        code.innerHTML = `Color Code : #${color}`;

    });
};

changeBGColor();
