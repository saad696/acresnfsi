import _logo from "../assets/images/logo2.svg";
import _avatar from "../assets/images/avatar.jpg";
import _wave from "../assets/images/wave.svg";
import _card1 from "../assets/images/card1.svg";
import _service1 from "../assets/images/card1.png";
import _service2 from "../assets/images/card2.png";
import _service3 from "../assets/images/card3.png";
import _formSvg from "../assets/images/form.svg";
import _carouselLogo from "../assets/images/carouselLogo.svg";
import _footerSvg from "../assets/images/footer.svg";
import "./main.css";

const form = document.getElementById("signup-form");
const signUpUserName = document.getElementById("name");
const signUpEmail = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");

const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const hamBurger = document.getElementById("toggle-btn");

//nav toggle
hamBurger.addEventListener("click", () => {
  const element = document.getElementById("nav-end");
  element.classList.toggle("is-active");
});

//check availability
$(document).ready(function(){

  $('#check-btn').click(function(e){
    e.preventDefault();
  $("#notification").toggle('slow');
  
  });
  
  });

export {
  _logo,
  _avatar,
  _wave,
  _card1,
  _service1,
  _service2,
  _service3,
  _formSvg,
  _carouselLogo,
  _footerSvg
}; //to images.js
export { form, signUpUserName, signUpEmail, submitBtn, mailformat };
