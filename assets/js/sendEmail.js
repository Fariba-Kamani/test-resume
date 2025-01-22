function sendMail(contactForm) {
    emailjs.send("service_5e96h6d","template_ij9k25l",{
"from_name": contactForm.name.value,
"project_request": contactForm.projectsummary.value,
"from_email": contactForm.emailaddress.value,
})
.then(
    function(response) {
        console.log("SUCCESS", response);
    },
    function(error) {
        console.log("FAIL", error);
    },
);
return false;
}