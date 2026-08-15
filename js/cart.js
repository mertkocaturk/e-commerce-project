import {
  getFromLocalStorage,
  renderCartTotal,
  saveToLocalStorage,
  updateCartItem,
} from "./helper.js";
import { renderCartItems } from "./ui.js";

// localStorage'dan cart elemanlarını al
let cart = getFromLocalStorage("cart");
console.log("cart", cart);

// Sepete ürün ekleyen fonksiyon

const addToCart = (e, products) => {
  const productId = Number(e.target.dataset.id);
  // id'si bilinen elemanı product içerisinde bul
  const product = products.find((i) => i.id == productId);

  //   Sepete eklenecek eleman öncesinde eklendi mi?
  const exiting = cart.find((i) => i.id == productId);

  //   Eğer ürün sepette varsa
  if (exiting) {
    // Ürünün miktarını güncelle
    exiting.quantity++;
  } else {
    //Ürünü sepete ekle
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    // sepet dizisine ürün ekle
    cart.push(cartItem);
  }
  // sepeti güncelle
  saveToLocalStorage("cart", cart);

  //  Add to Cart butonunun içeriğini güncelle
  e.target.textContent = "Added";

  // 2saniye sonra Add to cart içeriğini eski haline çevir
  setTimeout(() => {
    e.target.textContent = "Add to cart";
  }, 2000);

  // sepet ikonunu güncelle
  updateCartItem(cart);
};

// Sepetten ürün kaldıran fonksiyon

const removeFromCart = (e) => {
  // kullanıcıdan silme işlemi için onay al
  const response = confirm("Silme işlemini onaylıyor musunuz?");
  // Eğer kullanıcı silme işlemini onayladıysa
  if (response) {
    // Tıklanılan ürünün id'sine eriş
    const productId = parseInt(e.target.dataset.id);
    // tıklanılan ürünü diziden kaldır
    const filtered = cart.filter((i) => i.id !== productId);

    cart = filtered;

    // localStorage'ı güncelle
    saveToLocalStorage("cart", cart);

    // arayüzü renderla
    renderCartItems(cart);

    // sepet ikonunu güncelle
    updateCartItem(cart);

    // toplam fiyatı renderla
    renderCartTotal(cart);
  }
};

// Sepetteki ürün miktarını güncelleyen fonksiyon
const onQuantityChange = (e) => {
  // Güncellenecek elemanın id'sine eriş
  const productId = +e.target.dataset.id;
  // Yeni ürün miktarına eriş
  const newQuantity = e.target.value;
  // Yeni miktar 0'dan büyükse
  if (newQuantity > 0) {
    // Güncellenecek elemanı dizi içerisinde bul
    const updatedItem = cart.find((item) => item.id == productId);
    // Ürün miktarını güncelle
    updatedItem.quantity = newQuantity;
    // LocalStorage'ı güncelle
    saveToLocalStorage("cart", cart);
  } else {
    removeFromCart(e);
  }

  // sepet ikonunu güncelle
  updateCartItem(cart);

  //toplam fiyatı renderla
  renderCartTotal(cart);
};

export { addToCart, removeFromCart, onQuantityChange };
