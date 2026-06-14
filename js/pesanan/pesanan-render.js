function renderPesanan(){

	let tanggalInput = document.getElementById("filterTanggal");

	if(!tanggalInput.value){
	  tanggalInput.value = formatDate(new Date());
	}

	let tanggal = tanggalInput.value;
  let html = "";

dataGlobal.forEach((d,index)=>{

  let tglPesanan = formatDate(d.timestamp);
  let hariIni = formatDate(new Date());

  let status = (d.status || "").toUpperCase();

	if(tglPesanan !== tanggal){
	  return;
	}
  let statusClass = "";

	if(status === "TERSEDIA"){
	  statusClass = "statusTersedia";
	}
	else if(status === "DALAM_PERJALANAN"){
	  statusClass = "statusPerjalanan";
	}
	else if(status === "TELAH_TIBA"){
	  statusClass = "statusTiba";
	}
	else if(status === "SELESAI"){
	  statusClass = "statusSelesai";
	}
    html += `
    <div class="card pesananCard">

      <div class="pesananHeader"
           onclick="toggleDetail(${index})">

		<div>
		  <b>${d.jenis}</b><br>

		  ${d.rute} (${d.km} KM)<br>

		  <span class="statusBadge ${statusClass}">
			${d.status}
		  </span>
		</div>
        <div class="timeTop">
          ${formatJamShort(d.timestamp)}
        </div>

      </div>

	  <div id="detail${index}"
      class="pesananDetail"
      onclick="event.stopPropagation()">	
        <hr>


		<div class="detailTable">

		  <div class="detailItem">
			<div class="label">Kurir</div>
			<div class="separator">:</div>
			<div class="value">${d.kurir || "-"}</div>
		  </div>

		  <div class="detailItem">
			<div class="label">Keterangan</div>
			<div class="separator">:</div>
			<div class="value">${d.ket_pesanan || "-"}</div>
		  </div>

		  <div class="detailItem">
			<div class="label">Diambil</div>
			<div class="separator">:</div>
			<div class="value">${formatWaktu(d.waktu_ambil)}</div>
		  </div>

		  <div class="detailItem">
			<div class="label">Selesai</div>
			<div class="separator">:</div>
			<div class="value">${formatWaktu(d.waktu_selesai)}</div>
		  </div>

		  <div class="detailItem">
			<div class="label">Keterangan Kurir</div>
			<div class="separator">:</div>
			<div class="value">${d.ket_kurir || "-"}</div>
		  </div>

		  <div class="detailItem">
			<div class="label">Parkir</div>
			<div class="separator">:</div>
			<div class="value">${d.parkir || 0}</div>
		  </div>

		</div>

		${status === "TELAH_TIBA" ? `
		<button
		  class="konfirmasiBtn"
		  onclick="konfirmasiSelesai('${d.id}')">
		  Konfirmasi Selesai
		</button>
		` : ""}
	  
		${status === "TERSEDIA" ? `
		<button
		  id="hapusBtn${d.id}"
		  class="hapusBtn"
		  onclick="hapusPesanan('${d.id}')">

		  Hapus Pesanan
		</button>
		` : ""}
      </div>
    </div>
    `;
  });

document.getElementById("listPesanan").innerHTML =
  html || "Tidak ada data";

	if(openedDetail !== null){

	  let detail =
		document.getElementById("detail" + openedDetail);

	  if(detail){
		detail.classList.add("show");
	  }else{
		openedDetail = null;
	  }

}}
