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

![Screenshot 2024-08-01 195529](https://github.com/user-attachments/assets/8c36a736-54e7-42ec-b543-0bcbd7b34432)

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

  ![Screenshot 2024-08-01 195700](https://github.com/user-attachments/assets/4bc097be-0838-43b1-9748-accd05e1daf1)


## 5. Running the Application
This will start the React development server and open the application in your default web browser.


    
    npm run dev

    

![Screenshot 2024-08-01 195755](https://github.com/user-attachments/assets/8d1f2fc6-37e4-4492-9ce6-9934b75537d0)



## 6. For Updating the Update Box content
    Go to file updates.json and edit the date and content section written in the code format
    updates.json file is present under src/components/UpdateBox
    
![Screenshot 2024-08-01 194434](https://github.com/user-attachments/assets/5a9808a1-2624-4480-ae71-d6f97dc998e2)

Open the link of your localhost and you can see the website

## 7. Note
  **This website is not deployed publicly anywhere. Deployment and hosting can be done only by the Central Library BU Staff. Ensure you have the necessary permissions and credentials to access the deployment server if you are part of the Central Library BU Staff.**


## 8. Copyright

© 2024 Central Library, Barkatullah University. All rights reserved.

Unauthorized copying, distribution, or modification of this software is strictly prohibited. For permissions beyond the scope of this license, please contact the Central Library BU Staff. All trademarks, service marks, trade names, product names, and logos appearing on the site are the property of their respective owners.
