// ============ DATA AWAL (DUMMY) - DATA ASLI WARUNG ============
const DATA_AWAL = [
{ id: 1, nama: "ABC KECAP MANIS 135 ML", satuan: "Pcs", hargaRestock: 4000, hargaJual: 5000 },
  { id: 2, nama: "ABC KECAP MANIS 65 ML", satuan: "Pcs", hargaRestock: 1700, hargaJual: 2500 },
  { id: 3, nama: "ABC KOPI SUSU 10X30G", satuan: "Renteng (10 pcs)", hargaRestock: 17000, hargaJual: 19500 },
  { id: 4, nama: "ARDEN CHOCO SPLENDID 72 G", satuan: "Pcs", hargaRestock: 7500, hargaJual: 9000 },
  { id: 5, nama: "BANGO KECAP MANIS 135 ML", satuan: "Pcs", hargaRestock: 9000, hargaJual: 10500 },
  { id: 6, nama: "BANGO KECAP MANIS 200 ML", satuan: "Pcs", hargaRestock: 9500, hargaJual: 11000 },
  { id: 7, nama: "BANGO KECAP MANIS 60 ML", satuan: "Pcs", hargaRestock: 2700, hargaJual: 3500 },
  { id: 8, nama: "BEDAK SALICYL GAJAH MENTHOL", satuan: "Botol/Fls", hargaRestock: 8500, hargaJual: 10500 },
  { id: 9, nama: "BENG BENG 8 BOX", satuan: "Box", hargaRestock: 37000, hargaJual: 42000 },
  { id: 10, nama: "BERAS MEDIUM 1 KG", satuan: "Kg", hargaRestock: 13500, hargaJual: 15000 },
  { id: 11, nama: "BIG ARIES 10 PCS", satuan: "Pack (10 pcs)", hargaRestock: 18000, hargaJual: 21000 },
  { id: 12, nama: "BLASTER NEAPOLITAN 50X2.5 G", satuan: "Pack (50 butir)", hargaRestock: 6500, hargaJual: 8000 },
  { id: 13, nama: "BODREX", satuan: "Blister", hargaRestock: 5000, hargaJual: 6000 },
  { id: 14, nama: "BODREXIN TABLET", satuan: "Strip", hargaRestock: 1800, hargaJual: 2500 },
  { id: 15, nama: "BUMBU 4000", satuan: "Pcs", hargaRestock: 4000, hargaJual: 5000 },
  { id: 16, nama: "BUMBU RACIK AYAM GORENG 10X26 G", satuan: "Renteng (10 pcs)", hargaRestock: 16000, hargaJual: 18500 },
  { id: 17, nama: "BUMBU RACIK IKAN GORENG 10X20 G", satuan: "Renteng (10 pcs)", hargaRestock: 16000, hargaJual: 18500 },
  { id: 18, nama: "BUMBU RACIK SAYUR ASEM 10X20 G", satuan: "Renteng (10 pcs)", hargaRestock: 16000, hargaJual: 18500 },
  { id: 19, nama: "BUMBU RACIK SAYUR SUP 10X20 G", satuan: "Renteng (10 pcs)", hargaRestock: 16000, hargaJual: 18500 },
  { id: 20, nama: "CHARM EXTRA MAXI 8 PADS", satuan: "Pcs", hargaRestock: 5200, hargaJual: 6500 },
  { id: 21, nama: "CHIKI BALLS 10X16G", satuan: "Pack (10 pcs)", hargaRestock: 18000, hargaJual: 21000 },
  { id: 22, nama: "CHIKI TWIST 10X22.5 ML", satuan: "Renteng (10 pcs)", hargaRestock: 18000, hargaJual: 21000 },
  { id: 23, nama: "CHOCOLATOS WAFER ROLL KECIL 24 PCS", satuan: "Box (24 pcs)", hargaRestock: 10500, hargaJual: 13000 },
  { id: 24, nama: "CHOYO CHOYO RAINBOW 20X140G", satuan: "Pack", hargaRestock: 9000, hargaJual: 11000 },
  { id: 25, nama: "CLEVO CHOCOLATE 125 ML", satuan: "Pcs/Kotak", hargaRestock: 2400, hargaJual: 3500 },
  { id: 26, nama: "CLOSE UP MENTHOL FRESH 75G", satuan: "Pcs", hargaRestock: 7000, hargaJual: 8500 },
  { id: 27, nama: "CRISPY CRACKERS 225 G", satuan: "Pcs", hargaRestock: 9750, hargaJual: 11500 },
  { id: 28, nama: "DAIA DETERGEN PUTIH 6X57 G", satuan: "Renteng (6 pcs)", hargaRestock: 5000, hargaJual: 6000 },
  { id: 29, nama: "DOWNY SUNRISE FRESH 6X22 ML", satuan: "Renteng (6 pcs)", hargaRestock: 5000, hargaJual: 6000 },
  { id: 30, nama: "EKOMIE 2 110 G", satuan: "Pcs", hargaRestock: 2200, hargaJual: 3000 },
  { id: 31, nama: "FITRI 200 ML", satuan: "Pcs/Pouch", hargaRestock: 5250, hargaJual: 6500 },
  { id: 32, nama: "FRISIAN FLAG KENTAL MANIS 6X40 G", satuan: "Renteng (6 pcs)", hargaRestock: 8000, hargaJual: 9500 },
  { id: 33, nama: "FULLO PACK PEDE CHOCOLATE 24X9 G", satuan: "Box (24 pcs)", hargaRestock: 10750, hargaJual: 13000 },
  { id: 34, nama: "GARAM DANGDUT BATA", satuan: "Pack/Slop", hargaRestock: 23000, hargaJual: 26000 },
  { id: 35, nama: "GEMEZ ENAAK SPICY CHILI 10X14G", satuan: "Renteng (10 pcs)", hargaRestock: 9000, hargaJual: 11000 },
  { id: 36, nama: "GOOD DAY MOCACINO 10X20G", satuan: "Renteng (10 pcs)", hargaRestock: 14800, hargaJual: 17000 },
  { id: 37, nama: "GULA MERAH 1 KG", satuan: "Kg", hargaRestock: 23000, hargaJual: 26000 },
  { id: 38, nama: "GULA PASIR MK 1 KG", satuan: "Pcs", hargaRestock: 17000, hargaJual: 19000 },
  { id: 39, nama: "HEMART 500X12 BOTOL", satuan: "Dus (12 botol)", hargaRestock: 135000, hargaJual: 155000 },
  { id: 40, nama: "HEMART MINYAK GORENG SAWIT 900 ML BOTOL", satuan: "Botol", hargaRestock: 20500, hargaJual: 23000 },
  { id: 41, nama: "INDOCAFE COFFEEMIX 3 IN 1 10X20 G", satuan: "Renteng (10 pcs)", hargaRestock: 16250, hargaJual: 18500 },
  { id: 42, nama: "INDOFOOD KECAP MANIS 60 ML", satuan: "Pcs", hargaRestock: 1700, hargaJual: 2500 },
  { id: 43, nama: "JAZ 1 ROSE BLOSSOM 6X45 G", satuan: "Renteng (6 pcs)", hargaRestock: 5000, hargaJual: 6000 },
  { id: 44, nama: "KALPA 26 PCS", satuan: "Box (26 pcs)", hargaRestock: 23000, hargaJual: 27000 },
  { id: 45, nama: "KAPAL API COFFEE CANDY 50X2.5 G", satuan: "Pack (50 butir)", hargaRestock: 6500, hargaJual: 8000 },
  { id: 46, nama: "KAPAL API SPECIAL 60 GR", satuan: "Pcs", hargaRestock: 9000, hargaJual: 10500 },
  { id: 47, nama: "KAPAL API SPECIAL MIX 10X23G", satuan: "Renteng (10 pcs)", hargaRestock: 17250, hargaJual: 19500 },
  { id: 48, nama: "KENTJANA KECAP MANIS 220 ML", satuan: "Pcs", hargaRestock: 10000, hargaJual: 12000 },
  { id: 49, nama: "KIKO STICK 50 ML", satuan: "Pack", hargaRestock: 8000, hargaJual: 10000 },
  { id: 50, nama: "KING KONG 150 G", satuan: "Pcs", hargaRestock: 5000, hargaJual: 6000 },
  { id: 51, nama: "KOPI KAPAL API MIX", satuan: "Renteng/Pack", hargaRestock: 17000, hargaJual: 19500 },
  { id: 52, nama: "KOYO CABE", satuan: "Sachet", hargaRestock: 11500, hargaJual: 13500 },
  { id: 53, nama: "KRIS BEE FRENCH FRIES 10X13 G", satuan: "Renteng (10 pcs)", hargaRestock: 9000, hargaJual: 11000 },
  { id: 54, nama: "KRUPUK BUNGKUSAN 250 G", satuan: "Pcs", hargaRestock: 5500, hargaJual: 7000 },
  { id: 55, nama: "LAURIER SUPER MAXI ACTIVE DAY 8 PCS", satuan: "Pcs", hargaRestock: 4500, hargaJual: 5500 },
  { id: 56, nama: "LIFEBUOY ANTI KETOMBE 12X10 ML", satuan: "Renteng (12 pcs)", hargaRestock: 5000, hargaJual: 6500 },
  { id: 57, nama: "LIFEBUOY GERM EXPERT 60G", satuan: "Pcs", hargaRestock: 3200, hargaJual: 4000 },
  { id: 58, nama: "MINYAK KAYU PUTIH LANG 15ML", satuan: "Botol/Fls", hargaRestock: 6800, hargaJual: 8500 },
  { id: 59, nama: "MINYAK KAYU PUTIH LANG 30ML", satuan: "Botol/Fls", hargaRestock: 11500, hargaJual: 13500 },
  { id: 60, nama: "MINYAK RIZKI BKP 900 ML", satuan: "Pcs/Pouch", hargaRestock: 18500, hargaJual: 21000 },
  { id: 61, nama: "NABATI SIIP RICHOCO 10X12G", satuan: "Renteng (10 pcs)", hargaRestock: 9000, hargaJual: 11000 },
  { id: 62, nama: "NOMOS PREMIUM 10 JAM", satuan: "Pcs", hargaRestock: 4000, hargaJual: 5000 },
  { id: 63, nama: "NUTRISARI LEMON TEA 10X14 G", satuan: "Renteng (10 pcs)", hargaRestock: 13500, hargaJual: 15500 },
  { id: 64, nama: "NUTRISARI STRAWBERRY 10X11 G", satuan: "Renteng (10 pcs)", hargaRestock: 13500, hargaJual: 15500 },
  { id: 65, nama: "OSKADON", satuan: "Strip", hargaRestock: 2300, hargaJual: 3000 },
  { id: 66, nama: "PANTENE SHAMPO RAMBUT RUSAK 12X10 ML", satuan: "Renteng (12 pcs)", hargaRestock: 9800, hargaJual: 11500 },
  { id: 67, nama: "PARAMEX", satuan: "Strip", hargaRestock: 2500, hargaJual: 3500 },
  { id: 68, nama: "PATIH / KANJI 1 KG", satuan: "Pcs", hargaRestock: 12500, hargaJual: 14500 },
  { id: 69, nama: "PEPSODENT WHITE 75 G", satuan: "Pcs", hargaRestock: 4500, hargaJual: 6000 },
  { id: 70, nama: "PLASTIK APOLO KECIL", satuan: "Pack", hargaRestock: 4000, hargaJual: 5000 },
  { id: 71, nama: "PLASTIK APOLO TANGGUNG", satuan: "Pack", hargaRestock: 5500, hargaJual: 7000 },
  { id: 72, nama: "PLASTIK BOYO 1/4 KG", satuan: "Pack", hargaRestock: 2500, hargaJual: 3500 },
  { id: 73, nama: "POP ICE DURIAN 10X25 G", satuan: "Renteng (10 pcs)", hargaRestock: 11800, hargaJual: 14000 },
  { id: 74, nama: "PROCHIZ CHEESE SNACK 10X16G", satuan: "Pack (10 pcs)", hargaRestock: 18000, hargaJual: 21000 },
  { id: 75, nama: "PROTEX SOFT CARE MAXI WING 5 PADS", satuan: "Pcs", hargaRestock: 3000, hargaJual: 4000 },
  { id: 76, nama: "RINSO LIQUID CLASSIC FRESH 6X40G", satuan: "Renteng (6 pcs)", hargaRestock: 5000, hargaJual: 6000 },
  { id: 77, nama: "ROMA BISKUIT KELAPA 300 G", satuan: "Pcs", hargaRestock: 8500, hargaJual: 10500 },
  { id: 78, nama: "ROSE BRAND TEPUNG BERAS 200 G", satuan: "Pcs", hargaRestock: 3500, hargaJual: 4500 },
  { id: 79, nama: "ROSE BRAND TEPUNG BERAS 500 G", satuan: "Pcs", hargaRestock: 8500, hargaJual: 10000 },
  { id: 80, nama: "ROYCO RASA AYAM", satuan: "Pcs", hargaRestock: 4750, hargaJual: 5500 },
  { id: 81, nama: "SAJIKU TEPUNG BUMBU 10X80 G", satuan: "Renteng (10 pcs)", hargaRestock: 25500, hargaJual: 29000 },
  { id: 82, nama: "SARIMI GELAS RASA SOSIS 10X30 G", satuan: "Renteng (10 pcs)", hargaRestock: 9000, hargaJual: 11000 },
  { id: 83, nama: "SARIMI GELAS SOTO AYAM 10X30 G", satuan: "Renteng (10 pcs)", hargaRestock: 9000, hargaJual: 11000 },
  { id: 84, nama: "SASA 20 G", satuan: "Pcs", hargaRestock: 950, hargaJual: 1500 },
  { id: 85, nama: "SEDAAP AYAM BAWANG 40X70 G", satuan: "Karton (40 pcs)", hargaRestock: 110500, hargaJual: 125000 },
  { id: 86, nama: "SEDAAP GORENG 40X90 G", satuan: "Karton (40 pcs)", hargaRestock: 116000, hargaJual: 130000 },
  { id: 87, nama: "SEDAAP KECAP MANIS 135 ML", satuan: "Pcs", hargaRestock: 3750, hargaJual: 5000 },
  { id: 88, nama: "SEDAAP KECAP MANIS 60 ML", satuan: "Pcs", hargaRestock: 1700, hargaJual: 2500 },
  { id: 89, nama: "SKM BENDERA COKLAT RCG", satuan: "Crt / Dus", hargaRestock: 151000, hargaJual: 170000 },
  { id: 90, nama: "SKM BENDERA KREMER RCG", satuan: "Crt / Dus", hargaRestock: 151000, hargaJual: 170000 },
  { id: 91, nama: "SO KLIN MAGNOLIA & BERRIES 6X45G", satuan: "Renteng (6 pcs)", hargaRestock: 5000, hargaJual: 6000 },
  { id: 92, nama: "SONICE SOSIS SIAP MAKAN RASA SAPI 24X22 G", satuan: "Toples/Box", hargaRestock: 19000, hargaJual: 23000 },
  { id: 93, nama: "SUK KARA 65ML", satuan: "Pcs", hargaRestock: 5400, hargaJual: 6500 },
  { id: 94, nama: "SUNLIGHT JERUK NIPIS 210 ML", satuan: "Pcs", hargaRestock: 4500, hargaJual: 5500 },
  { id: 95, nama: "SUNLIGHT JERUK NIPIS 90 ML", satuan: "Pcs", hargaRestock: 1750, hargaJual: 2500 },
  { id: 96, nama: "SUNLIGHT COLEK 110 G", satuan: "Pcs", hargaRestock: 2000, hargaJual: 2500 },
  { id: 97, nama: "SUPERSTAR TRIPLE CHOCOLATE 20+1X16G", satuan: "Box (21 pcs)", hargaRestock: 19000, hargaJual: 23000 },
  { id: 98, nama: "TARO 9 GR", satuan: "Renteng (10 pcs)", hargaRestock: 9000, hargaJual: 11000 },
  { id: 99, nama: "TEH GELAS 12X250 ML", satuan: "Dus (12 botol/gelas)", hargaRestock: 21000, hargaJual: 25000 },
  { id: 100, nama: "TEH JAWA 10X45 G", satuan: "Pak (10 pcs)", hargaRestock: 41000, hargaJual: 46000 },
  { id: 101, nama: "TEH JAWA 24X120 ML", satuan: "Dus (24 gelas)", hargaRestock: 21000, hargaJual: 25000 },
  { id: 102, nama: "TEH JAWA CELUP 25X2 G", satuan: "Pcs", hargaRestock: 9500, hargaJual: 11500 },
  { id: 103, nama: "TELUR 1 KG", satuan: "Kg", hargaRestock: 26500, hargaJual: 29000 },
  { id: 104, nama: "TERIGU CANTING 1 KG", satuan: "Pcs", hargaRestock: 8000, hargaJual: 9500 },
  { id: 105, nama: "TOLAK ANGIN 12X15 ML", satuan: "Box (12 sachet)", hargaRestock: 45000, hargaJual: 52000 },
  { id: 106, nama: "TOP COFFEE GULA AREN 10+5X22G", satuan: "Renteng (15 pcs)", hargaRestock: 17300, hargaJual: 20000 },
  { id: 107, nama: "TOP KOPI GULA AREN", satuan: "Renteng/Pack", hargaRestock: 17500, hargaJual: 20000 },
  { id: 108, nama: "TOP PLUS 10X18 G", satuan: "Renteng (10 pcs)", hargaRestock: 8400, hargaJual: 10000 },
  { id: 109, nama: "YUPI STRAWBERRY KISS TOPLES", satuan: "Toples", hargaRestock: 25000, hargaJual: 30000 },
  { id: 110, nama: "ZINC SHAMPO AD GREEN TEA MINT 12X10 ML", satuan: "Renteng (12 pcs)", hargaRestock: 5000, hargaJual: 6500 },
  { id: 111, nama: "MINYAK KITA POUCH 1 LITER", satuan: "Pcs", hargaRestock: 14500, hargaJual: 16000 },
  { id: 112, nama: "BAWANG MERAH 250 G", satuan: "Pack", hargaRestock: 8000, hargaJual: 10000 },
  { id: 113, nama: "BAWANG PUTIH 250 G", satuan: "Pack", hargaRestock: 9000, hargaJual: 11000 },
  { id: 114, nama: "MARIMAS ES LILIN ANEKA RASA 10X7G", satuan: "Renteng (10 pcs)", hargaRestock: 6000, hargaJual: 8000 },
  { id: 115, nama: "INDOMIE GORENG SPESIAL 85 G", satuan: "Pcs", hargaRestock: 3100, hargaJual: 3800 },
  { id: 116, nama: "INDOMIE RASA AYAM BAWANG 75 G", satuan: "Pcs", hargaRestock: 2900, hargaJual: 3500 },
  { id: 117, nama: "AQUA AIR MINERAL 600 ML", satuan: "Botol", hargaRestock: 3200, hargaJual: 4500 },
  { id: 118, nama: "TEH PUCUK HARUM 350 ML", satuan: "Botol", hargaRestock: 3100, hargaJual: 4000 },
  { id: 119, nama: "WIPOL KARBOL WANGI POUCH 240 ML", satuan: "Pcs", hargaRestock: 6500, hargaJual: 8000 },
  { id: 120, nama: "MINYAK TELON CAP LANG 30 ML", satuan: "Botol", hargaRestock: 13000, hargaJual: 15500 },
  { id: 121, nama: "KOREK API KAYU TOKAI PACK", satuan: "Pack", hargaRestock: 7000, hargaJual: 9000 },
  { id: 122, nama: "PLASTIK BOYO 1/2 KG", satuan: "Pack", hargaRestock: 2700, hargaJual: 4000 }
];

