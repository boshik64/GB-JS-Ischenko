let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/todolistDB")

const itemSchema = {
    name: String,
};

const Item = mongoose.model("Item", itemSchema);
const item1 = new Item({ name: "teewrewr" });
const item2 = new Item({ name: "22222teewrewr" });
const item3 = new Item({ name: "t333333eewrewr" });

const d = [item1, item2, item3];


app.get("/", function (req, res) {

    Item.find({}, function (err, f) {
        if (f.length === 0) {
            Item.insertMany(d, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Успешно");
                }
            })
            res.redirect("/");
        } else {
            res.render("list", { newListItem: f });
        }

    });
});

let i1 = [];
app.post("/", function (req, res) {
    i = req.body.n;
    const item= new Item({
        name: i,
    });
    item.save();
    res.redirect("/");
})

app.listen(3000, function () {
    console.log("listening on 3000 port")
});


// 11 минута остановился