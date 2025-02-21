import { Form } from "./components/Form.js";
import { CompanyList } from "./components/CompanyList.js";

const formContainer = document.getElementById("form-container");
const companyContainer = document.getElementById("company-container");

if (formContainer) {
    const formComponent = new Form();
    formComponent.render(formContainer);
} else {
    console.error("⚠️ عنصر #form-container غير موجود في index.html");
}

if (companyContainer) {
    const companyList = new CompanyList();
    companyList.render(companyContainer);
} else {
    console.error("⚠️ عنصر #company-container غير موجود في index.html");
}





// modular programming allow seprate code into reusable componets 

//Form.js contains a JavaScript class or function that represents the form.
//port { Form } brings this class/function into the current file so we can us it

//  new Form() creates a new object based on the Form class.
//ormComponent.render(app) calls the render method to insert the form inside <div id="app">.

