const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT;
const BaseUrl = process.env.BASE_URL;

app.listen(PORT, () => {
  console.log(`Server start at ${BaseUrl}${PORT}`);
});
