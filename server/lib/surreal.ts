import {Surreal} from "surrealdb.node";

const db = new Surreal();

db.connect("http://localhost:8080").then(
    async () => await db.signin({
        username: 'root',
        password: 'root',
    }),
    (err) => console.error("Error connecting to SurrealDB", err)
)

export default db;