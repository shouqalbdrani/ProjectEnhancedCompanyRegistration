export const fetchCompanyData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error(`خطأ: ${response.status} - ${response.statusText}`);
        return await response.json();
    } catch (error) {
        console.error("حدث خطأ أثناء جلب بيانات الشركة:", error);
        return null;
    }
};

export const submitCompanyData = async (formData) => {
    try {
        const response = await fetch("https://your-api-endpoint.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        return response;
    } catch (error) {
        console.error("خطأ أثناء إرسال البيانات:", error);
        throw error;
    }
};
