// const weakPasswords = ["password", "123456", "qwerty", "abc123", "letmein", "welcome"];

// export function validateForm(companyName, crNumber, email, phone, password, confirmPassword, businessType, terms) {
//     let errors = {};

//     if (!companyName) {
//         errors.companyName = "Company Name is required";
//     }

//     if (!crNumber) {
//         errors.crNumber = "CR Number is required";
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         errors.email = "Invalid email format.";
//     }

//     const phoneRegex = /^[0-9]{10}$/;
//     if (!phoneRegex.test(phone)) {
//         errors.phone = "Phone number must be 10 digits.";
//     }

//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
//     if (!passwordRegex.test(password)) {
//         errors.password = "Password must have uppercase, lowercase, number, and special character.";
//     } else if (weakPasswords.includes(password.toLowerCase())) {
//         errors.password = "This password is too common.";
//     }

//     if (password !== confirmPassword) {
//         errors.confirmPassword = "Passwords do not match.";
//     }

//     if (!terms) {
//         errors.terms = "You must agree to the terms and conditions.";
//     }

//     return errors;
// }


const weakPasswords = ["password", "123456", "qwerty", "abc123", "letmein", "welcome"];

export function validateForm(email, password) {
    let errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.email = "Invalid email format.";
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
        errors.password = "Password must have uppercase, lowercase, number, and special character.";
    } else if (weakPasswords.includes(password.toLowerCase())) {
        errors.password = "This password is too common.";
    }

    return errors;
}

