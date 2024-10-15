const db = require("../models");
const Companies = db.companies;

// Creating and Saving a new Company
exports.create = (req, res) => {
    // Validating request
    if (!req.body.company_name || !req.body.company_address || !req.body.contact_id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Creating a Company
    const company = {
        company_name: req.body.company_name,
        company_address: req.body.company_address,
        contact_id: req.body.contact_id
    };

    // Saving Company in the database
    Companies.create(company)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Company."
            });
        });
};
// Retrieve all Companies from the database.
exports.findAll = (req, res) => {
    Companies.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving companies."
            });
        });
};
// Update a Company by the id in the request
exports.update = (req, res) => {
    const id = req.params.company_id;

    Companies.update(req.body, {
        where: { company_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Company was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Company with id=${id}. Maybe Company was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Company with id=" + id
            });
        });
};
// Delete a Company with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.company_id;

    Companies.destroy({
        where: { company_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Company was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Company with id=${id}. Maybe Company was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Company with id=" + id
            });
        });
};
