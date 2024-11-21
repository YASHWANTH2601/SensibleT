# Finance API

This is a RESTful API for managing personal financial records. Users can record their income and expenses, retrieve past transactions, time period.

## Features

- Add new income and expense transactions.
- Retrieve all transactions or filter by category and date.

## Technology Stack

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB
- **Other Tools**: Mongoose, dotenv

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/) installed.
- A running MongoDB instance or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Clone the Repository

git clone https://github.com/YASHWANTH2601/SensibleT
<br />
cd SensibleT

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
npm run dev

### Testing the API
<br />
Use tools like Postman or curl to test the endpoints:

POST /api/transactions/<br />
GET /api/transactions/<br />
PUT /api/transactions/:id/<br />
GET /api/transactions/:id/<br />

Deployed url<br />
[click here] (https://sensiblet.onrender.com)
