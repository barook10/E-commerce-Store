# E-commerce Store Documentation

The E-commerce Store is a web application that allows users to browse and view product listings from a small e-commerce store. The application is built using React and React Router, and it provides features such as product listing, product details, error handling, and navigation.

## Table of Contents
1. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Application Locally](#running-the-application-locally)
2. [Application Structure](#application-structure)
3. [Features](#features)
4. [Usage](#usage)
5. [Customization](#customization)
6. [Troubleshooting](#troubleshooting)


## Getting Started <a name="getting-started"></a>

### Prerequisites
- Node.js and npm installed on your machine

### Installation
1. Clone the repository:
git clone https://github.com/yourusername/e-commerce-store.git

2. Navigate to the project directory:
cd e-commerce-store

3. Install dependencies:
npm install

### Running the Application Locally
1. Start the development server:
npm start

2. Open your web browser and go to:
http://localhost:3000

## Application Structure

- **src**
- **components**: Contains various UI components
 - **Header**: Renders the header navigation bar
 - **Footer**: Renders the footer
 - **ProductList**: Displays the list of products
 - **ProductDetails**: Displays the details of a selected product
- **context**: Contains the ErrorContext for error handling
- **images**: Contains images used in the application
- **services**: Contains API fetch functions
- **utils**: Contains utility functions
- **App.js**: The main component that handles routing
- **index.js**: The entry point of the application

## Features

### Product Listing
- View a list of products on the homepage.
- Each product displays its name, price, rating, and image.

### Product Details
- Clicking on a product navigates to its details page.
- The details page displays additional information about the product, including description and price.

### Error Handling
- Error messages are displayed when API requests fail.
- Error messages appear at the top of the page to alert users.

### Header and Footer Navigation
- Header provides navigation links to the homepage (product list).
- Footer provides additional information and links.

## Usage

### Navigating the Application
- Open the application in your web browser.
- Use the header navigation to switch between pages.

### Viewing Product Listings
- On the homepage, you'll find a list of products.
- Each product displays basic information.
- Click on the "Products" link in the header to scroll to the product list.

### Viewing Product Details
- Click on a product in the list to view its details.
- The details page provides more information about the selected product.

### Error Handling
- If an error occurs while fetching data, an error message will be displayed at the top of the page.

## Customization

### Styling and Design
- Modify the CSS files in the `src` folder to adjust the styling and design of the components.

### Error Messages
- Customize the error messages in the `fetchProducts` function and the `ErrorProvider` in the `context/ErrorContext.js` file.

## Troubleshooting

- If you encounter issues, make sure you have Node.js and npm installed.
- Check for any error messages in the console for debugging information.
