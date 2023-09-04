import  express  from "express";
import displayRoutes from "express-routemap";
import productsRoutes from "./routes/products.routes.js"
import { ErrorHandler } from "./middlewares/errors/index.js"

const app = express();

const PORT = 8000; 

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/products/", productsRoutes);
app.use(ErrorHandler);

app.listen(PORT, () => {
    displayRoutes(app);
    console.log(`Listening on port ${PORT}`);
});