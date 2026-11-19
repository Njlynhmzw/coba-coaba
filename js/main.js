(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const safeUrl = (u) => (/^https?:\/\//i.test(u) ? u : "");
  const empty = (msg) => `<div class="empty">${msg}</div>`;

  // teks sederhana (data-bind)
  document.querySelectorAll("[data-bind]").forEach((el) => (el.textContent = S[el.dataset.bind] || ""));
  $("year").textContent = new Date().getFullYear();

  /* Statistik */
  const st = S.statistik;
  const num = (v) => (v == null || v === "" ? "—" : Number(v).toLocaleString("id-ID"));
  $("stats").innerHTML = `
    <div class="stat"><b>${num(st.tutor)}</b><span>Tutor</span></div>
    <div class="stat"><b>${num(st.wargaBelajar)}</b><span>Warga Belajar</span></div>
    <div class="stat"><b>${S.paket.length}</b><span>Paket Kesetaraan</span>${st.tahunData ? `<small>${esc(st.tahunData)}</small>` : ""}</div>`;

  /* Profil */
  const P = S.profil;
  $("sejarah").innerHTML = P.sejarah.map((p) => `<p>${esc(p)}</p>`).join("");
  $("tujuan").innerHTML = P.tujuan.length ? `<h3>Tujuan</h3><ul>${P.tujuan.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : "";
  $("identitas").innerHTML = P.identitas.filter((r) => r[1]).map((r) => `<dt>${esc(r[0])}</dt><dd>${esc(r[1])}</dd>`).join("");
  $("visi").textContent = P.visi;
  $("misi").innerHTML = P.misi.map((m) => `<li>${esc(m)}</li>`).join("");

  /* Paket */
  $("paket").innerHTML = S.paket
    .map((p) => `
    <article class="card paket rv">
      <span class="paket__k">${esc(p.kode)}</span>
      <span class="paket__lv">${esc(p.setara)}</span>
      <h3>${esc(p.nama)}</h3>
      <p>${esc(p.deskripsi)}</p>
      ${p.koordinator ? `<small>Koordinator: <b>${esc(p.koordinator)}</b></small>` : ""}
    </article>`).join("");

  const D = S.pendaftaran;
  $("syarat").innerHTML = D.persyaratan.map((x) => `<li>${esc(x)}</li>`).join("");
  $("alur").innerHTML = D.alur.map((x) => `<li><span>${esc(x)}</span></li>`).join("");

  const K = S.kontak;
  const waLink = K.whatsapp ? `https://wa.me/${K.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Halo PKBM Lentera Ilmu, saya ingin bertanya tentang pendaftaran.")}` : "";
  let btns = "";
  if (safeUrl(D.formulirUrl)) btns += `<a class="btn btn--green" target="_blank" rel="noopener" href="${esc(D.formulirUrl)}">Isi Formulir Pendaftaran</a>`;
  if (waLink) btns += `<a class="btn btn--outline" target="_blank" rel="noopener" href="${esc(waLink)}">Tanya via WhatsApp</a>`;
  $("daftarBtns").innerHTML = btns;

  /* Keterampilan */
  const icons = ["🧵", "💻", "🍳", "✂️", "🌱", "🎨", "🔧", "📚"];
  $("ketSub").textContent = S.keterampilan.length
    ? "Pelatihan praktis untuk membekali warga dengan keterampilan kerja dan usaha." + (S.keterampilanKoordinator ? ` Koordinator: ${S.keterampilanKoordinator}.` : "")
    : "";
  $("skill").innerHTML = S.keterampilan.length
    ? S.keterampilan.map((k, i) => `
      <article class="card skill rv">
        <div class="skill__ic">${icons[i % icons.length]}</div>
        <h3>${esc(k.nama)}</h3>
        <p>${esc(k.deskripsi)}</p>
        ${k.sasaran ? `<small>Sasaran: ${esc(k.sasaran)}</small>` : ""}
      </article>`).join("")
    : empty("Informasi program keterampilan akan segera diperbarui.");

  /* Struktur */
  const node = (n, cls = "") => `<div class="node ${cls}"><small>${esc(n.jabatan)}</small><b>${esc(n.nama)}</b></div>`;
  const row = (arr) => `<div class="org__row">${arr.map((n) => node(n)).join("")}</div>`;
  const link = '<div class="org__link"></div>';
  const T = S.struktur;
  $("org").innerHTML =
    `<div class="org__row">${node(T.pimpinan, "node--head")}</div>${link}` +
    row(T.baris1) + link + row(T.baris2) + link + row(T.baris3) + link + row(T.baris4) + link +
    T.bawah.map((b, i) => `<div class="org__row"><div class="node node--end"><b>${esc(b)}</b></div></div>${i < T.bawah.length - 1 ? link : ""}`).join("");

  $("jobdesk").innerHTML = S.jobdesk
    .map((j) => `<details><summary>${esc(j.jabatan)}</summary><ul>${j.tugas.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></details>`).join("");

  /* Galeri */
  $("gallery").innerHTML = S.galeri.length
    ? S.galeri.map((g, i) => `
      <figure class="shot rv" data-i="${i}" tabindex="0" role="button" aria-label="Perbesar foto: ${esc(g.ket)}">
        <img loading="lazy" src="${esc(g.src)}" alt="${esc(g.ket)}">
        <figcaption>${esc(g.ket)}${g.tanggal ? `<small>${esc(g.tanggal)}</small>` : ""}</figcaption>
      </figure>`).join("")
    : empty("Dokumentasi kegiatan pembelajaran akan segera ditampilkan di sini.");

  const lb = $("lightbox");
  const open = (i) => {
    const g = S.galeri[i];
    lb.querySelector("img").src = g.src;
    lb.querySelector("img").alt = g.ket;
    lb.querySelector("p").textContent = g.ket;
    lb.hidden = false;
  };
  $("gallery").addEventListener("click", (e) => { const f = e.target.closest(".shot"); if (f) open(+f.dataset.i); });
  $("gallery").addEventListener("keydown", (e) => { const f = e.target.closest(".shot"); if (f && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); open(+f.dataset.i); } });
  lb.addEventListener("click", () => (lb.hidden = true));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") lb.hidden = true; });

  $("berita").innerHTML = S.berita.length
    ? `<h3 style="margin-top:3rem">Berita &amp; Kegiatan</h3><div class="news">${S.berita.map((b) => `<article class="card rv"><time>${esc(b.tanggal)}</time><h3>${esc(b.judul)}</h3><p>${esc(b.ringkas)}</p></article>`).join("")}</div>`
    : "";

  /* Kontak */
  const items = [];
  if (K.alamat) items.push(["📍", "Alamat", esc(K.alamat)]);
  if (K.whatsapp) items.push(["💬", "WhatsApp", `<a href="${esc(waLink)}" target="_blank" rel="noopener">+${esc(K.whatsapp.replace(/\D/g, ""))}</a>`]);
  if (K.telepon) items.push(["📞", "Telepon", `<a href="tel:${esc(K.telepon.replace(/[^\d+]/g, ""))}">${esc(K.telepon)}</a>`]);
  if (K.email) items.push(["✉️", "Email", `<a href="mailto:${esc(K.email)}">${esc(K.email)}</a>`]);
  if (K.jamLayanan) items.push(["🕒", "Jam Layanan", esc(K.jamLayanan)]);
  const labels = { instagram: "Instagram", facebook: "Facebook", youtube: "YouTube", tiktok: "TikTok" };
  const soc = Object.entries(K.sosmed || {}).filter(([, u]) => safeUrl(u));
  $("kontakInfo").innerHTML =
    (items.length ? items.map(([ic, l, v]) => `<div class="kitem"><div class="kitem__ic">${ic}</div><div><small>${l}</small>${v}</div></div>`).join("") : '<p style="color:#a9c4b2">Data kontak resmi akan segera ditambahkan.</p>') +
    (soc.length ? `<div class="soc">${soc.map(([k, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${labels[k] || k}</a>`).join("")}</div>` : "");
  $("footSoc").innerHTML = soc.map(([k, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${labels[k] || k}</a>`).join("");

  $("peta").innerHTML = safeUrl(K.mapsEmbed)
    ? `<iframe loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${esc(K.mapsEmbed)}" title="Peta lokasi PKBM Lentera Ilmu" allowfullscreen></iframe>`
    : empty(safeUrl(K.mapsLink) ? `<a class="btn btn--gold" target="_blank" rel="noopener" href="${esc(K.mapsLink)}">Buka di Google Maps</a>` : "Peta lokasi akan ditampilkan setelah alamat resmi dikonfirmasi.");

  if (waLink) { const w = $("waFloat"); w.href = waLink; w.hidden = false; }

  /* Menu mobile */
  const tg = document.querySelector(".nav__toggle"), menu = $("menu");
  tg.addEventListener("click", () => { const o = menu.classList.toggle("open"); tg.setAttribute("aria-expanded", o); });
  menu.addEventListener("click", (e) => { if (e.target.tagName === "A") { menu.classList.remove("open"); tg.setAttribute("aria-expanded", false); } });

  /* Animasi muncul */
  document.querySelectorAll(".sec__head,.profil,.vm,.daftar,.org,.jd,.kontak").forEach((e) => e.classList.add("rv"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.08 });
    document.querySelectorAll(".rv").forEach((e) => io.observe(e));
  } else document.querySelectorAll(".rv").forEach((e) => e.classList.add("in"));
})();
