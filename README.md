# Finance API

This is a RESTful API for managing personal financial records. Users can record their income and expenses, retrieve past transactions, and get summaries by category or time period.

## Features

- Add new income and expense transactions.
- Retrieve all transactions or filter by category and date.
- Get a summary of total income, total expenses, and balance.
- Optional user authentication (if implemented).

## Technology Stack

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB
- **Other Tools**: Mongoose, dotenv

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/) installed.
- A running MongoDB instance or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Clone the Repository

git clone https://github.com/your-username/finance-api.git
cd finance-api

### Install Dependencies

npm install

### Configure Environment Variables

Create a .env file in the root directory and add the following:

MONGO_URI=your mongodb connection string<br />
PORT=5000 <br />

OR <br />
In the database url use this path (MONGO_URL)
`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/?retryWrites=true&w=majority&appName=${process.env.MONGO_DB}`; <br />
MONGO_USER= Your username <br />
MONGO_PASSWORD=Your password <br />
MONGO_HOST= Your host <br />
MONGO_DB=Your db name <br />

### run the server

npm start

### API Endpoints

1. Create a Transaction <br />
   URL: POST /transactions <br />
   Description: Adds a new income or expense transaction.
   ![image](https://github.com/user-attachments/assets/72bea76d-4550-47eb-8b53-c369a624d404)

2. Get All Transactions <br />
   URL: GET /transactions <br />
   Description: Retrieves all transactions.
   ![image](https://github.com/user-attachments/assets/6f591922-af98-40a5-9fac-f41858afdc4c)

3. Get a Transaction by ID <br />
   URL: GET /transactions/:id
   Description: Retrieves a specific transaction by ID.
   ![image](https://github.com/user-attachments/assets/81514dfa-3a0b-4319-b165-d7200426b1b6)

4. Update a Transaction <br />
   URL: PUT /transactions/:id <br />
   Description: Updates a transaction by ID.
   ![image](https://github.com/user-attachments/assets/f279ae4f-090f-4b31-9b47-cef4da93823f)

5. Delete a Transaction <br />
   URL: DELETE /transactions/:id <br />
   Description: Deletes a specific transaction by ID.
   ![image](https://github.com/user-attachments/assets/79553793-1581-4dc6-8d5c-4b973451f726)

6. Get Transaction Summary <br />
   URL: GET /summary <br />
   Description: Retrieves a summary of total income, total expenses, and balance.
   ![image](https://github.com/user-attachments/assets/fe46c9a4-64f2-4ad8-94cb-274003c0259c)
