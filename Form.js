import { validateForm } from "../utils/validation.js";

export class Form {
    constructor() {
        this.form = document.createElement("form");
        this.form.classList.add("space-y-4"); // TailwindCSS classes

        this.form.innerHTML = `
            <label class="block text-gray-600" for="company-name"> Company Name</label>
            <input type="text" id="company-name" name="company-name" required class="w-full p-2 border rounded-md">
            <span class="text-red-500 text-sm" id="companyNameError"></span>

            <label class="block text-gray-600" for="cr-number">Commerical Registeration Number</label>
            <input type="text" id="cr-number" name="cr-number" required class="w-full p-2 border rounded-md">
            <span class="text-red-500 text-sm" id="crNumberError"></span>

            <label class="block text-gray-600" for="email"> Email</label>
            <input type="email" id="email" name="email" required class="w-full p-2 border rounded-md">
            <span class="text-red-500 text-sm" id="emailError"></span>

            <label class="block text-gray-600" for="phone"> Phone Number</label>
            <input type="tel" id="phone" name="phone" required class="w-full p-2 border rounded-md">
            <span class="text-red-500 text-sm" id="phoneError"></span>

            <label class="block text-gray-600" for="password"> Password</label>
            <input type="password" id="password" name="password" required class="w-full p-2 border rounded-md">
            <span class="text-red-500 text-sm" id="passwordError"></span>

            <label class="block text-gray-600" for="confirm-password">  Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" required class="w-full p-2 border rounded-md">
            <span class="text-red-500 text-sm" id="confirmPasswordError"></span>

            <label class="block text-gray-600" for="business-type">Business Type </label>
            <select id="business-type" name="business-type" required class="w-full p-2 border rounded-md">
                <option value=""> Choose the type</option>
                <option value="industrial">Industrial </option>
                <option value="commercial">Commerical</option>
            </select>
            <span class="text-red-500 text-sm" id="businessTypeError"></span>

            <div class="terms flex items-center">
                <input type="checkbox" id="terms" name="terms" required class="mr-2">
                <label for="terms" class="text-gray-600">   I agree the terms and conditions</label>
                <span class="text-red-500 text-sm" id="termsError"></span>
            </div>

            <div class="flex justify-between mt-4">
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"> Submit</button>
                <button type="reset" class="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400">Cancel</button>
            </div>
        `;

        this.form.addEventListener("submit", this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const companyName = document.getElementById("company-name").value.trim();
        const crNumber = document.getElementById("cr-number").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const businessType = document.getElementById("business-type").value;
        const terms = document.getElementById("terms").checked;

        const errors = validateForm(companyName, crNumber, email, phone, password, confirmPassword, businessType, terms);

        document.getElementById("companyNameError").textContent = errors.companyName || "";
        document.getElementById("crNumberError").textContent = errors.crNumber || "";
        document.getElementById("emailError").textContent = errors.email || "";
        document.getElementById("phoneError").textContent = errors.phone || "";
        document.getElementById("passwordError").textContent = errors.password || "";
        document.getElementById("confirmPasswordError").textContent = errors.confirmPassword || "";
        document.getElementById("businessTypeError").textContent = errors.businessType || "";
        document.getElementById("termsError").textContent = errors.terms || "";

        
        if (!Object.values(errors).some(error => error !== "")) {
            console.log("Form submitted successfully!");
        }
    }

    render(parent){
        parent.appendChild(this.form)
    }
}
