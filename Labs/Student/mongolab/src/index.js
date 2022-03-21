import app from "./server.js";
import config from "./config/config.js";
import connect from "./db/connect.js";

connect()
  .then(() =>
    app.listen(config.app.PORT, () => {
      config.logger.info(
        `Server running at http://localhost:${config.app.PORT}. ${config.db.url}`
      );
    })
  )
  .catch((e) => {
    console.log("Error starting the server: ", e);
  });
