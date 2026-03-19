# Product Requirements Document (PRD): Portofolio

## 1. Ringkasan Proyek
Proyek ini adalah pembuatan situs web portofolio *Single Page Application* (SPA) interaktif yang dirancang untuk memamerkan *personal branding*, keahlian teknis, dan proyek-proyek yang telah dikerjakan. Aplikasi ini berjalan murni di sisi *client* (*front-end only*) tanpa sistem *database* atau *backend* terpisah.

## 2. Tujuan Produk
* Membangun presensi *online* yang profesional untuk menarik minat perusahaan, perekrut, dan klien *freelance*.
* Menampilkan informasi akademis dan teknis secara terstruktur dan mudah dinavigasi.
* Menyediakan pengalaman pengguna yang nyaman dengan dukungan multibahasa (ID/EN) dan kustomisasi tema visual (Light/Dark).

## 3. Target Audiens
* Perekrut (HR/Talent Acquisition) atau perusahaan yang mencari *software engineer* / *developer*.
* Klien potensial untuk proyek *freelance* atau bisnis IT.
* Keperluan akademis (seperti pendaftaran asisten laboratorium atau program kampus).

## 4. Tumpukan Teknologi (Tech Stack)
* **Core Framework:** React (diinisialisasi menggunakan Vite untuk performa *build* dan *development* yang cepat).
* **Styling/CSS:** Tailwind CSS (opsional, namun sangat direkomendasikan untuk mempercepat pembuatan desain *modern* dan *dark mode*).
* **State Management:** React Hooks (`useState`, `useEffect`, `useContext` untuk tema dan bahasa).
* **Data Management:** File JSON statis atau objek JavaScript untuk menampung teks dua bahasa dan data *dummy* proyek.

## 5. Fungsionalitas & Struktur Halaman
Karena ini adalah SPA, semua bagian berada dalam satu halaman utama yang bisa diakses menggunakan *smooth scrolling* dari bilah navigasi.

### A. Global Components (Komponen Statis)
* **Navbar (Bilah Navigasi):**
  * *Sticky* di bagian atas layar.
  * Tautan jangkar (*anchor links*) ke setiap seksi: About, Skills, Projects, Contact.
  * **Toggle Bahasa:** Tombol (ID | EN) untuk mengganti bahasa secara instan.
  * **Toggle Tema:** Tombol ikon (☀️ | 🌙) untuk beralih antara *Light Mode* dan *Dark Mode*.
* **Footer:** Menampilkan *copyright* dan tautan media sosial secara ringkas.

### B. Hero Section (Beranda)
* Sapaan pembuka profesional yang menyesuaikan bahasa.
* Deskripsi singkat dan padat (*punchline*) tentang fokus utama Anda.
* Tombol *Call-to-Action* (CTA): "Lihat Portofolio" (menggulir ke bagian Projects) dan "Hubungi Saya" (menggulir ke bagian Contact).

### C. About Me (Tentang Saya)
* Teks narasi yang menjelaskan latar belakang.
* **Konten Inti:** Menyebutkan status sebagai Mahasiswa Teknik Informatika (semester 5) dan minat besar pada pengembangan *backend*, aplikasi *mobile*, serta eksplorasi di bidang *game development* dan AI/ML.

### D. Skills (Keahlian)
* Ditampilkan dalam bentuk *grid* atau *badge* yang mudah dipindai secara visual.
* **Kategori (berdasarkan fokus saat ini):**
  * **Backend:** Laravel, Go, Java, .NET
  * **Frontend:** React
  * **Mobile:** Flutter, Android Studio (Kotlin)
  * **Lainnya:** Python, DevOps

### E. Projects (Pameran Proyek)
* Menampilkan daftar proyek dalam bentuk *cards* (kartu). Setiap kartu berisi: Judul, deskripsi singkat, tag teknologi yang digunakan, dan tautan (GitHub/Live Preview jika ada).
* **Data Awal (sebagai *placeholder/dummy* yang relevan):**
  1. **GITARIN:** E-commerce penjualan gitar.
  2. **Ruang Tenang:** Aplikasi kesehatan mental.
  3. **Manajemen Jaringan Bisnis Wi-Fi:** Sistem atau *setup* operasional.
  4. **Custom Query Language Interpreter:** Proyek eksperimental berbasis JavaScript.

### F. Contact (Hubungi Saya)
* Teks ajakan untuk berkolaborasi atau berdiskusi.
* Tombol atau tautan langsung menuju:
  * Email profesional.
  * LinkedIn.
  * GitHub.

## 6. Manajemen Konten (Bilingual Architecture)
Semua teks (*copywriting*) pada antarmuka tidak akan di-*hardcode* langsung ke dalam tag HTML/JSX, melainkan diambil dari satu sumber data statis untuk memudahkan lokalisasi.
* **Struktur File:** Membuat file seperti `content.js` atau folder `locales/` berisi `id.json` dan `en.json`.
* **Mekanisme:** Menggunakan *React Context* atau *custom hook* sederhana untuk mendeteksi bahasa aktif dan menyuplai teks yang tepat ke seluruh komponen.

## 7. Panduan UI/UX
* **Gaya Visual:** Modern, bersih (minimalis), dan profesional. Tidak menggunakan animasi yang berlebihan, fokus pada keterbacaan (*readability*).
* **Warna Tema:**
  * **Light Mode:** Latar belakang putih/abu-abu sangat terang dengan teks gelap solid.
  * **Dark Mode:** Latar belakang abu-abu tua/hitam (*slate/zinc*) dengan teks terang dan aksen warna natural (misalnya biru atau *teal* untuk tombol utama).
* **Responsivitas:** Harus tampil sempurna di perangkat *mobile* (ponsel), *tablet*, dan layar *desktop* lebar (menggunakan *CSS flexbox/grid*).