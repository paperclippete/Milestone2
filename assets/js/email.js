function sendMail(contactForm) {
    emailjs.send("gmail", "mailingList", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "CV_enquiry": contactForm.enquirysummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response.status, response.text);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

