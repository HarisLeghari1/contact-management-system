# README.md

IMPORTANT: Once you've cloned this to your forked repository, ensure that you continuously update this document as you complete each task to demonstrate your ongoing progress.

Please include your shared repository link here:
https://github.com/HarisLeghari1/A2-Muhammad-20864398.git

## TASK 1 - USER INTERFACE CHANGES
1. Updated the "Delete" button in the contact component to "Delete Contact"
   
   ![image](https://github.com/user-attachments/assets/04ec1a62-9b48-419c-bd8e-cbdf920b6f51)

2. Modified the phone component to dynamically display the contact’s name in the button label (Note: The screenshot included was captured after the completion of all tasks. I apologize for not updating the README file progressively while working on the tasks.)

   ![image](https://github.com/user-attachments/assets/8490236c-a160-49b6-bac7-017a534a157b)

3. Replaced the input field for the phone number type with a drop-down menu offering four categories: Home, Work, Mobile, and Others.

   ![Task 1 Part 3](https://github.com/user-attachments/assets/0ea36fa8-b8ef-4286-8579-def5c79c593c)

4. Updated the label in the table from "Name" to "Phone Type" to match the type of data being displayed

   ![Task 1 Part 4](https://github.com/user-attachments/assets/7fd6206f-2dfe-42c3-a118-6c82c8adc965)

   

## Task 2 - API Command Demonstrations 
1. Show Contact API Command
   ![1](https://github.com/user-attachments/assets/c2eccbe8-9f5c-4820-9b7d-91ea8a498177)

2. Add Contact API Command
   ![2](https://github.com/user-attachments/assets/ba55b5d4-f3b2-4dad-932b-dd5d36c71c6b)

3. Delete Contact API Command
   ![3](https://github.com/user-attachments/assets/860ae6e4-eb7c-4d6f-83de-8c5be55d785f)

4. Update Contact API Command
   ![4](https://github.com/user-attachments/assets/67f4a1a7-76e4-4a3b-8475-7fcdc759b64e)

5. Show Phone API Command
   ![5](https://github.com/user-attachments/assets/5a639ad1-dddd-4c1a-b6b8-caab9a47600d)

6. Add Phone API Command
    ![6](https://github.com/user-attachments/assets/c680bcea-06a3-4eaf-8af1-b2a91d703d75)

7. Delete Phone API Command
    ![7](https://github.com/user-attachments/assets/dd06bf16-37da-4c18-92e3-2ebe51102388)

8. Update Phone API Command
    ![8](https://github.com/user-attachments/assets/7f4c3b3d-f577-497d-bd59-66c9999963ff)


## Access Database
1 **Plsql Cheat Sheet:**
You can refer to the PostgreSQL cheat sheet [here](https://www.postgresqltutorial.com/postgresql-cheat-sheet/).

2 **Know the Container ID:**
To find out the container ID, execute the following command:
   ```bash
   docker ps
    9958a3a534c9   testsystem-nginx           "/docker-entrypoint.…"   6 minutes ago   Up 6 minutes   0.0.0.0:80->80/tcp   testsystem-nginx-1
    53121618baa4   testsystem-frontend        "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   3000/tcp             testsystem-frontend-1
    c89e46ac94b0   testsystem-api             "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   5000/tcp             testsystem-api-1
    9f4aea7cf538   postgres:15.3-alpine3.18   "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   5432/tcp             testsystem-db-1
   ```
3. Running the application

**docker compose command:**
   ```bash
   docker compose up --build
   ```

4 **Access postgreSQL in the container:**
Once you have the container ID, you can execute the container using the following command:
You will see the example of running the PostgreSQL inside the container.
   ```bash
   docker exec -it testsystem-db-1 psql -U postgres
   choiruzain@MacMarichoy TestSystem % docker exec -it testsystem-db-1 psql -U postgres                                       
   psql (15.3)
   Type "help" for help.
   
   postgres=# \dt
             List of relations
    Schema |   Name   | Type  |  Owner   
   --------+----------+-------+----------
    public | contacts | table | postgres
    public | phones   | table | postgres
   (2 rows)
  
    postgres=# select * from contacts;
    id |  name  |         createdAt         |         updatedAt         
   ----+--------+---------------------------+---------------------------
     1 | Helmut | 2024-08-08 11:57:57.88+00 | 2024-08-08 11:57:57.88+00
    (1 row)
    postgres=# select * from phones;
    id | phone_type |   number    | contactId |         createdAt          |         updatedAt          
   ----+------------+-------------+-----------+----------------------------+----------------------------
     1 | Work       | 081431      |         1 | 2024-08-08 11:59:04.386+00 | 2024-08-08 11:59:04.386+00


postgres=# select * from contacts;
   ```
Replace `container_ID` with the actual ID of the container you want to execute.

## Executing API

### Contact API


1. Add contacts API  (POST)
```bash
http post http://localhost/api/contacts name="Choiru"
        
choiruzain@MacMarichoy-7 TestSystem % http post http://localhost/api/contacts name="Choiru"
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 102
Content-Type: application/json; charset=utf-8
Date: Thu, 08 Aug 2024 21:01:53 GMT
ETag: W/"66-FmPYAaIkyQoroDwP2JsAZjWTAxs"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express

{
"createdAt": "2024-08-08T21:01:53.017Z",
"id": 1,
"name": "Choiru",
"updatedAt": "2024-08-08T21:01:53.017Z"
}

```
2 Get contacts API  (GET)

```bash
http get http://localhost/api/contacts


choiruzain@MacMarichoy-7 TestSystem % http get http://localhost/api/contacts
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 104
Content-Type: application/json; charset=utf-8
Date: Thu, 08 Aug 2024 21:04:58 GMT
ETag: W/"68-V+4KuL2xahYt8YAkKG6rKdR7wHg"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express

[
{
"createdAt": "2024-08-08T21:01:53.017Z",
"id": 1,
"name": "Choiru",
"updatedAt": "2024-08-08T21:01:53.017Z"
}
]


```
3. Show/create the API commmand to delete the contacts (DELETE)

```bash





```

4. Show/create the API command to edit the contacts (PUT)
```
http get http://localhost/api/contacts/1/phones

```

### Phone API