const KEY_STORAGE = "daftarBarangWarung";

// ============ STATE ============
let daftarBarang = [];
let katakunciCari = "";
let idEdit = null;
let idHapus = null;

// ============ ELEMENT ============
const elDaftar = document.getElementById("daftarBarang");
const elEmptyMsg = document.getElementById("emptyMsg");
const elInfoJumlah = document.getElementById("infoJumlah");
const elSearch = document.getElementById("searchInput");

const elModalTambahOverlay = document.getElementById("modalTambahOverlay");
const elInputNamaBaru = document.getElementById("inputNamaBaru");
const elInputSatuanBaru = document.getElementById("inputSatuanBaru");
const elInputRestockBaru = document.getElementById("inputRestockBaru");
const elInputJualBaru = document.getElementById("inputJualBaru");

const elModalEditOverlay = document.getElementById("modalEditOverlay");
const elInputNamaEdit = document.getElementById("inputNamaEdit");
const elInputSatuanEdit = document.getElementById("inputSatuanEdit");
const elInputModalEdit = document.getElementById("inputModalEdit");
const elInputJualEdit = document.getElementById("inputJualEdit");

const elModalHapusOverlay = document.getElementById("modalHapusOverlay");
const elNamaBarangHapus = document.getElementById("namaBarangHapus");

