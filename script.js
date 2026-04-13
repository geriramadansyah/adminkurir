const dataRute = [
["278",18], ["AA MART",14], ["ABBIYU",30], ["Adam Katering",19], ["Adima Dwi Tunggal / ADJ",36], ["ASN",3], ["AFCO AYAM",8], ["Agen Telut Rafi",1], ["AKENA PLASTIK",2], ["ANDES",16], ["Andyan Gorust",8], ["Aneka Jaya Printing",8], ["Antilop",9], ["APM Frozen",8], ["Ario",4], ["ARTHA CATHERING",22], ["ASF KG",22], ["ASF MGC",17], ["Atu Ua Iga",29], ["AYAM JALU BOILER",9], ["Babeh Tongseng",15], ["Baking Story",6], ["Bakukita Galaxy",2], ["Bakukita Rawalumbu",7], ["Balik Arah",2], ["BAROKAH MANDIRI BEEF",12], ["Baron",26], ["BCA",3], ["BCA Plastik",2], ["Bebek Joss",40], ["Bels Mart",1], ["BERKAH LESTARI",10], ["Bintang Lia Catering",22], ["BIRO PROVOS POLRI",24], ["BOGA JAYA GEMILANG",14], ["BOILER AYAM",2], ["Brother Chicken",25], ["Bu Dhadi",6], ["BUDS CHICKEN",2], ["Bellsmart",1], ["Chef Wangsa HERMOSA",44], ["Chicken Country",6], ["CIK CIK",33], ["CLEOPATRA HOUSE",9], ["COLUMBIA WAREHOUSE",25], ["Communal",9], ["CUP JATINEGARA",20], ["Dadar Shop",5], ["Daffi Frozen",25], ["Darmi",14], ["De Supplies",8], ["DELVI KITCHEN",3], ["DEMEN JAJAN SERBUK",14], ["DEMINIMALIST",6], ["Dianti BRI",10], ["Dikta",43], ["Dousepath",1], ["DPP",5], ["Dubai Ocean",38], ["Elang Frozen",7], ["Ellyana Residence",7], ["Elysium",24], ["Ezra Cafe",2], ["FJA",14], ["Flowey SCBD",23], ["Flowey Sentul",45], ["FOTOCOPY GALAXY",1], ["Frozen Lussy",16], ["Frozenology",9], ["Gandoang",25], ["Gastro Hnur",32], ["GKBR AGUS SALIM",10], ["GOODYBAG BINTARA",9], ["GRIYA JATISARI JAKASAMPURNA",7], ["Gudang Stek 21",30], ["Hangout Salihara",23], ["Harmuni Catering",5], ["Harto Ayam",2], ["Helios",45], ["HEMA",4], ["Hermina Jatinegara",19], ["Hermosa",45], ["Hijrah Food",2], ["Hokindo / Srikandi",5], ["Home Bu Ani",17], ["HOME CHEF JHONY",3], ["Home Mba Adinda",4], ["HOME PAK BOY",3], ["HOME PAK HERMAN",4], ["HOME PAK MURING",5], ["HOME SAUDARA MBA TUTI",2], ["House Point",3], ["Ibu Ainun",3], ["IBU AYU",1], ["IBU DHADI",4], ["IBU INA CONDET",16], ["IBU MIMI DWI",53], ["IBU RARA DANAMON",25], ["IBU TIWI",4], ["Ina Condet",16], ["Interaksi Bekasi",1], ["Interaksi Depok",30], ["Iqbal Seafood",39], ["IRVAN BINTARO",41], ["JEDA KOPI",6], ["Jl Medan Raya Pak Gimen",9], ["JNE",6], ["JNT",2], ["Joelle",22], ["Joglo Printing",8], ["Joinhead",18], ["Joni Steak",28], ["Juwita Frozen",4], ["Kaboga Catering",18], ["KANTOR PAJAK",7], ["Karunia Catering",22], ["Kawan Lama",30], ["Kei Sushi",2], ["KGI KITCHEN",27], ["KGI OFFICE BANGKA",22], ["KIARA HOME",1], ["KOPI TALA",2], ["KOPIERTE CAFE",2], ["KOZI RAMEN",2], ["Kuka Meat Shop",3], ["Laila Frozen",9], ["Lestari Pangkalan 1",8], ["Lestari Cipendawa",4], ["Lotus Garden",1], ["Lusi Frozen",36], ["MANDAYA",40], ["Mantra",46], ["Mas Brewok Lenteng Agung",22], ["Matea Bekasi",3], ["Matea Cempaka Putih",22], ["Matea Blok M",25], ["Matea Puncak",59], ["MEAT ME",27], ["Meat Town",2], ["Menara 1 Kelapa Gading",22], ["Midisindo",13], ["MITLOIN JATIBENING",6], ["MITLOIN PANCORAN",19], ["MITLOIN PANCORAN BUNCIT",24], ["MNF",2], ["Mpok Judes",34], ["MSN",36], ["MTH 37 OFFICE",16], ["MTL",3], ["NGI",9], ["Nolda Pocha",42], ["NAS",10], ["Obi Yakimono",9], ["OCEAN",39], ["Oje Steak",7], ["Omah Bara",37], ["OMG",15], ["Pak Angga",8], ["PAK ATE",7], ["Pakis",2], ["Panglima Chicken",14], ["PASAR BARU BEKASI",10], ["PASAR KECAPI",9], ["PASAR Jatiasih",2], ["Pasar Kranji",7], ["PHBB",6], ["PHBT",10], ["PHBU",12], ["PML",2], ["PNP Gading",22], ["PNP Greenville",32], ["Ponyo",8], ["Primachef",6], ["PRINTING GALAXY",2], ["Prompt",14], ["PSY BINTARO",39], ["PT Estika",18], ["PT Indo Jaya Food",18], ["PT PANGANSARI",20], ["PT SIP",20], ["PT Bintang Lia Catering",22], ["PT SRI PARPOSTEL",7], ["PUKIS KOTA BARU SUNTER",29], ["PURI KRANJI REGENCY",7], ["PURNAMA ALAM",27], ["Putri Kembar",56], ["Qisty",11], ["Ratu Daging",9], ["RAU",10], ["Ridho",8], ["RJB",5], ["RMB",6], ["RSI Muara Angke",38], ["Ruko Festival",11], ["Ruko Festival Steak 21",12], ["Ruko RSK",2], ["Rumah Bang Angky",5], ["Rumah Mas Adhi",3], ["Rumah Bang Jendra",8], ["Rumah Bu Ina",16], ["Saidi MAHACHANUM",36], ["Salmonku",34], ["Sarana Inti Pangan",20], ["Sasuki Home",2], ["SAU",18], ["SCOTLATE FREEZER",3], ["Segar Mulia",50], ["Sentra Daging Kemang",4], ["SERBUK TANGSEL",40], ["Setia Jaya",1], ["Shamrock",20], ["Simeta",3], ["SIMETRI",8], ["Sinyo Groceries",12], ["SIP",20], ["Situ Cafe",10], ["SM AYAM",14], ["Steak 21 HI",13], ["STEAK WITH U",3], ["STEROFOAM RAWALUMBU",6], ["Sudo Brew",16], ["Sujudi",34], ["SUKIBRAY",1], ["SUKIBRAY CIKUNIR",3], ["Sukibray Home",3], ["Sukibray Resto",2], ["SUTEKI",2], ["TELU STEAK",2], ["TENGGIRI JAKUT",36], ["Tens Mart",12], ["Tiga Dara Ayam",12], ["Tinta Print",4], ["TJM",35], ["Toko Buku",2], ["TOKO DAGING MESIN",10], ["TOKO IRWAN PLASTIK",2], ["Toko Kue Kartika",30], ["Tuna Jaya Makmur",35], ["UMARA",27], ["Uniko Cibubur",17], ["UNIVERS",25], ["WARNA MEDIA",7], ["WAROENG DIGITAL",2], ["WAYANG BISTRO",21], ["Wiens Food",7], ["WIRA JATIASIH",7], ["WPU",20], ["WTT",1], ["Yantira",10], ["YOSHI RAMEN",2], ];


