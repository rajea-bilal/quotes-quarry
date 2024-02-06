
# React Frontend for Quotes Quarry

## 🧠 Problem

As a lover of books, I often encountered captivating passages that I wished to preserve beyond mere highlights that would be forgotten with time. Realizing the issue, led me to develop an app that solves this problem - welcome to Quotes Quarry!

## 🔖  Solution

Quotes Quarry allows users to seamlessly add noteworthy excerpts from books, complete with author and name of book. With ability to share some of these pieces on social media. The app is connected to an Express REST API and uses a PostgreSQL database for efficient querying. 

## 📡 Technology Used

- **React:** Frontend framework for building a dynamic and responsive user interface.
- **Express:** Backend framework to handle API requests and interact with the database.
- **PostgreSQL:** Database to store user information and quotes securely.
- **Node.js:** Runtime environment for running the server-side application.
- **CSS:** Styling to enhance the user experience and make the app visually appealing.

## Improvements

- Implement end-to-end testing via Playwright
- Improve the accessibility of the app 
- Implement user authorization and login feature

## 🛠️ Installation Process

To run this project locally, follow these steps:

### Prerequisites

- Node.js installed on your machine
- PostgreSQL database up and running

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/rajea-bilal/quotes-quarry.git
    ```

2. **Navigate to the project folder:**

    ```bash
    cd quotes-quarry
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up the database:**

    - Create a PostgreSQL database.
    - Update the database configuration in the `server/config/db.js` file.

5. **Run the server:**

    ```bash
    npm run dev
    ```


