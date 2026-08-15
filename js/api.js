const fetchProducts = async () => {
  try {
    // api'a istek at
    const response = await fetch("../db.json");
    // api'dan gelen veriyi js nesnesine çevir
    const data = await response.json();
    // products verisini return et
    return data.products;
  } catch (error) {
    console.log(`Hataaa:${error}`);
    // Hata varsa console'a çıktı ver ve geriye boş bir dizi döndür
    return [];
  }
};

export default fetchProducts;
