import express, { Application } from "express";
import router from "./router";
import { AppDataSource } from "./data-source";

// -----------------------------------------------------------------------------

const app: Application = express();
const port = process.env.PORT || 3000;

// -----------------------------------------------------------------------------

app.use(express.json());
app.use(router);

// -----------------------------------------------------------------------------

(async () => {
   try {
      await AppDataSource.initialize();

      console.log("------------------------------------");

      // data source
      console.log("💾 Data Source has been initialized!");

      // server
      app.listen(port, () => console.log(`⚡️ Server running at port ${port}`));
   } catch (err) {
      console.error("⛔ Error during Data Source initialization", err);
   }
})();
