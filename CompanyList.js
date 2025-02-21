import { fetchCompanyData } from "../services/api.js";

export class CompanyList {
    constructor() {
        this.container = document.createElement("div");

        this.button = document.createElement("button");
        this.button.textContent = "Fetch Companies";
        this.button.className = "bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600";
        this.button.addEventListener("click", () => this.loadCompanies());

        this.loading = document.createElement("span");
        this.loading.textContent = "Loading...";
        this.loading.className = "text-gray-500 ml-2 hidden"; // مخفي في البداية

        this.list = document.createElement("ul");
        this.list.className = "mt-4 space-y-2 text-gray-700";

        this.container.append(this.button, this.loading, this.list);
    }

    loadCompanies = async () => {
        this.loading.classList.remove("hidden"); // إظهار رسالة التحميل
        try {
            const companies = await fetchCompanyData();
            if (!Array.isArray(companies)) throw new Error("Invalid data format");

            this.list.innerHTML = companies.length > 0
                ? companies.map(company => `<li class="p-2 border rounded-md">${company.name} - ${company.email}</li>`).join("")
                : "<li class='text-red-500'>No data found</li>";
        } catch (error) {
            this.list.innerHTML = "<li class='text-red-500'>Error fetching companies</li>";
            console.error("Error loading companies:", error);
        } finally {
            this.loading.classList.add("hidden"); // إخفاء رسالة التحميل
        }
    };

    render(parent) {
        parent.appendChild(this.container);
    }
}
