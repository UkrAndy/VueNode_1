var express = require('express');
var router = express.Router();
//1.Імпортували модуль
const mongoose = require("mongoose");

//2. Встановлюємо з"єднання
mongoose.connect("mongodb://localhost:27017/storedb", { useNewUrlParser: true });

//3. Свторюємо схему
const Schema = mongoose.Schema;
// Створення схеми моделі
const productScheme = new Schema({
    title: String,
    price: Number    
});

//4. Створення моделі
const Product = mongoose.model("Product", productScheme);



/* GET products listing. */
router.get('/', function(req, res, next) {
    //Вибірка усіх документів з бази
    Product.find({}, function(err, docs){
      // mongoose.disconnect();     
      if(err) return res.status(500).json({err:{msg:"Fetch faild!"}})

      res.render('index', { title: 'Express',page:'products-list', products:docs }); 
      // res.status(200).json({products:docs }); 
      
  });

});

router.get('/add', function(req, res, next) {

      //5. Створення документа
    const product = new Product({
      title: req.query.title ,
      price: req.query.price  
    });
    //6. Збереження документа
    product.save(function(err, prod){
      // mongoose.disconnect();  // від’єднання від бази даних
      if(err) return res.status(500).json({err:{msg:"Saving faild!"}})
      res.redirect('/products')
    });
});

router.get('/addform', function(req, res, next) {
  res.render('index', { title: 'Express',page:'add-form' });
});



router.get('/delete/:id', function(req, res, next) {
  //5. Видалення

  Product.findOneAndDelete({_id:req.params.id}, function(err, doc){
    // mongoose.disconnect();
    
    if(err) return res.status(500).json({err:{msg:"Deleting faild!"}})
    res.redirect('/products')
  });

});

module.exports = router;
