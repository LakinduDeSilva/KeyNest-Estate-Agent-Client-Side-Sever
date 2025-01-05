# KeyNest Estate Agent Application

This project is a property listing application built with React. It allows users to search for properties, view property details, and manage a list of favourite properties.

## Getting Started

To get started with this project, you need to have Node.js and npm installed on your machine. Follow the instructions below to set up and run the project.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/LakinduDeSilva/KeyNest-Estate-Agent-Client-Side-Sever.git
   cd keynest

2. Install the dependencies:

    ```sh
    npm install
    ```

**Additional Dependencies**

This project utilizes the following additional packages and dependencies:

- **`react-router-dom`**: For routing and navigation.
- **`react-bootstrap and bootstrap`**: For styling and responsive design.
- **`react-icons`**: For using icons in the application.
- **`react-tabs`**: For creating tabbed interfaces.
- **`prop-types`**: For type checking of props.

**To install these dependencies, run:**

```sh
npm install react-router-dom react-bootstrap bootstrap react-icons react-tabs prop-types
```

**Available Scripts**

In the project directory, you can run:

```sh
npm start
```

Runs the app in the development mode.

Open `http://localhost:3000` to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

```sh
npm test
```

Launches the test runner in the interactive watch mode.

See the section about `running tests` for more information.

```sh
npm run build
```

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!


See the section about deployment for more information.

```sh
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

**Project Structure**

The project structure is as follows:

```sh
keynest/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── HomePage.js
│   │   ├── SearchBar.js
│   │   ├── PropertyList.js
│   │   ├── PropertyCard.js
│   │   ├── PropertyDetails.js
│   │   ├── FavouritesList.js
│   │   └── Footer.js
│   ├── data/
│   │   └── properties.json
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
└── README.md
```