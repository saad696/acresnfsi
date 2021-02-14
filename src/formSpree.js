  import {form, submitBtn} from "./index"
  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    

    const status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      submitBtn.style = "display: none ";
      setTimeout(() => {
        status.innerHTML = "Thanks for your response!";
      },50);

      setTimeout(() => {
          status.innerHTML = " ";
      }, 4000)
    }

    function error() {
        setTimeout(() => {
            status.innerHTML = "Oops! There was a problem.";
          },50);
    
          setTimeout(() => {
              status.innerHTML = " ";
          }, 4000);
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }