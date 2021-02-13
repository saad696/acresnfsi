import _logo from "../assets/images/logo2.svg"
import _avatar from "../assets/images/avatar.jpg"
import _wave from "../assets/images/wave.svg"
import _card1 from "../assets/images/card1.svg"
import _service1 from "../assets/images/card1.png"
import _service2 from "../assets/images/card2.png"
import _service3 from "../assets/images/card3.png"
import "./main.css"


const hamBurger = document.getElementById("toggle-btn")

//nav toggle
hamBurger.addEventListener("click", () => {
    const element = document.getElementById("nav-end");
    element.classList.toggle("is-active")
});

export {_logo, _avatar, _wave, _card1,  _service1,  _service2,  _service3}