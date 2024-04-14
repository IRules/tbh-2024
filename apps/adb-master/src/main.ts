import express from 'express';
import { exec } from 'child_process';
import {Surreal} from "surrealdb.node";

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(express.json());

const db = new Surreal();

db.connect('ws://127.0.0.1:8000').then(
  () => {
    db.signin({
      username: 'root',
      password: 'root'
    }).then(
      () => {
        db.use(
          {ns: "tbh", db: "tbh"}
        )
      }
    )
  }
);


app.post('/adb-webhook', (req, res) => {

  console.log(req.body)

  res.status(200).send({message: 'Received'});

  //generate a random uuid
  const uuid = Math.random().toString(36).substring(7);
  //create a folder with the uuid
  exec(`mkdir C:\\Users\\IRules\\Documents\\tbh\\${uuid}`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
  });

  //clone the repo to the folder
  exec(`git clone ${req.body.repository.url}.git C:\\Users\\IRules\\Documents\\tbh\\${uuid}`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    exec(`cd C:\\Users\\IRules\\Documents\\tbh\\${uuid} && C:\\Users\\IRules\\Documents\\tbh\\${uuid}\\gradlew.bat connectedAndroidTest`, (err, stdout, stderr) => {
      if (err) {
        db.create("runs", {
          commitIO: req.body.node_id,
          status: "failure",
          creator: req.body.repository.owner.login,
          message: stderr
        })

        return;
      }

      db.create("runs", {
        commitIO: req.body.node_id,
        status: "success",
        creator: req.body.repository.owner.login,
        message: stdout
      })

    });
  });
});

app.get('/', (req, res) => {
  res.send({message: 'Hello API'});
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
