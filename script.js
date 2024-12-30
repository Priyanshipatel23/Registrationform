document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Reset errors
    resetErrors();

    // Full Name Validation
    const fullName = document.getElementById("fullName");
    const fullNameError = document.getElementById("fullNameError");
    const fullNameRegex = /^[a-zA-Z\s]+$/;
    if (!fullName.value.trim()) {
        fullNameError.textContent = "Full Name is required.";
        isValid = false;
    } else if (!fullNameRegex.test(fullName.value.trim())) {
        fullNameError.textContent = "Full Name should only contain letters and spaces.";
        isValid = false;
    }

    // Email Validation
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.value.trim()) {
        emailError.textContent = "Email Address is required.";
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Password Validation
    const password = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!password.value.trim()) {
        passwordError.textContent = "Password is required.";
        isValid = false;
    } else if (!passwordRegex.test(password.value.trim())) {
        passwordError.textContent = "Password must be at least 8 characters long, and include one uppercase, one lowercase, one number, and one special character.";
        isValid = false;
    }

    // Confirm Password Validation
    const confirmPassword = document.getElementById("confirmPassword");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    }

    // Date of Birth Validation
    const dob = document.getElementById("dob");
    const dobError = document.getElementById("dobError");
    const today = new Date();
    const birthDate = new Date(dob.value);
    const age = today.getFullYear() - birthDate.getFullYear();
    if (!dob.value.trim()) {
        dobError.textContent = "Date of Birth is required.";
        isValid = false;
    } else if (age < 18) {
        dobError.textContent = "You must be at least 18 years old.";
        isValid = false;
    }

    // Gender Validation
    const genderError = document.getElementById("genderError");
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        genderError.textContent = "Please select your gender.";
        isValid = false;
    }

    // Country Validation
    const country = document.getElementById("country");
    const countryError = document.getElementById("countryError");
    if (!country.value) {
        countryError.textContent = "Please select your country.";
        isValid = false;
