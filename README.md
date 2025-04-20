# Central-Library-BU

## Overview
The Central Library website is a web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) majorly ReactJs. This documentation provides detailed instructions on how to set up, run, and deploy the React front end of the application.

## Table of Contents
1. Prerequisites
2. Project Setup
3. Available Scripts
4. Project Structure
5. Running the Application
6. For Updating the Update Box content
7. Note
8. Copyright

## 1. Prerequisites
Before you begin, ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/en/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later) or [Yarn](https://yarnpkg.com/)

## 2. Project Setup
Open Terminal and run the following commands:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Chinmayee7697/Central-Library-Barkatullah-University.git

2. **Navigate to the client directory:**
   ```bash
    cd vite-project

3. **Install the dependencies:**
   Using npm:
   ```bash
     npm install

![Screenshot 2024-08-01 195529](https://github.com/user-attachments/assets/c264b5e3-1c8d-434c-b12f-35f082e094b5)


## 3. Available Scripts
In the project directory, you can run the following scripts:

1.
npm run dev

Runs the app in the development mode.
Open http://localhost:5173 to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.

2. 
    npm test or yarn test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

3.

    npm run build or yarn build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
See the section about deployment for more information.


## 4. Project Structure
The project structure is organized as follows:

           vite-project/
        ├── public/
        │   ├── index.html
        │   └── ...
        ├── src/
        │   ├── assets/
        │   ├── components/
        │   ├── pages/
        │   ├── services/
        │   ├── App.js
        │   ├── index.js
        │   └── ...
        ├── package.json
        └── ...


- public/: Contains static assets and the HTML template.
- src/: Contains the React application code.
- assets/: Stores images, fonts, and other static assets.
- components/: Contains reusable components.
- pages/: Contains different pages of the application.
- services/: Contains API calls and other services.
- App.js: Main application component.
- index.js: Entry point of the React application.

  ![Screenshot 2024-08-01 195700](https://github.com/user-attachments/assets/a7399412-dd5a-4e78-9f9d-86c7d5dd0671)



## 5. Running the Application
This will start the React development server and open the application in your default web browser.


    
    npm run dev

    

![Screenshot 2024-08-01 195755](https://github.com/user-attachments/assets/6df8d69b-82bd-4111-ab2f-b9981d80843d)




## 6. For Updating the Update Box content
    Go to file updates.json and edit the date and content section written in the code format
    updates.json file is present under src/components/UpdateBox

![Screenshot 2024-08-01 194434](https://github.com/user-attachments/assets/212226f5-d291-4a3d-8f0e-9c7520b15b4a)


Open the link of your localhost and you can see the website

## 7. Note
  **This website is not deployed publicly anywhere. Deployment and hosting can be done only by the Central Library BU Staff. Ensure you have the necessary permissions and credentials to access the deployment server if you are part of the Central Library BU Staff.**


## 8. Copyright

© 2024 Central Library, Barkatullah University. All rights reserved.

Unauthorized copying, distribution, or modification of this software is strictly prohibited. For permissions beyond the scope of this license, please contact the Central Library BU Staff. All trademarks, service marks, trade names, product names, and logos appearing on the site are the property of their respective owners.

## 9. Live Project
This website is live on [https://central-library-barkatullah-university-1.onrender.com/](https://central-library-barkatullah-university-1.onrender.com/).

