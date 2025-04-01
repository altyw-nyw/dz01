//
// const text = document.querySelector("#name");
// const changeText = prompt("выберите цвет").toLowerCase().trim();
// if (changeText) {
//     text.style.color = "black";
//
//     if (changeText === "green") {
//         document.body.style.background = "green";
//         text.innerText = "Фон изменён на зеленый цвет";
//     } else if (changeText === "red") {
//         document.body.style.background = "red";
//         text.innerText ="Фон изменён на красный цвет";
//     } else if (changeText === "blue") {
//         document.body.style.background = "blue";
//         text.innerText ="Фон изменён на синий цвет" ;
//     } else {
//         alert ("Ошибка! Введите корректный цвет (green, red, blue)") ;
//     }
// }
//


const text = prompt("выберите цвет");
if (text==="red") {
    document.body.style.background = "red";
    alert("Stop")
}else if (text==="green") {
    document.body.style.background = "green";
    alert("Go")
} else if (text==="yellow") {
    document.body.style.background = "yellow";
    alert("Get ready")
}else  {
    alert("Error")
}
