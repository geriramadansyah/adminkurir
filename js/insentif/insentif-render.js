function renderTable(){

  let k = document.getElementById("kurirSelect").value;
  let t1 = document.getElementById("tglAwal").value;
  let t2 = document.getElementById("tglAkhir").value;

  let html="";
  let filtered = [];

  if(!k){
    document.getElementById("tableInsentif").innerHTML =
      "<tr><td colspan='5'>Pilih kurir terlebih dahulu</td></tr>";
    return;
  }

  dataRekap.forEach(d=>{

    if(d.kurir !== k) return;

    let tgl = d.tanggal; 
    if(t1 && tgl < t1) return;
    if(t2 && tgl > t2) return;

    filtered.push(d);

    html+=`
      <tr>
        <td>${d.tanggal_asli}</td>
        <td>${d.km}</td>
        <td>${d.parkir}</td>
        <td>${d.pesanan}</td>
        <td>${d.pendapatan}</td>
      </tr>`;
  });

  document.getElementById("tableInsentif").innerHTML =
    html || "<tr><td colspan='5'>Tidak ada data</td></tr>";

  window.filteredInsentif = filtered;
}

function showPrintPopup(){

  let rows = window.filteredInsentif || [];

  if(rows.length === 0){
    alert("Tidak ada data sesuai filter");
    return;
  }

  let totalKM=0, totalParkir=0, totalPesanan=0, totalPendapatan=0;

  rows.forEach(d=>{
    totalKM += Number(d.km || 0);
    totalParkir += Number(d.parkir || 0);
    totalPesanan += Number(d.pesanan || 0);
    totalPendapatan += Number(d.pendapatan || 0);
  });

  let t1 = document.getElementById("tglAwal").value;
  let t2 = document.getElementById("tglAkhir").value;
  let k = document.getElementById("kurirSelect").value;

  document.getElementById("popup").style.display="block";
  document.getElementById("popupContent").innerHTML=`
  <div style="color:red;display:flex;justify-content:space-between;align-items:center;">
    <h3 style="color:blue;">Cetak Rekapan</h3>
    <span onclick="closePopup()" style="cursor:pointer;font-size:20px;">x</span>
  </div>

  Periode: ${t1 || "-"} s/d ${t2 || "-"}<br>
  Kurir: ${k}<br><br>

  KM: ${totalKM}<br>
  Parkir: ${totalParkir}<br>
  Pesanan: ${totalPesanan}<br>
  Pendapatan: ${totalPendapatan}<br><br>

  <button onclick="printData()">Konfirmasi</button>
`;
}

function closePopup(){
  document.getElementById("popup").style.display = "none";
}

function printData(){
  window.print();
}
