
import { GenezioDeploy } from "@genezio/types";
import db from "./lib/surreal";


@GenezioDeploy()
export class Get {
    getTests() {
        return db.query("SELECT * FROM runs").then(
            (res: any) => {
                return res[0];
            }
        )
    }
}