# Backend_Stage_Two
**Person API Documentation**
This documentation provides details on how to interact with the Person API. The Person API allows you to perform CRUD (Create, Read, Update, Delete) operations on a "person" resource.

**Base URL**
The base URL for this API is: https://backendstagetwo.onrender.com/api

**Endpoints**
**Create a New Person**
Endpoint: /

Method: POST

Description: Create a new person.

**Request Format:**
{
  "name": "John Doe"
}

**Response Format:**

201 Created on success:
{
  "_id": "12345abcde",
  "name": "John Doe"
}

400 Bad Request if a person with the same name already exists:
{
  "error": "Person with the same name already exists"
}

500 Internal Server Error on server error.

**Get a Person by ID or Name**
Endpoint: /:identifier

Method: GET

Description: Fetch details of a person by their ID or name.

Request Parameters:

identifier (string): The person's ID or name.
Response Format:

200 OK on success:
{
  "_id": "12345abcde",
  "name": "John Doe"
}
404 Not Found if the person with the specified ID or name does not exist:
{
  "error": "Person not found"
}
500 Internal Server Error on server error.

**Update a Person by ID or Name**
Endpoint: /:identifier

Method: PUT

Description: Update the details of a person by their ID or name.

Request Parameters:

identifier (string): The person's ID or name.
Request Format:
{
  "name": "Updated Name"
}

Response Format:

200 OK on success:
{
  "message": "Person updated successfully",
  "person": {
    "_id": "12345abcde",
    "name": "Updated Name"
  }
}
404 Not Found if the person with the specified ID or name does not exist:
{
  "error": "Person not found"
}
500 Internal Server Error on server error.

**Delete a Person by ID or Name**
Endpoint: /:identifier

Method: DELETE

Description: Delete a person by their ID or name.

Request Parameters:

identifier (string): The person's ID or name.
Response Format:

200 OK on success:
{
  "message": "Person deleted"
}

404 Not Found if the person with the specified ID or name does not exist:
{
  "error": "Person not found"
}

500 Internal Server Error on server error.

**Usage Examples**
**Create a New Person**
Request:
POST /api
Content-Type: application/json

{
  "name": "John Doe"
}

Response:
HTTP/1.1 201 Created
Content-Type: application/json

{
  "_id": "12345abcde",
  "name": "John Doe"
}

**Get a Person by ID or Name**
Request:
GET /api/12345abcde
Response:
HTTP/1.1 200 OK
Content-Type: application/json

{
  "_id": "12345abcde",
  "name": "John Doe"
}

Update a Person by ID or Name
Request:
PUT /api/12345abcde
Content-Type: application/json

{
  "name": "Updated Name"
}
Response:
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "Person updated successfully",
  "person": {
    "_id": "12345abcde",
    "name": "Updated Name"
  }
}
Delete a Person by ID or Name
Request:
DELETE /api/12345abcde
Response:
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "Person deleted"
}


Error Handling
400 Bad Request: When trying to create a person with the same name that already exists.
404 Not Found: When attempting to get, update, or delete a person with an invalid ID or name or when the person does not exist.
500 Internal Server Error: In case of server errors.

