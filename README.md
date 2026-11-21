# REST API Sistem Tiket Bioskop

## Deskripsi Aplikasi
REST API Sistem Tiket Bioskop adalah aplikasi server backend berbasis **Node.js** dan **Express.js** yang dirancang untuk mengelola data jadwal tayang film, harga tiket, ketersediaan stok kursi, hingga proses transaksi pemesanan tiket secara digital dan terstruktur. Seluruh data disimpan secara permanen pada database NoSQL **MongoDB** menggunakan ODM **Mongoose**.

Aplikasi ini dibangun menggunakan pola arsitektur **Modular Routing** (memisahkan `config`, `models`, `controllers`, dan `routes`) serta menerapkan pemrograman **Asynchronous (`async/await`)** dengan penanganan **HTTP Status Code** standar (`200`, `201`, `400`, `404`, `500`).

## Fitur Utama
- **Manajemen Data Tiket Film (CRUD):** Menambahkan jadwal film baru, melihat seluruh daftar film, mencari detail film berdasarkan ID, memperbarui harga maupun kapasitas kursi, serta menghapus data film.
- **Logika Transaksi Pemesanan Tiket:** Memvalidasi ketersediaan stok kursi sebelum transaksi, menghitung total pembayaran secara otomatis berdasarkan harga tiket dan jumlah beli, serta mengurangi sisa stok kursi secara real-time di database.
- **Validasi Skema & Error Handling:** Memastikan setiap data yang masuk sesuai tipe dan aturan skema Mongoose serta mengembalikan respons JSON yang informatif.

## Teknologi yang Digunakan
- **Runtime Environment:** Node.js (ES6 Modules)
- **Web Framework:** Express.js
- **Database:** MongoDB Atlas
- **ODM (Object Data Modeling):** Mongoose
- **Environment & Middleware:** Dotenv, CORS
- **API Testing:** Postman

## Struktur Folder
```text
final-project-bioskop/
├── config/
│   └── database.js         # Konfigurasi koneksi ke MongoDB
├── models/
│   └── ticketModel.js      # Skema dan model struktur data tiket film
├── controllers/
│   └── ticketController.js # Logika bisnis CRUD dan transaksi pembelian tiket
├── routes/
│   └── ticketRoutes.js     # Definisi routing dan endpoint REST API
├── .env                    # Variabel lingkungan (PORT & MONGO_URI)
├── .gitignore              # Daftar file/folder yang diabaikan Git
├── index.js                # Entry point utama server Express
└── package.json            # Konfigurasi proyek dan dependencies

## Cara Menjalankan Aplikasi
1. Clone repository ini:
   ```bash
