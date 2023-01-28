
let button = document.getElementById("finish");
console.log(button)

button.addEventListener("click", checkTest);

function checkTest() {
    
    
    
    let result = 0;

    let a1 = document.getElementById("q1").value;
    if (a1 === "3") {
        result++;
    }


    let a2 = document.getElementById("q2").value;
    if (a2 === "4") {
        result++;
    }

    let a3 = document.getElementById("q3").value;
    if (a3 === "5") {
        result++;
    }

    let a4 = document.getElementById("q4").value;
    if (a4 === "6") {
        result++;
    }

    let a5 = document.getElementById("q5").value;
    if (a5 === "7") {
        result++;
    }

    alert("Количество правильных ответов: " + result);

    
}