let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = ()=> {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

emailjs.init("wyARF-X9-TDauE2Ok");

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_x3hez1p",
            "template_c1a9apj",
            this
        ).then(() => {
            alert("Message sent successfully!");
            form.reset();
        }).catch((error) => {
            console.log("FAILED...", error);
            alert("Failed to send message");
        });
    });

});