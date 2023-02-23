import app from "./app";
import router from "./routes/pet.router";
import routerUser from "./routes/user.router";

app.use("/", router);
app.use("/" , routerUser)