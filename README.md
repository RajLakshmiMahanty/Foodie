
# Food Delivery App

Welcome to the repository for the Food Delivery App! This repository contains both the frontend and backend code for the application.

## Overview

The Food Delivery App is a full-stack web application that allows users to browse food items, place orders, and manage their account. It consists of a frontend built with React.js and a backend built with Node.js, Express.js, and MongoDB.

### Frontend

#### Features:
- **User Authentication**: Sign up and log in securely.
- **Browsing Food Items**: Explore various categories of food items.
- **Adding to Cart**: Add items to the cart for later purchase.
- **Managing Cart**: View and remove items from the cart.
- **Placing Orders**: Place orders for items in the cart.
- **Viewing Order History**: See past order history.

#### Technologies Used:
- React.js
- React Router
- HTML/CSS
- JavaScript
- Fetch API

#### How to Run:
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.

### Backend

#### Features:
- **User Authentication**: Endpoints for user registration and login. User passwords are securely hashed using bcrypt for enhanced security.
- **Order Management**: Handle order-related operations such as placing orders and fetching order history.
- **Fetching Food Data**: Endpoints to fetch food data for display on the frontend.

#### Technologies Used:
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt for password hashing
- CORS

#### How to Run:
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the server using `npm start`.

#### Endpoints:
- **POST /api/createuser**: Create a new user account.
- **POST /api/displaydata**: Fetch food data for display.
- **POST /api/orderdata**: Handle order-related operations (placing orders, fetching order history, etc.).

#### Security:
User passwords are securely hashed using bcrypt before being stored in the database, ensuring enhanced security and protection against unauthorized access.

## Overall Architecture

The frontend interacts with the backend through RESTful API endpoints. When a user performs an action such as adding items to the cart or placing an order, the frontend sends requests to the backend, which then processes the requests and interacts with the database as necessary. The frontend receives responses from the backend and updates the user interface accordingly.

This architecture allows for a separation of concerns, making the codebase easier to manage and scale. The frontend and backend can be developed, tested, and deployed independently, enabling faster development cycles and better collaboration among team members.

