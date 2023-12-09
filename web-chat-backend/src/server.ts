import { app, serverHttp } from "./app";
import { AppDataSource } from "./data-source";

const port: number | null = 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database is connected");
    serverHttp.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.log(error));