const URL = "https://script.google.com/macros/s/AKfycbyU15SAum8ga6TeuQbpxxuL8kRf9PL2_NvFR96Wc7oraqSDSn6HB1Qm1P3o4SF-6uGQ/exec";

let allData = [];

document.addEventListener("DOMContentLoaded", function(){

  showPage("input");

  initAutocomplete(); // 🔥 aktifkan autocomplete

});


// ================= AUTOCOMPLETE =================
function initAutocomplete(){
  const inputRute = document.getElementById("rute");
  const suggestionBox = document.getElementById("suggestions");

  inputRute.addEventListener("input", function(){
    let val = this.value.toLowerCase();
    suggestionBox.innerHTML = "";

    if(val === "") return;

    let filtered = dataRute.filter(d =>
      d[0].toLowerCase().startsWith(val) // 🔥 huruf awal
    );

    filtered.forEach(d=>{
      let div = document.createElement("div");
      div.textContent = d[0];

      div.onclick = function(){
        inputRute.value = d[0];
        document.getElementById("km").value = d[1];
        suggestionBox.innerHTML = "";
      };

      suggestionBox.appendChild(div);
    });
  });

  // klik luar = hide
  document.addEventListener("click", function(e){
    if(!inputRute.contains(e.target)){
      suggestionBox.innerHTML = "";
    }
  });
}


// ================= NAVIGATION =================
function showPage(page){

  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));

  // 🔥 RESET REKAP STATE
  document.getElementById("detailRekap").style.display = "none";
  document.getElementById("tabelRekap").innerHTML = "";
  document.getElementById("listKurir").style.display = "block";
  selectedKurir = "";

  if(page === "input"){
    document.getElementById("inputPage").classList.add("active");
    loadHariIni();

  } else if(page === "riwayat"){
    document.getElementById("riwayatPage").classList.add("active");
    loadRiwayat();

  } else {
    document.getElementById("rekapPage").classList.add("active");
    loadKurir();
  }
}

