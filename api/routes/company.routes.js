module.exports = app => {
    const companies = require("../controllers/company.controller.js");

    // Create a new Company
    app.post("/api/companies", companies.create);

    // Retrieve Companies by contact_id
    app.get("/api/contacts/:contactId/companies", companies.findAllByContact);

    // Retrieve all Companies
    app.get("/api/companies", companies.findAll);

    // Update a Company with company_id
    app.put("/api/companies/:company_id", companies.update);

    // Delete a Company with company_id
    app.delete("/api/companies/:company_id", companies.delete);
};
