# URL Shortener

A simple URL shortener application built with Express.js, MongoDB, Mongoose, and ShortID.

## Features

- Shorten long URLs
- Redirect to original URLs using shortened links
- Track the number of clicks for each shortened URL
- View all generated links with their details

## Technologies Used

- [Express.js](https://expressjs.com/) - A web application framework for Node.js
- [MongoDB](https://www.mongodb.com/) - A NoSQL database
- [Mongoose](https://mongoosejs.com/) - A MongoDB object modeling tool for Node.js
- [ShortID](https://www.npmjs.com/package/shortid) - A library to generate short, unique, non-sequential IDs

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm (Node Package Manager) installed
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/prabal-verma/url-shortner.git

## Steps to Set Up the Project

### Navigate to the project directory
```bash
cd url-shortener
```bash
npm install
```



### Start MongoDB

Ensure MongoDB is running on your local machine or update the MongoDB connection string in the `connect.js` file.

### Run the application
````bash
npm start
````

## Usage

1. Open your browser and go to [http://localhost:8001](http://localhost:8001).
2. Use the form to enter a URL and click "Shorten" to generate a shortened URL.
3. Use the shortened URL to redirect to the original URL.
4. View all generated links and their click counts on the homepage.

## API Endpoints

### Create Shortened URL
- URL: `/url`
- Method: `POST`
- Body Parameters:
  - `url` (string): The original URL to be shortened.

### Redirect to Original URL
- URL: `/:shortId`
- Method: `GET`
- URL Parameters:
  - `shortId` (string): The unique ID for the shortened URL.

### View All Generated Links
- URL: `/`
- Method: `GET`

## License

This project is licensed under the MIT License - see the LICENSE file for details.


## Acknowledgments

Thanks to the authors of Express.js, MongoDB, Mongoose, and ShortID for their awesome tools.


