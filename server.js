const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonserver.defaults({
    stactic: ".build"
})

const port = process.env.PORT || 3000;
server.use(middlewares);
server.use(
    jsonServer.rewriter({
        "/api/*": "/$1",
    })
);
server.use(router);
server.listen(port, () => {
    console.log(`Server is running on ${port}`);
})