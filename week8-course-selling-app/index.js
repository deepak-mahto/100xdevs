const express = require("express");
const { createUserRoutes } = require("./routes/user");
const { createCourseRoutes } = require("./routes/course");
const app = express();
const port = 3000;

createUserRoutes(app);
createCourseRoutes(app);

app.listen(port, () => {
  console.log(`App listening at port ${3000}`);
});