// ============ FUNGSI STORAGE ============
function muatData() {
  const data = localStorage.getItem(KEY_STORAGE);
  if (data) {
    daftarBarang = JSON.parse(data);
  } else {
    daftarBarang = DATA_AWAL;
    simpanData();
  }
}

function simpanData() {
  localStorage.setItem(KEY_STORAGE, JSON.stringify(daftarBarang));
}

// ============ FORMAT HARGA ============
function formatHarga(angka) {
  return "Rp " + Number(angka).toLocaleString("id-ID");
}

// ============ RENDER DAFTAR BARANG ============
function renderDaftar() {
  let hasil = daftarBarang.filter(item =>
    item.nama.toLowerCase().includes(katakunciCari.toLowerCase())
  );

  // Urutkan berdasarkan nama (A-Z)
  hasil.sort((a, b) => a.nama.localeCompare(b.nama));

  elInfoJumlah.textContent = `Menampilkan ${hasil.length} dari ${daftarBarang.length} barang`;

  elDaftar.innerHTML = "";

  if (hasil.length === 0) {
    elEmptyMsg.style.display = "block";
    return;
  }
  elEmptyMsg.style.display = "none";

  hasil.forEach(item => {
    const card = document.createElement("div");
    card.className = "item-card";
    card.innerHTML = `
      <div class="item-top">
        <div class="item-info">
          <div class="item-nama">${escapeHTML(item.nama)}</div>
          <span class="item-satuan">${escapeHTML(item.satuan)}</span>
        </div>
      </div>
      <div class="harga-row">
        <div class="harga-modal">
          <span class="harga-modal-label">Modal</span>
          <span class="harga-modal-nilai">${formatHarga(item.hargaRestock)}</span>
        </div>
        <div class="harga-jual">
          <span class="harga-jual-label">Harga Jual</span>
          <span class="harga-jual-nilai">${formatHarga(item.hargaJual)}</span>
        </div>
      </div>
      <div class="item-actions">
        <button class="btn-edit" data-id="${item.id}">✏️ Ubah Harga</button>
        <button class="btn-hapus" data-id="${item.id}">🗑️ Hapus</button>
      </div>
    `;
    elDaftar.appendChild(card);
  });

  document.querySelectorAll(".btn-edit").forEach(btn => {
    btn.addEventListener("click", () => bukaModalEdit(Number(btn.dataset.id)));
  });
  document.querySelectorAll(".btn-hapus").forEach(btn => {
    btn.addEventListener("click", () => bukaModalHapus(Number(btn.dataset.id)));
  });
}

