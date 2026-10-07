Panduan Instalasi
Sebelum mulai, pastikan pada perangkat anda sudah terinstal:
- Node.js (Versi LTS direkomendasikan)
- NPM (biasanya sudah terbundel bersama Node.js) atau Yarn
- Ionic CLI
Jalankan command-command di bawah di terminal pada direktori project.
1. Clone repository ini ke komputer Anda:
git clone https://github.com/DanielAnggoro000/simobile
2. Masuk ke direktori project:
cd path/simobile
3. Install dependensi
npm install (atau yarn install jika menggunakan Yarn)

Cara Menjalankan Aplikasi
1. Mode Pengembangan (Browser/Web)
Untuk menjalankan aplikasi secara lokal di browser dengan live-reload:
ionic serve
2. Menjalankan di Perangkat Seluler (Android/iOS)
A. Membuka project pada lingkungan pengembangan native
Pastikan Anda telah menyiapkan lingkungan pengembangan native (seperti Android Studio untuk Android atau Xcode untuk iOS).
Android: ionic capacitor run android (akan membuka project di android studio)
iOS: ionic capacitor run ios (akan membuka project di Xcode)
B. Menjalankan langsung di perangkat/emulator
Android: ionic capacitor run android -l --external
iOS: ionic capacitor run ios -l --external

Fitur-fitur:
- Dashboard toko yang menampilkan jumlah isi daftar produk, total nominal transaksi hari ini, dan produk yang terlaris
- Menampilkan daftar produk toko Bu Marni dengan gambar produk dan kategorinya
- Tiap produk ada detail harga beli, harga jual, dan stok
- Menambahkan produk ke daftar produk
- Sistem keranjang yang dapat diinsert-kan produk dari daftar produk, lalu keranjang tersebut bisa dikonfirmasi untuk masuk ke riwayat transaksi
- Riwayat transaksi yang telah dilakukan
- Dark Mode yang ditoggle
