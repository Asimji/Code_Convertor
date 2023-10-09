# Code Convertor

This repository contains the code for the Shayari Generation web application. The application allows users to convert, debug and quality check of Code. It consists of both frontend and backend components.

## Prerequisites

- Node.js (v12 or higher)

## Getting Started

1. Clone the repository:
    ```
    git clone https://github.com/Asimji/Code_Convertor.git
    cd Code_Convertor
    ```


2. Install dependencies for both frontend and backend:

    ```
    cd frontend
    npm install
    cd ../backend
    npm install
    ```


3. Set up environment variables for the backend:

    Create a `.env` file in the `backend` folder and provide your OpenAI API key:

    ```
    OPENAI_API_KEY=your_openai_api_key_here
    PORT=8000
    ```

    Replace `your_openai_api_key_here` with your actual OpenAI API key.

4. Start the frontend development server:

    ```
    cd frontend
    npm start
    ```

    The frontend will run on `https://code-convertor-kappa.vercel.app/`.

5. Start the backend server:

    ```
    cd backend
    npm start
    ```


    The backend will run on `http://localhost:8000`.

## Frontend

The frontend is built using React.js and Chakra UI for the user interface. It communicates with the backend API to generate content based on user-provided keywords.

![Homepage](./frontend/src/images/Screenshot%20(161).png)

## Backend

The backend is built using Express.js and interacts with the OpenAI API to generate Shayari, Jokes, Stories, and Quotes based on user-provided keywords.

## Deployed URL

The web application is deployed at: [https://ai-content-generation.vercel.app/](https://code-convertor-kappa.vercel.app/)

## Dependencies

### Frontend

- react: JavaScript library for building user interfaces
- react-dom: Integration of React with the DOM
- fetch: Promise-based HTTP client for making API requests
- @chakra-ui/react: UI component library for React
- framer-motion: Library for animations in React

### Backend

- express: Web framework for Node.js
- dotenv: Load environment variables from `.env` file
- cors: Enable Cross-Origin Resource Sharing (CORS)
- openai: Official OpenAI GPT-3 API library

## How to Use

1. The application allows users to conver, debug, quality check of Code.

2. Enter a Code in the "Left Side" Container.

3. Select the options you want to perform action .

4. For Convert option Select the language(java/c/c++/python..) and press convert button.

5. For Debug and Quality Check directly press buttons.


## Contributing

If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE for details.
