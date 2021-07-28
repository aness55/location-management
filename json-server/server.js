const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require('cors')


const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.use(cors())
// /!\ Bind the router db to the app
app.db = router.db;

const rules = auth.rewriter({
  // Permission rules
  users: 660,
  locations: 660,
});

// You must apply the auth middleware before the router
app.use(rules);
app.use(auth);
app.use(router);
app.listen(3000, function() {
    console.log('Server listening to port', 3000)
});
