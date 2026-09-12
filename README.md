# README.md

Repository link:
https://github.com/HarisLeghari1/contact-management-system

## TASK 1 - USER INTERFACE CHANGES
### 1. Updated the "Delete" button in the contact component to "Delete Contact"
   
   ![image](https://github.com/user-attachments/assets/04ec1a62-9b48-419c-bd8e-cbdf920b6f51)

### 2. Modified the phone component to dynamically display the contact’s name in the button label 
*(Note: The screenshot included was captured after the completion of all tasks. I apologize for not updating the README file progressively while working on the tasks.)*

   ![image](https://github.com/user-attachments/assets/8490236c-a160-49b6-bac7-017a534a157b)

### 3. Replaced the input field for the phone number type with a drop-down menu offering four categories: Home, Work, Mobile, and Others.

   ![Task 1 Part 3](https://github.com/user-attachments/assets/0ea36fa8-b8ef-4286-8579-def5c79c593c)

### 4. Updated the label in the table from "Name" to "Phone Type" to match the type of data being displayed

   ![Task 1 Part 4](https://github.com/user-attachments/assets/7fd6206f-2dfe-42c3-a118-6c82c8adc965)

   

## Task 2 - API Command Demonstrations 
### 1. Show Contact API Command

   ![1](https://github.com/user-attachments/assets/c2eccbe8-9f5c-4820-9b7d-91ea8a498177)

### 2. Add Contact API Command

   ![2](https://github.com/user-attachments/assets/ba55b5d4-f3b2-4dad-932b-dd5d36c71c6b)

### 3. Delete Contact API Command

   ![3](https://github.com/user-attachments/assets/860ae6e4-eb7c-4d6f-83de-8c5be55d785f)

### 4. Update Contact API Command

   ![4](https://github.com/user-attachments/assets/67f4a1a7-76e4-4a3b-8475-7fcdc759b64e)

### 5. Show Phone API Command

   ![5](https://github.com/user-attachments/assets/5a639ad1-dddd-4c1a-b6b8-caab9a47600d)

### 6. Add Phone API Command

   ![6](https://github.com/user-attachments/assets/e940389c-5cae-48e1-b555-e27c0777f863)


### 7. Delete Phone API Command

   ![7](https://github.com/user-attachments/assets/25c8f78d-31ee-4966-97b8-7ba6c546a0ab)


### 8. Update Phone API Command

   ![8](https://github.com/user-attachments/assets/186bb48f-43c0-4134-9270-9f3831d5c698)

    
## Task 3 - Database Modeling with Sequelize and API Testing

### 1. Modified the Contacts Table
To modify the **contacts** table, I added the address attribute in contact's model (ID and Name attributes were already in *contact.model.js* file)

![image](https://github.com/user-attachments/assets/292d6cee-b3f6-4597-bd8d-af79a827e2e0)

### 2. Modified the Phones Table
The **phones** table was updated to change the **name** attribute --> **phone_type** and **number** attribute --> **phone_number**

![image](https://github.com/user-attachments/assets/bd5c2873-4d11-4c5f-acc8-3a669e303501)


### 3. Adjusted the Front-End
The front-end was adjusted to align with the new backend structure. The following changes were made:

- The **Contact** component was updated to display the new address attribute.
- The **Phone** component was modified to update the attributes name (**phone_type** and **phone_number**).

### 4. Tested All APIs
I tested all APIs related to the modified tables, similar to the testing process in **Task 2**. The following APIs were tested:

- **Show Contact**

   ![1](https://github.com/user-attachments/assets/afe7d9cb-1e87-4172-97f2-4a2d3d48a79e)

- **Add Contact**

   ![2](https://github.com/user-attachments/assets/fd781d55-cc1b-4dd7-9c60-3e3b94442003)

- **Delete Contact**

   ![3](https://github.com/user-attachments/assets/976d530f-7760-46c8-bf65-2337d1faf119)

- **Update Contact**

   ![4](https://github.com/user-attachments/assets/765b752a-d677-41e4-b0a8-169148fe1849)

- **Show Phone**

   ![5](https://github.com/user-attachments/assets/f6ccad8a-128f-4e16-9aaa-f85e1d134c76)

- **Add Phone**

   ![6](https://github.com/user-attachments/assets/5f630844-8726-4302-ba19-2839e70b4eb8)

- **Delete Phone**

   ![7](https://github.com/user-attachments/assets/3c6d9e62-3470-40ae-bc62-715bcc3f0eeb)

- **Update Phone**

   ![8](https://github.com/user-attachments/assets/5fce2c2f-2fc3-4dfe-95d5-9e824ddb2287)


## Task 4 - Expanding the Existing Tables (e.g. Company)

### 1. Table Creation
A new table named `companies` was created with the following attributes:

- **company_id**: Primary key, uniquely identifies each company.
- **company_name**: Stores the name of the company.
- **company_address**: Stores the address of the company.
- **contact_id**: Foreign key referencing `contact_id` from the **contacts** table to link each company with a contact.

### 2. API Creation
To manage the newly created **companies** table, four APIs were developed:

- **Create Company**: Adds a new company record to the table.
- **Retrieve All Companies**: Fetches all companies from the table.
- **Retrieve by ContactID**: Feteches all companies for a specific ContactID (*note: I created this api command while modifying the front-end interface to incorporate companies*) table/data 
- **Update Company**: Updates the details of an existing company by its `company_id`.
- **Delete Company**: Deletes a company by its `company_id`.

These APIs were implemented similarly to those created for the **contacts** and **phones** tables in previous tasks.

### Database Screenshot after creating the **companies** table

   ![db](https://github.com/user-attachments/assets/b1e05a9a-17a0-4ffa-8dc1-0dc3031a10cf)

### API Testing
Below are screenshots of API command testing results for the **companies** table:

- **Show All Companies**

   ![Retrieve Company](https://github.com/user-attachments/assets/8f11d610-3529-4aec-a6ec-cd0f242849b9)


- **Add Company**

   ![Add Company](https://github.com/user-attachments/assets/fe3c2631-c7a1-459a-9a3e-2b11d5ecee87)

- **Update Company**

   ![Update Company](https://github.com/user-attachments/assets/b2a65fe0-fc73-45ef-9bcb-2c7dba4d81df)


- **Delete Company**

   ![Delete Company](https://github.com/user-attachments/assets/b0aa9acb-3cfe-4457-b0c4-e8c73c52fd37)

- **Retrieve Company by ContactID**

   ![Retrieve Companies for single contact](https://github.com/user-attachments/assets/e4b7228a-b421-4d15-aae5-a4f396c70da6)

## Task 5 - Front End

### 1. Front-End Interface for Companies Table
The front-end interface was modified to incorporate the **companies** table. Now the interface allows the user to:

- **Add** a new company.
- **Edit** an existing company's details (company name and address).
- **Delete** a company record.
- **Update** a company with new data.

Each of these actions is linked with the back-end APIs created in Task 4 to ensure changes are reflected in the database.

### 2. Persistence of Changes
All changes made through the front-end interface (adding, editing, and deleting companies) are persisted in the **companies** table in the database. This was achieved by ensuring the front-end components are connected to the back-end API endpoints through **fetch** requests, with proper handling of responses.

### 3. Documentation with Screenshots
Below are the screenshots documenting the front-end functionality for managing companies:

- **Adding a Company**
  
  ![image](https://github.com/user-attachments/assets/85ede96d-f5b8-4ed2-bd64-50f3e41c928e)


- **Editing a Company**
  
  ![image](https://github.com/user-attachments/assets/d7213a43-8b24-40e4-a680-1241dc31d200)


- **Updated Company List**
  
  ![image](https://github.com/user-attachments/assets/c9cc9e6e-00d4-4565-ac0f-54c7bdf24c3f)


- **Deleting a Company**
  
  ![image](https://github.com/user-attachments/assets/28b0801a-f6f4-44e4-b9f0-7799df5e8b41)
  ![image](https://github.com/user-attachments/assets/c7f52659-0fc5-477d-9e7e-d0c05c874e8b)


## Video



https://github.com/user-attachments/assets/e78ce8a1-5ecd-4445-801b-084322a0e0d7

