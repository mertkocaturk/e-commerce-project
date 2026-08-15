// localStorage'a kayıt yapacak fonksiyon

import { uiElements } from "./ui.js";

const saveToLocalStorage = (key, cart) => {
  // Dışarıdan verilen cart dizisini locale ekle

  localStorage.setItem(key, JSON.stringify(cart));
};

// localStorage'dan elemanları alacak fonksiyon

const getFromLocalStorage = (key) => {
  // localStorage'dan belirtilen key'e sahip elemanları al ve js objesine çevirip return et
  const strData = localStorage.getItem(key);

  //   Eğer strData varsa bunu js nesnesine çevirip return et ama yoksa [] return et

  return strData ? JSON.parse(strData) : [];
};

// Sepetteki ürün miktarını hesaplayarak sepet ikonu yanındaki miktarı güncelleyen fonksiyon
const updateCartItem = (cart) => {
  // Reduce metodu ile quantity değerlerini topla
  const totalQuantity = cart.reduce(
    (acc, item) => acc + Number(item.quantity),
    0,
  );

  // Elde edilen ürün miktarını sepet ikonu kısmına yazdır
  uiElements.cartIcon.setAttribute("data-quantity", totalQuantity);
};

// Sepetteki ürünlerin toplam fiyatını hesapla
const calculateCartTotal = (cart) =>
  cart.reduce((total, item) => total + Number(item.quantity) * item.price, 0);
// Toplam ürün fiyatını render eden fonksiyon
const renderCartTotal = (cart) => {
  // Toplam fiyata eriş
  const totalPrice = calculateCartTotal(cart);
  // Sepetteki toplam ürünlerin fiyatını render et
  uiElements.cartTotal.textContent = totalPrice.toFixed(2);
};

export {
  saveToLocalStorage,
  getFromLocalStorage,
  updateCartItem,
  calculateCartTotal,
  renderCartTotal,
};
