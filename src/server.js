//here we start the server

require("dotenv").config();

const app = require("./app");
const connectToDB = require("./config/db");

const PORT = 3000;

connectToDB();

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