function escapeHTML(teks) {
  const div = document.createElement("div");
  div.textContent = teks;
  return div.innerHTML;
}

// ============ PENCARIAN ============
elSearch.addEventListener("input", () => {
  katakunciCari = elSearch.value;
  renderDaftar();
});

// ============ MODAL TAMBAH BARANG BARU ============
document.getElementById("btnTambah").addEventListener("click", () => {
  elInputNamaBaru.value = "";
  elInputSatuanBaru.value = "";
  elInputRestockBaru.value = "";
  elInputJualBaru.value = "";
  elModalTambahOverlay.classList.add("show");
  elInputNamaBaru.focus();
});

document.getElementById("btnBatalTambah").addEventListener("click", () => {
  elModalTambahOverlay.classList.remove("show");
});

elModalTambahOverlay.addEventListener("click", (e) => {
  if (e.target === elModalTambahOverlay) elModalTambahOverlay.classList.remove("show");
});

document.getElementById("btnSimpanTambah").addEventListener("click", () => {
  const nama = elInputNamaBaru.value.trim();
  const satuan = elInputSatuanBaru.value.trim() || "Pcs";
  const restock = elInputRestockBaru.value;
  let jual = elInputJualBaru.value;

  if (nama === "") {
    alert("Nama barang tidak boleh kosong.");
    elInputNamaBaru.focus();
    return;
  }
  if (restock === "" || Number(restock) < 0) {
    alert("Harga Restock harus diisi dengan angka yang benar.");
    elInputRestockBaru.focus();
    return;
  }

  // Jika harga jual kosong, samakan dengan harga restock
  if (jual === "" || Number(jual) < 0) {
    jual = restock;
  }

  const idBaru = daftarBarang.length > 0
    ? Math.max(...daftarBarang.map(b => b.id)) + 1
    : 1;

  daftarBarang.push({
    id: idBaru,
    nama: nama,
    satuan: satuan,
    hargaRestock: Number(restock),
    hargaJual: Number(jual)
  });

  simpanData();
  renderDaftar();
  elModalTambahOverlay.classList.remove("show");
});

