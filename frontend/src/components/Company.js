import { useState } from 'react';

function Company(props) {
    const { company, companies, setCompanies, contact } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [company_name, setCompanyName] = useState(company.company_name);
    const [company_address, setCompanyAddress] = useState(company.company_address);

    // Function to handle company update
    async function updateCompany(e) {
        e.preventDefault();

        const response = await fetch(`http://localhost/api/companies/${company.company_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                company_name,
                company_address,
            }),
        });

        const data = await response.json();

        // Updating the company list after successful update
        if (data.message === 'Company was updated successfully.') {
            const updatedCompanies = companies.map((comp) =>
                comp.company_id === company.company_id
                    ? { ...comp, company_name, company_address }
                    : comp
            );
            setCompanies(updatedCompanies);
            setIsEditing(false);
        }
    }

    // Function to handle deletion of company
    async function deleteCompany() {
        const response = await fetch(`http://localhost/api/companies/${company.company_id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            const newCompanies = companies.filter((c) => c.company_id !== company.company_id);
            setCompanies(newCompanies);
        }
    }

    return (
        <tr>
            {/* showing inputs for editing mode */}
            {isEditing ? (
                <>
                    <td>
                        <input
                            type="text"
                            value={company_name}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            value={company_address}
                            onChange={(e) => setCompanyAddress(e.target.value)}
                        />
                    </td>
                    <td>
                        <button className="button green" onClick={updateCompany}>
                            Save
                        </button>
                        <button className="button red" onClick={() => setIsEditing(false)}>
                            Cancel
                        </button>
                    </td>
                </>
            ) : (
                <>
                    <td>{company.company_name}</td>
                    <td>{company.company_address}</td>
                    <td>
                        <button className="button green" onClick={() => setIsEditing(true)}>
                            Edit
                        </button>
                        <button className="button red" onClick={deleteCompany}>
                            Delete
                        </button>
                    </td>
                </>
            )}
        </tr>
    );
}

export default Company;
