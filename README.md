# Website PKBM Lentera Ilmu

Website statis (HTML + CSS + JavaScript). Tidak perlu install apa pun, tidak ada proses build.

## Struktur
```
index.html        -> kerangka halaman
css/style.css     -> tampilan
js/data.js        -> SEMUA ISI WEBSITE (edit di sini)
js/main.js        -> membaca data.js dan menampilkannya
assets/logo.png   -> logo (ganti dengan logo resmi beresolusi tinggi)
assets/galeri/    -> taruh foto dokumentasi di sini
vercel.json       -> pengaturan Vercel
```

## Cara mengisi data
Buka `js/data.js`, cari bagian bertanda **ISI DENGAN DATA RESMI**:
jumlah tutor, jumlah warga belajar, visi-misi, sejarah, keterampilan, kontak, sosmed, galeri.
Bagian yang dikosongkan akan otomatis disembunyikan / diberi pesan "akan segera diperbarui".

## Cara menambah foto dokumentasi
1. Salin foto ke `assets/galeri/` (disarankan lebar maks 1600px, ukuran < 500 KB).
2. Tambahkan di `galeri` pada `data.js`:
   `{ src: "assets/galeri/nama-foto.jpg", ket: "Pembelajaran Paket B", tanggal: "Nov 2026" }`

## Publikasi: GitHub -> Vercel
1. Buat repository baru di github.com (mis. `pkbm-lentera-ilmu`).
2. Upload semua isi folder ini (bisa lewat tombol **Add file > Upload files**), lalu **Commit**.
3. Buka vercel.com, login dengan GitHub, klik **Add New > Project**, pilih repository tadi.
4. Framework Preset: **Other**. Biarkan Build Command & Output Directory kosong. Klik **Deploy**.
5. Setiap kali `data.js` atau foto diubah di GitHub, Vercel otomatis memperbarui website.
6. (Opsional) Pasang domain sendiri di Vercel: Settings > Domains.

## Uji di komputer sendiri
Klik dua kali `index.html`, atau jalankan `python3 -m http.server` lalu buka http://localhost:8000
