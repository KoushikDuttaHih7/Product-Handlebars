const path = require("path");

const express = require("express");

const rootDir = require("../utility/path");

const adminData = require('./admin');

// rootDir is a cleaner way to write code and it require to make another file in another folder

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {prods: products, pageTitle: 'Shop', path:'/', hasProducts:products.length>0,activeShop:true,productCss:true }) // shop.hbs
});
// dirname=This is a global variable which simply
// holds the absolute path on our operating system

// but we're using path join because this will
// automatically build the path in a way that works on both
// Linux systems and Windows systems because as you might know,
// on Linux systems you have paths like
// this /user and on windows like this \user

// we use ../ to go in of a folder

module.exports = router;
