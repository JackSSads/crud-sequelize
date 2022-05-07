const express = require("express");
const exphbs = require("express-handlebars");

const conn = require("./db/conn");
const Products = require("./models/Products");

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get('/products', async (req, res) => {
    const products = await Products.findAll({ raw: true });

    res.render("products", { products });
});

app.post("/addproducts", async (req, res) => {
    const nameProduct = req.body.nameProduct;
    const valueProduct = req.body.valueProduct;

    await Products.create({ nameProduct, valueProduct });

    res.redirect("/");
});

app.get('/editproduct/:id', async (req, res) => {
    const id = req.params.id;

    const data = await Products.findOne({ raw: true, where: { id: id } });

    res.render('editproduct', { data });
})

app.post('/update/:id', async (req, res) => {
    const id = req.params.id;
    const nameProduct = req.body.nameProduct;
    const valueProduct = req.body.valueProduct;

    const data = {
        nameProduct,
        valueProduct,
    };

    await Products.update(data, { where: { id: id } });

    res.redirect('/products');
})

app.post('/delete/:id', async (req, res) => {
    const id = req.params.id;

    await Products.destroy({ where: { id: id }});

    res.redirect('/products');
});

app.get("/", (req, res) => {
    res.render("home");
});

conn.sync().then(() => {
    app.listen(3000);
}).catch((err) => { console.log(err) });
