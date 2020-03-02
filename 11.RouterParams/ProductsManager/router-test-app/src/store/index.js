import { v4 as uuidv4 } from "uuid"; //Модуль для генерування ID

export default {
  //Метод для зчитування списку товарів (масиву об"єктів-товарів) з localStorage
  readProducts: function() {
    if (localStorage.getItem("productsList"))
      return JSON.parse(localStorage.getItem("productsList"));
    else return [];
  },
  //Метод для запису списку товарів у  localStorage
  writeProducts: function(products) {
    localStorage.setItem("productsList", JSON.stringify(products));
  },
  //Метод для додавання нового товару до списку у localStorage
  addProduct: function(productTitle, productPrice) {
    //Створюємо новий об"єкт-товар
    const product = {
      id: uuidv4(),
      title: productTitle,
      price: productPrice
    };
    let productsList = this.readProducts(); //Зчитуємо список (масив) товарів з localStorage
    productsList.push(product); //Додаємо новий об"єкт-товар у список
    this.writeProducts(productsList); //Зберігаємо список товарів у localStorage
  },

  //Метод для оновлення продукту
  updateProduct(product) {
    let productsList = this.readProducts(); //Зчитуємо список (масив) товарів з localStorage
    const productIndex = productsList.findIndex(item => item.id === product.id);
    productsList[productIndex] = { ...product };
    this.writeProducts(productsList); //Зберігаємо список товарів у localStorage
  },

  //Метод для зчитування товару за його ID
  getProductById(productId) {
    let productsList = this.readProducts(); //Зчитуємо список (масив) товарів з localStorage
    return productsList.find(product => product.id === productId);
  }
};
