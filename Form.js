import { validateForm } from '../utils/validation.js';

export class Form {
    constructor() {
        this.form = document.createElement("form");
        this.form.innerHTML = `
            <label>Company Name:
            <input type="text" id="companyName" required> </label>
            <span class="error" id="companyNameError"></span><br><br>

            <label>Commercial Registration Number:<input type="text" id="registrationNumber" required></label>
            <span class="error" id="registrationNumberError"></span><br><br>

            <label>Email:<input type="email" id="email" required></label>
            <span class="error" id="emailError"></span><br><br>

            <label>Phone Number:<input type="text" id="phoneNumber" required></label>
            <span class="error" id="phoneNumberError"></span><br><br>

            <label>Password: <input type="password" id="password" required></label>
            <span class="error" id="passwordError"></span><br><br>

            <label>Confirm Password:<input type="password" id="confirmPassword" required></label>
            <span class="error" id="confirmPasswordError"></span><br><br>

            <label>Business Type:
                <select id="businessType" required>
                    <option value="tech">Tech</option>
                    <option value="retail">Retail</option>
                    <option value="finance">Finance</option>
                </select>
            </label><br><br>

            <label><input type="checkbox" id="terms" required> I agree to the terms and conditions</label><br><br>

            <button type="submit">Register</button>
        `;
        this.form.addEventListener("submit", this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();

        const companyName = document.getElementById("companyName").value.trim();
        const registrationNumber = document.getElementById("registrationNumber").value.trim();
        const email = document.getElementById("email").value.trim();
        const phoneNumber = document.getElementById("phoneNumber").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const businessType = document.getElementById("businessType").value;
        const terms = document.getElementById("terms").checked;

        const errors = validateForm(companyName, registrationNumber, email, phoneNumber, password, confirmPassword, terms);

        document.getElementById("companyNameError").textContent = errors.companyName || "";
        document.getElementById("registrationNumberError").textContent = errors.registrationNumber || "";
        document.getElementById("emailError").textContent = errors.email || "";
        document.getElementById("phoneNumberError").textContent = errors.phoneNumber || "";
        document.getElementById("passwordError").textContent = errors.password || "";
        document.getElementById("confirmPasswordError").textContent = errors.confirmPassword || "";

        if (!errors.companyName && !errors.registrationNumber && !errors.email && !errors.phoneNumber && !errors.password && !errors.confirmPassword && !errors.businessType && !errors.terms) {
            alert("Registration successful!.");
        }
    }

    render(parent) {
        parent.appendChild(this.form);
    }
}
