var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

// get products list
router.get('/', function(req, res, next) {
  const data=require(req.dataDir+ '/data.json')    
  res.render('main', { title: 'Super Store', page:'products-list', products:data.products });
});

router.get('/add', function(req, res, next) {  
  res.render('main', { title: 'Super Store', page:'add-form' });
});
router.post('/add',
[
  // title length must be >2 
  check('title').isLength({min:2}).withMessage('Назва має бути довшою за 2'),
  // price between 10 and 1000
  check('price').isFloat({ min: 10, max: 1000 }).withMessage('Ціна між 10 і 1000')
],
function(req, res, next) {  
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
     return res.json({success:false, err:{msg:errors.array().map(e=>e.msg).join(', ') }})
    
    // res.status(422).json({ errors: errors.array() });
  }
  else
  {
    const data=require(req.dataDir+ '/data.json')  
    data.products.push({
      title:req.body.title,
      price:req.body.price
    })
    var fs = require('fs');
    fs.writeFile(req.dataDir+ '/data.json', JSON.stringify(data), function (err) {
      if (err) res.json({success:false, err:{msg:"Помилка при записі файлу"}});
      res.json({success:true, msg:"Збережено"});
      console.log('Saved!');
    });
  }
  
});

module.exports = router;
