/* =====================================================================
   DATA WEBSITE PKBM LENTERA ILMU
   ---------------------------------------------------------------------
   Semua isi website diambil dari file ini. Untuk memperbarui website,
   cukup edit file ini (tidak perlu mengubah index.html).

   Bagian bertanda  "ISI DENGAN DATA RESMI"  masih contoh/kosong dan
   HARUS diganti dengan data resmi PKBM sebelum dipublikasikan.
   ===================================================================== */

window.SITE = {
  nama: "PKBM Lentera Ilmu",
  namaLengkap: "Pusat Kegiatan Belajar Masyarakat Lentera Ilmu",
  slogan: "Membuka Akses Pendidikan, Menyalakan Harapan, Membangun Masa Depan.",

  /* ---------- Pengenalan singkat (beranda) ---------- */
  pengantar:
    "PKBM Lentera Ilmu adalah pusat kegiatan belajar masyarakat yang menyediakan layanan pendidikan kesetaraan dan program keterampilan agar setiap warga memiliki kesempatan yang sama untuk belajar dan berkembang.",

  /* ---------- Angka ringkas (beranda) ----------
     ISI DENGAN DATA RESMI. Isi null jika belum ada -> tampil "—" */
  statistik: {
    tutor: null,          // contoh: 12
    wargaBelajar: null,   // contoh: 85
    tahunData: "",        // contoh: "Data per Januari 2027"
  },

  /* ---------- Profil ---------- */
  profil: {
    // ISI DENGAN DATA RESMI: sejarah / gambaran umum
    sejarah: [
      "Isi di sini sejarah singkat atau gambaran umum PKBM Lentera Ilmu: kapan berdiri, latar belakang, dan perannya bagi masyarakat sekitar.",
    ],
    // ISI DENGAN DATA RESMI
    visi: "Isi visi PKBM Lentera Ilmu di sini.",
    misi: [
      "Isi misi pertama.",
      "Isi misi kedua.",
      "Isi misi ketiga.",
    ],
    tujuan: [], // opsional, contoh: ["Meningkatkan akses pendidikan ...", ...]
    identitas: [
      // ISI DENGAN DATA RESMI (hapus baris yang tidak perlu)
      ["Nama lembaga", "PKBM Lentera Ilmu"],
      ["NPSN", ""],
      ["Izin operasional", ""],
      ["Akreditasi", ""],
      ["Tahun berdiri", ""],
    ],
  },

  /* ---------- Program pendidikan kesetaraan ----------
     Hapus paket yang tidak diselenggarakan. */
  paket: [
    {
      kode: "A",
      nama: "Paket A",
      setara: "Setara SD",
      deskripsi:
        "Layanan pendidikan kesetaraan tingkat dasar bagi masyarakat yang belum atau tidak sempat menamatkan jenjang SD.",
      koordinator: "Siti Maymunah, S.Pd",
    },
    {
      kode: "B",
      nama: "Paket B",
      setara: "Setara SMP",
      deskripsi:
        "Layanan pendidikan kesetaraan tingkat menengah pertama bagi warga belajar yang ingin melanjutkan pendidikan.",
      koordinator: "Inri Oseany Lamtiur R, S.Pd",
    },
    {
      kode: "C",
      nama: "Paket C",
      setara: "Setara SMA",
      deskripsi:
        "Layanan pendidikan kesetaraan tingkat menengah atas untuk memperoleh ijazah setara SMA/MA.",
      koordinator: "Duta Alfayza Dhiya Ulhaq, S.Pd",
    },
  ],

  pendaftaran: {
    // ISI DENGAN DATA RESMI
    persyaratan: [
      "Isi persyaratan pendaftaran (contoh: fotokopi ijazah terakhir, KK, pas foto).",
    ],
    alur: [
      "Hubungi PKBM melalui WhatsApp atau datang langsung ke lokasi.",
      "Mengisi formulir pendaftaran.",
      "Menyerahkan berkas persyaratan.",
      "Mengikuti penempatan paket dan jadwal belajar.",
    ],
    formulirUrl: "", // opsional: tautan Google Form pendaftaran
  },

  /* ---------- Program keterampilan / kursus & pelatihan ----------
     ISI DENGAN DATA RESMI. Kosongkan array [] jika belum ada. */
  keterampilan: [
    // { nama: "Menjahit", deskripsi: "Pelatihan dasar menjahit ...", sasaran: "Warga usia produktif" },
  ],
  keterampilanKoordinator: "Azhar Al Fadhillah, S.Pd", // Koordinator PKW/Bimbel

  /* ---------- Struktur kepengurusan (dari bagan resmi) ---------- */
  struktur: {
    pimpinan: { jabatan: "Kepala PKBM", nama: "Adinda Dira Erwanti, S.Pd" },
    baris1: [
      { jabatan: "Pembina", nama: "Chandra Alim, S.Hut., M.Ling" },
      { jabatan: "Penasehat", nama: "Angga Syahputra" },
    ],
    baris2: [
      { jabatan: "Bendahara", nama: "Ariani Noor Awaliyah, Amd. Kep" },
      { jabatan: "Sekretaris", nama: "Anggi Aulia Sari, S.Pd" },
    ],
    baris3: [
      { jabatan: "Koordinator PKW / Bimbel", nama: "Azhar Al Fadhillah, S.Pd" },
      { jabatan: "Operator", nama: "Muhammad Fahriza Akbar, S.Pd" },
      { jabatan: "Sarana & Prasarana", nama: "Siti Syahra Niba, S.Pd" },
    ],
    baris4: [
      { jabatan: "Koordinator Paket A", nama: "Siti Maymunah, S.Pd" },
      { jabatan: "Koordinator Paket B", nama: "Inri Oseany Lamtiur R, S.Pd" },
      { jabatan: "Koordinator Paket C", nama: "Duta Alfayza Dhiya Ulhaq, S.Pd" },
    ],
    bawah: ["Tutor", "Warga Belajar"],
  },

  /* ---------- Uraian tugas (dari dokumen jobdesk) ---------- */
  jobdesk: [
    {
      jabatan: "Pembina",
      tugas: [
        "Bersama ketua, melakukan pembinaan, mengarahkan pengurus dan anggota serta menjalin hubungan dengan PKBM/lembaga/organisasi lain.",
        "Memberikan arahan kepada stakeholder agar dapat mencapai visi misi lembaga.",
      ],
    },
    {
      jabatan: "Penasehat",
      tugas: [
        "Menyusun program pengawasan.",
        "Memantau pelaksanaan standar isi, proses, kompetensi lulusan dan standar penilaian bersama ketua dan pembina.",
      ],
    },
    {
      jabatan: "Kepala PKBM",
      tugas: [
        "Menyusun perencanaan.",
        "Mengorganisasi, mengarahkan, dan mengkoordinasi seluruh kegiatan di lembaga.",
        "Melaksanakan pengawasan dan evaluasi terhadap seluruh kegiatan lembaga.",
        "Menentukan kebijakan dan mengambil keputusan.",
        "Mengatur pelaksanaan proses belajar mengajar.",
        "Mengatur administrasi kantor, peserta didik, pegawai dan keuangan.",
        "Menjalin hubungan lembaga dengan masyarakat dan dinas terkait, termasuk penyaluran lulusan dan kerja sama lain.",
        "Bertanggung jawab atas seluruh kegiatan lembaga dan memimpin rapat.",
        "Mengambil kebijakan strategis untuk perkembangan lembaga.",
      ],
    },
    {
      jabatan: "Admin / Operator",
      tugas: [
        "Menyiapkan dan melayani kebutuhan perlengkapan serta sarana prasarana peserta didik.",
        "Mengelola berkas kehadiran, mutasi masuk dan keluar, serta dokumen peserta didik yang lulus ujian.",
        "Mengelola surat masuk dan keluar.",
        "Menata administrasi: buku induk, rekap absensi dan laporan kehadiran bulanan, serta data statistik peserta didik.",
        "Mencatat pendaftaran peserta didik dan menggandakan modul pembelajaran.",
      ],
    },
    {
      jabatan: "Koordinator Paket A, B, C dan Kursus & Pelatihan",
      tugas: [
        "Menyusun perencanaan pembelajaran dan jadwal pertemuan.",
        "Mengorganisasi, mengarahkan, mengoordinasikan, mengawasi, dan mengevaluasi kegiatan pembelajaran, ujian praktik dan ujian tulis bersama tutor/instruktur.",
        "Mengambil keputusan atas hasil pembelajaran, ujian, dan kinerja tutor/instruktur.",
        "Mengatur hubungan lembaga dengan masyarakat dan instansi terkait.",
      ],
    },
    {
      jabatan: "Tutor",
      tugas: [
        "Membuat rencana pembelajaran berdasarkan kurikulum yang berlaku.",
        "Menyampaikan materi pembelajaran secara menarik dan mudah dipahami.",
        "Menuntun warga belajar dalam mengerjakan tugas dan persiapan ujian.",
        "Meninjau tingkat penguasaan warga belajar secara rutin.",
        "Berdiskusi dengan warga belajar dan keluarga untuk melaporkan hasil pembelajaran.",
      ],
    },
  ],

  /* ---------- Dokumentasi pembelajaran ----------
     1. Taruh foto di folder  assets/galeri/
     2. Tambahkan barisnya di bawah. Hanya foto yang sudah ada izin publikasi.
     Contoh: { src: "assets/galeri/belajar-paket-b.jpg", ket: "Pembelajaran Paket B", tanggal: "Oktober 2026" } */
  galeri: [],

  /* ---------- Berita / kegiatan (opsional) ---------- */
  berita: [
    // { judul: "Penerimaan warga belajar baru", tanggal: "1 Januari 2027", ringkas: "..." },
  ],

  /* ---------- Kontak & media sosial ----------
     ISI DENGAN DATA RESMI. Biarkan "" jika tidak ada (otomatis disembunyikan). */
  kontak: {
    alamat: "",
    whatsapp: "",   // format internasional tanpa + dan 0 di depan, contoh: "6281234567890"
    telepon: "",
    email: "",
    jamLayanan: "", // contoh: "Senin – Jumat, 08.00 – 15.00 WITA"
    mapsEmbed: "",  // URL embed dari Google Maps (Share > Embed a map > salin isi src="...")
    mapsLink: "",   // tautan Google Maps biasa
    sosmed: {
      instagram: "", // contoh: "https://instagram.com/akun"
      facebook: "",
      youtube: "",
      tiktok: "",
    },
  },
};
