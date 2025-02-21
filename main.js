// main.js
import { Form } from './components/Form.js';
import { CompanyList } from './components/CompanyList.js';

const app = document.getElementById("registration-form");


const formComponent = new Form();
formComponent.render(app);

const companyListComponent = new CompanyList();
companyListComponent.render(app);





// modular programming allow seprate code into reusable componets 

//Form.js contains a JavaScript class or function that represents the form.
//port { Form } brings this class/function into the current file so we can us it

//  new Form() creates a new object based on the Form class.
//ormComponent.render(app) calls the render method to insert the form inside <div id="app">.

