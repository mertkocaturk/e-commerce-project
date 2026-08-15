# 🛍️ COSTY - E-Commerce

Modern ve responsive bir **E-Commerce** uygulaması geliştirmek amacıyla hazırladığım bu projede, JavaScript kullanarak ürün listeleme ve alışveriş sepeti işlemlerini gerçekleştirdim.

Bu projeyi geliştirirken özellikle **DOM manipülasyonu, modüler JavaScript yapısı, API'den veri çekme, localStorage kullanımı ve dinamik UI oluşturma** konularında kendimi geliştirmeyi amaçladım.

#### 🚀 Proje Hakkında

**COSTY**, kullanıcıların ürünleri inceleyebildiği ve istedikleri ürünleri alışveriş sepetine ekleyebildiği bir E-Commerce uygulamasıdır.

Ürünler `db.json` içerisinde bulunan veriler üzerinden dinamik olarak alınarak kullanıcıya gösterilmektedir. Kullanıcı ürünleri sepete ekleyebilir, ürün miktarlarını değiştirebilir, ürünleri sepetten kaldırabilir ve toplam sepet tutarını görüntüleyebilir.

Sepet bilgilerini **localStorage** üzerinde tuttuğum için sayfa yenilense bile sepetteki ürünler korunmaktadır.

#### ✨ Özellikler

- 🛒 Ürünleri dinamik olarak listeleme
- ➕ Ürünleri sepete ekleme
- ➖ Ürün miktarını azaltma
- 🔢 Ürün miktarını değiştirme
- 🗑️ Ürünleri sepetten kaldırma
- 💰 Toplam sepet tutarını hesaplama
- 💾 Sepet verilerini `localStorage` üzerinde saklama
- 🔢 Header üzerinde toplam ürün miktarını gösterme
- 📱 Responsive tasarım
- 📂 Modüler JavaScript yapısı
- 🎨 SCSS ile modüler stil yapısı
- 📱 Responsive mobil menü
- ⚠️ Sepet boş olduğunda kullanıcıya bilgilendirme gösterme

#### 🛠️ Kullanılan Teknolojiler

- **HTML5**
- **CSS3**
- **SCSS**
- **JavaScript (ES6+)**
- **JSON Server**
- **LocalStorage**
- **Bootstrap Icons**

#### 📁 Proje Yapısı

```text
e-commerce/
│
├── assets/
│   └── home.png
│
├── js/
│   ├── api.js
│   ├── cart.js
│   ├── helper.js
│   ├── main.js
│   └── ui.js
│
├── styles/
│   ├── _cart.scss
│   ├── _footer.scss
│   ├── _header.scss
│   ├── _home.scss
│   ├── _products.scss
│   ├── _responsive.scss
│   ├── _variables.scss
│   └── style.scss
│
├── cart.html
├── db.json
└── index.html
