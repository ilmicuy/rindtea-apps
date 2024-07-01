document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Teh Kulit Salak Celup Kecil", img: "1.jpg", price: 8000 },
      {
        id: 2,
        name: "Teh Kulit Salak Celup Besar",
        img: "1.jpg",
        price: 15000,
      },
      {
        id: 3,
        name: "Teh Kulit Salak Serbuk Kecil",
        img: "2.jpg",
        price: 8000,
      },
      {
        id: 4,
        name: "Teh Kulit Salak Serbuk Besar",
        img: "2.jpg",
        price: 15000,
      },
      { id: 5, name: "Teh Kulit Salak Cup", img: "3.jpg", price: 3000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // cek barang di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // Jika cart kosng
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // Jika sudah ada, cek barang sama
        this.items = this.items.map((item) => {
          // Jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // Jika barang sudah ada, tambah quantity
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      // Ambil item berdasarkan id
      const cartItem = this.items.find((item) => item.id === id);

      // Jika item lebih dari 1
      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          // Jika bukan barang yang diklik
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // Jika barang sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// Konversi Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