// ================= KIRIM =================
function kirim(){
  fetch(URL,{
    method:"POST",
    body:JSON.stringify({
      rute: rute.value,
      km: km.value,
      jenis: jenis.value,
      keterangan: ket.value
    })
  }).then(()=>{
    alert("Berhasil");
    loadHariIni();
  });
}


// ================= FORMAT =================
function formatDate(date){
  let d = new Date(date);
  if(isNaN(d)) return "";

  // 🔥 pakai waktu lokal Indonesia
  return d.toLocaleDateString("en-CA"); 
}

function loadKurir(){
  fetch(URL)
  .then(res=>res.json())
  .then(data=>{

    let kurirSet = new Set();

    data.forEach(d=>{
      if(d.kurir && d.kurir !== "-"){
        kurirSet.add(d.kurir);
      }
    });

    let html = "";

    kurirSet.forEach(k=>{
      html += `
        <div onclick="pilihKurir('${k}')">
          👤 ${k}
        </div>
      `;
    });

    document.getElementById("listKurir").innerHTML = html;
  });
}

let selectedKurir = "";

function pilihKurir(nama){
  selectedKurir = nama;
  document.getElementById("listKurir").style.display = "none";
  document.getElementById("detailRekap").style.display = "block";
  document.getElementById("namaKurir").innerText = nama;

  loadRekap();
}

let dataRekap = [];

function loadRekap(){
  fetch(URL + "?sheet=REKAP")
  .then(res=>res.json())
  .then(data=>{
    dataRekap = data;
    filterRekap();
  });
}

function filterRekap(){
  let awal = document.getElementById("tglAwal").value;
  let akhir = document.getElementById("tglAkhir").value;

  let html = `
    <table border="1" width="100%">
      <tr>
        <th>Tanggal</th>
        <th>KM</th>
        <th>Parkir</th>
		<th>Pesanan</th> 
        <th>Pendapatan</th>
      </tr>
  `;

  dataRekap.forEach(d=>{
    if(d.kurir !== selectedKurir) return;

    let tgl = d.tanggal;

    if(awal && tgl < awal) return;
    if(akhir && tgl > akhir) return;

    html += `
      <tr>
        <td>${tgl}</td>
        <td>${d.total_km}</td>
        <td>${d.parkir}</td>
		<td>${d.jumlah_order}</td>
        <td>${d.pendapatan}</td>
      </tr>
    `;
  });

  html += "</table>";

  document.getElementById("tabelRekap").innerHTML = html;
}

// ================= LOAD HARI INI =================
function loadHariIni(){
  fetch(URL)
  .then(res=>res.json())
  .then(data=>{
    let today = formatDate(new Date());

    // 🔥 SORT TERBARU → LAMA
    data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    let html = "";

    data.forEach(d=>{
      let tgl = formatDate(d.timestamp);

      if(tgl === today){
        html += renderItem(d);
      }
    });

    document.getElementById("listHariIni").innerHTML =
      html || "Tidak ada data hari ini";
  });
}

// ================= LOAD RIWAYAT =================
function loadRiwayat(){
  fetch(URL)
  .then(res=>res.json())
  .then(data=>{
    allData = data;
    document.getElementById("tanggal").value = formatDate(new Date());
    filterTanggal();
  });
}


// ================= FILTER =================
function filterTanggal(){
  let tanggal = document.getElementById("tanggal").value;

  let html = "";

  allData.forEach(d=>{
    let tgl = formatDate(d.timestamp);

    if(tgl === tanggal){
      html += renderItem(d);
    }
  });

  document.getElementById("listRiwayat").innerHTML = html || "Tidak ada data";
}

function formatWaktu(date){
  let d = new Date(date);
  if(isNaN(d)) return "-";

  return d.toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

// ================= TEMPLATE =================
function renderItem(d){

  let statusClass = d.status || "READY";

  return `
  <div>
    <h3>${d.rute} (${d.km} KM)</h3>

    <span class="status ${statusClass}">
      ${d.status}
    </span>

    <p>🚚 ${d.jenis}</p>

    <p>keterangan: ${d.ket_admin || "-"}</p>
    <p>🏍 Kurir: ${d.kurir}</p>
    <p>📝 Ket. Kurir: ${d.ket_kurir || "-"}</p>
	<p>🅿️ Parkir: ${d.parkir || 0}</p>
	<p>⏱️ Ambil: ${formatWaktu(d.waktu_ambil)}</p>
	<p>✅ Selesai: ${formatWaktu(d.waktu_selesai)}</p>
  </div>
  `;
}
// ================= AUTO REFRESH =================
setInterval(loadHariIni, 3000); // realtime tiap 5 detik
