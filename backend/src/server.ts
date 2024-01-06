require("dotenv").config();
import app from "./index";

const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
   console.log(`listning on port ${PORT}`)
});

