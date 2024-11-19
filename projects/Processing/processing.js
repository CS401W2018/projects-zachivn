document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();


    const formData = {
        firstName: document.getElementById("first").value.trim(),
        lastName: document.getElementById("lname").value.trim(),
        email: document.getElementById("email").value.trim(),
        studentID: document.getElementById("ID").value.trim(),
        club: document.getElementById("Club").value,
        bio: document.getElementById("bio").value.trim(),
    };


    const errors = [];
    if (!formData.firstName) errors.push("First name is required.");
    if (!formData.lastName) errors.push("Last name is required.");
    if (!formData.club) errors.push("You must select a club.");
    if (formData.studentID.length < 5 || formData.studentID.length > 10) {
        errors.push("Student ID must be between 5 and 10 characters.");
    }

  
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
    }

    console.log("Form Data:", formData);


    const xhr = new XMLHttpRequest();
    xhr.open("GET", "response.json", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            alert(response.message); 
            document.getElementById("userForm").reset();
        } else {
            alert("There was an error submitting the form.");
        }
    };

    xhr.send(JSON.stringify(formData));
});