// ============ MODAL EDIT BARANG ============
function bukaModalEdit(id) {
  const item = daftarBarang.find(b => b.id === id);
  if (!item) return;

  idEdit = id;
  elInputNamaEdit.value = item.nama;
  elInputSatuanEdit.value = item.satuan;
  elInputModalEdit.value = item.hargaRestock;
  elInputJualEdit.value = item.hargaJual;
  elModalEditOverlay.classList.add("show");
  elInputNamaEdit.focus();
  elInputNamaEdit.select();
}

document.getElementById("btnBatalEdit").addEventListener("click", () => {
  elModalEditOverlay.classList.remove("show");
  idEdit = null;
});

elModalEditOverlay.addEventListener("click", (e) => {
  if (e.target === elModalEditOverlay) {
    elModalEditOverlay.classList.remove("show");
    idEdit = null;
  }
});

document.getElementById("btnSimpanEdit").addEventListener("click", () => {
  const namaBaru = elInputNamaEdit.value.trim();
  const satuanBaru = elInputSatuanEdit.value.trim();
  const modalBaru = elInputModalEdit.value;
  const jualBaru = elInputJualEdit.value;

  if (namaBaru === "") {
    alert("Nama barang tidak boleh kosong.");
    elInputNamaEdit.focus();
    return;
  }

  if (satuanBaru === "") {
    alert("Satuan tidak boleh kosong.");
    elInputSatuanEdit.focus();
    return;
  }

  if (modalBaru === "" || Number(modalBaru) < 0) {
    alert("Harga Restock/Modal harus diisi dengan angka yang benar.");
    elInputModalEdit.focus();
    return;
  }

  if (jualBaru === "" || Number(jualBaru) < 0) {
    alert("Harga Jual harus diisi dengan angka yang benar.");
    elInputJualEdit.focus();
    return;
  }

  const item = daftarBarang.find(b => b.id === idEdit);
  if (item) {
    item.nama = namaBaru;
    item.satuan = satuanBaru;
    item.hargaRestock = Number(modalBaru);
    item.hargaJual = Number(jualBaru);
    simpanData();
    renderDaftar();
  }

  elModalEditOverlay.classList.remove("show");
  idEdit = null;
});

// ============ MODAL HAPUS ============
function bukaModalHapus(id) {
  const item = daftarBarang.find(b => b.id === id);
  if (!item) return;

  idHapus = id;
  elNamaBarangHapus.textContent = item.nama;
  elModalHapusOverlay.classList.add("show");
}

document.getElementById("btnBatalHapus").addEventListener("click", () => {
  elModalHapusOverlay.classList.remove("show");
  idHapus = null;
});

elModalHapusOverlay.addEventListener("click", (e) => {
  if (e.target === elModalHapusOverlay) {
    elModalHapusOverlay.classList.remove("show");
    idHapus = null;
  }
});

document.getElementById("btnHapusConfirm").addEventListener("click", () => {
  daftarBarang = daftarBarang.filter(b => b.id !== idHapus);
  simpanData();
  renderDaftar();
  elModalHapusOverlay.classList.remove("show");
  idHapus = null;
});

// ============ INISIALISASI ============
muatData();
renderDaftar();
