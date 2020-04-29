var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
//1.Імпортували модуль
const mongoose = require("mongoose");

//2. Встановлюємо з"єднання
mongoose.connect("mongodb+srv://UserTest:atlas147893@cluster0-g8yh7.mongodb.net/myproductdb?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//3. Свторюємо схему
const Schema = mongoose.Schema;
// Створення схеми моделі
const productScheme = new Schema({
  title: String,
  price: Number,
  imgSrc: String,
  description: String,
});

//4. Створення моделі
const Product = mongoose.model("Product", productScheme);
//=====================
// get products list
router.get("/", function (req, res, next) {
  //Вибірка усіх документів з бази
  Product.find({}, function (err, allProducts) {
    // mongoose.disconnect();
    if (err)
      return res
        .status(500)
        .json({ success: false, err: { msg: "Fetch faild!" } });
    res.status(200).json({ success: true, data: allProducts });
  });
});

// Додавання нового продукту у базу
router.post(
  "/add",
  [
    // title length must be >2
    check("title")
      .isLength({ min: 2 })
      .withMessage("Назва має бути довшою за 2"),
    // price between 10 and 1000
    check("price")
      .isFloat({ min: 10, max: 1000 })
      .withMessage("Ціна між 10 і 1000"),
  ],
  function (req, res, next) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({
        success: false,
        err: {
          msg: errors
            .array()
            .map((e) => e.msg)
            .join(", "),
        },
      });

      // res.status(422).json({ errors: errors.array() });
    } else {
      //5. Створення документа
      const product = new Product({
        title: req.body.title,
        price: req.body.price,
        imgSrc: req.body.imgSrc,
        description: req.body.description,
      });
      //6. Збереження документа
      product.save(function (err, prod) {
        // mongoose.disconnect();  // від’єднання від бази даних
        if (err)
          return res
            .status(500)
            .json({ success: false, err: { msg: "Saving faild!" } });
        else res.status(201).json({ success: true, data: prod });
      });
    }
  }
);

router.delete("/", function (req, res, next) {
  console.log(req.query);
  console.log(req.body);
  //5. Видалення
  //Якщо дані передаємо через axios.delete(apiEndpoints.products.delete,{params:{id}})
  // Product.findOneAndDelete({_id:req.query.id}, function(err, doc){

  //axios.delete(apiEndpoints.products.delete,{data:{id}})
  Product.findOneAndDelete({ _id: req.body.id }, function (err, doc) {
    // mongoose.disconnect();

    if (err)
      return res
        .status(500)
        .json({ success: false, err: { msg: "Saving faild!" } });
    res.json({ success: true });
  });
});

module.exports = router;
