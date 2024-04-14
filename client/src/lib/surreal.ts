import {Surreal} from "surrealdb.node";

const db = new Surreal()

db.connect("ws://127.0.0.1:8000")
db.signin({
    username: "root",
    password: "root"
})
db.use({
    ns: "tbh",
    db: "tbh"
});

export default db;