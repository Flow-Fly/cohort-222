## HBS INTRO CODE ALONG

1. Init project
  ```javascript
    npm init --y
  ```
2. Install dependencies
  ```javascript
    npm i express hbs nodemon
  ```
3. Add .gitignore file
4. Create folder structure: `/views`, `/public`, `app.js`
5. Set up static files in `app.js`
  ```javascript
    app.use(express.static('public'));
  ```
6. Set up views engine (HBS)
  ```javascript
    app.set('views', __dirname + '/views');
    app.set('view engine', 'hbs');
  ```
7. Create Application layout (`/views/layout.hbs`)
8. Create routes and views
9. Set up partials
  ```javascript
    hbs.registerPartials(__dirname + `/views/partials`);
  ```
10. Create partials