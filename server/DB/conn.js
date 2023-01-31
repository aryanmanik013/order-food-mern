const mongoose = require("mongoose");
const DB =
  "mongodb+srv://aryan:aryan123@cluster0.ggfuxfo.mongodb.net/mernstack?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    // useCreateIndex: true,
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Start"))
  .catch((error) => {
    console.log(error.message);
  });
