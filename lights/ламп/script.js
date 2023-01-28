const button = document.querySelector(".button")
// console.log(button);
const links = document.querySelector(".links")
// console.log(links.style.display)



button.addEventListener("click", () => {
    console.log(links.style.display)

    if (links.style.display === '') { // '' === "none"
        links.style.display = 'block'
    } else {
        links.style.display = ''
    }
});




const person = {  // Object
    name: "Asem", // key: value
    age: 18,
    // isSuper: true,
    // hasBoyfriend: true,
    // hasGirlfriend: false,
    // odeshda: ['t-shirt', 'cap', 'trusiki', 'socks'],
    // display: 'none',
    // sayHi: () => {
    //     console.log("Hi from Asema")
    // },
    // eat: (food, doWhenFinishEating) => {
    //     console.log(`I am eating ${food}`)
    //     doWhenFinishEating()
    // }
    display: ''
}

// if (person.display === '') {
//     person.age = 'block'
// } else {
//     person.age = ''
// }

// console.log(person.display)


// if (person.display === '') {
//     person.display = 'block'
// } else {
//     person.display = ''
// }

// console.log(person.display)