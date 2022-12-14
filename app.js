const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));




// const express = require("express");
// const app = express();
// const path = require("path");
// const port = process.env.PORT || 3000;
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("build"));
//     app.get("*", (req, res) => {
//         req.sendFile(path.resolve(__dirname, "build", "index.html"));
//     })
// }
// app.listen(port, (err) => {
//     if (err) return console.log(err);
//     console.log("Server running on port: ", port);
// })



// const server = jsonServer.create();
// const router = jsonServer.router("./db.json");
// const middlewares = jsonserver.defaults({
//     stactic: ".build"
// })

// const port = process.env.PORT || 3000;
// server.use(middlewares);
// server.use(
//     jsonServer.rewriter({
//         "/api/*": "/$1",
//     })
// );
// server.use(router);
// server.listen(port, () => {
//     console.log(`Server is running on ${port}`);
// })