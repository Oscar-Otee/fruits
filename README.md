# FruWeb The Home of Fruits

Welcome to the Home of Fruits, where you can trust us with all your favorite fruits
data!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Instructions

For this project, I???ll be building out a React application that displays a
list of fruits, among other features.

## Technologies Used
- CSS.
- React.


## Files created
- FavoriteFruit.js
- FavoriteFruitsContainer.js
- FavoriteFruitsHeader.js
- FavoriteFruitsList.js
- About.js
- AddFruitForm.js
- App.js
- Fruit.js
- FruitContainer.js
- FruitsHeader.js
- FruitsList.js
- Header.js
- Home.js
- NavBar.js
- Search.js
- Select.js
-App.css
- index.css
- index.js
- db.json
- README.md

## Components created
- <FavoriteFruit>
- <FavoriteFruitsContainer>
- <FavoriteFruitsHeader>
- <FavoriteFruitsList>
- <About>
- <AddFruitForm>
- <App>
- <Fruit>
- <FruitContainer>
- <FruitsHeader>
- <FruitsList>
- <Header>
- <Home>
- <NavBar>
- <Search>
- <Select>

## Routes created
- <FavoriteFruitsContainer>
- <About>
- <FruitContainer>
- <Home>
- <NavBar>



## Setup

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `3000`.
3. In a new terminal, run `npm start`. This will run your React app on port `8000`.

Make sure to open
[http://localhost:3000/fruits](http://localhost:3000/fruits) in the
browser to verify that your backend is working before you proceed!

The app uses [Semantic UI](https://semantic-ui.com/) for styling.

If you are unfamiliar with HTML tables, take a look at the
[docs with an example here](https://www.w3schools.com/html/html_tables.asp)

## Endpoints

The base URL for your backend is: `http://localhost:3000`

## Deliverables

As a user, I should be able to:

- See a table of the fruits.
- Fill out and submit the form to add a new fruit. This should add the new
  fruit to the table **as well as post the new fruit to the backend
  API for persistence**.
- Filter fruits by typing into the search bar. Only fruits with a
  description matching the search term should be shown in the fruits
  table.
- Add a fruit to my favorites and see it on a separate list.
- Sort fruits alphabetically by category or description.
- Delete a fruit which will remove it from the table and delete it from the backend.
- Show/hide favorite fruits.

### Endpoints for Deliverables

#### GET /fruits

Example Response:

```json
[{
      "genus": "Malus",
      "name": "Apple",
      "id": 1,
      "family": "Rosaceae",
      "order": "Rosales",
      "nutritions": {
        "carbohydrates": 11.4,
        "protein": 0.3,
        "fat": 0.4,
        "calories": 52,
        "sugar": 10.3
      }
    },
    {
      "genus": "Prunus",
      "name": "Apricot",
      "id": 2,
      "family": "Rosaceae",
      "order": "Rosales",
      "nutritions": {
        "carbohydrates": 3.9,
        "protein": 0.5,
        "fat": 0.1,
        "calories": 15,
        "sugar": 3.2
      }
    }
]
```

#### POST `/fruits`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
      "genus": "Malus",
      "name": "Apple",
      "id": 1,
      "family": "Rosaceae",
      "order": "Rosales",
      "nutritions": {
        "carbohydrates": 11.4,
        "protein": 0.3,
        "fat": 0.4,
        "calories": 52,
        "sugar": 10.3
      }
    },
    {
      "genus": "Prunus",
      "name": "Apricot",
      "id": 2,
      "family": "Rosaceae",
      "order": "Rosales",
      "nutritions": {
        "carbohydrates": 3.9,
        "protein": 0.5,
        "fat": 0.1,
        "calories": 15,
        "sugar": 3.2
      }
    },
```


#### DELETE /fruits/:id

Example Response:

```json
{}
```

**MS**
Copyright (c) 2022 **Oscar Oluoch Aboh Otee**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

