function renderRekap(){

  let tanggalFilter = document.getElementById("filterRekapTanggal")?.value;

  let html = "";
  let totalKM = 0;
  let rekapIndex = 0;
  dataGlobal.forEach(d=>{

    if(selectedRole === "kurir"){
      if(d.kurir !== selectedUser) return;
    }else{
      if(d.purchasing !== selectedUser) return;
    }

    if(tanggalFilter){
      let tgl = formatDate(d.timestamp);
      if(tgl !== tanggalFilter) return;
    }

    totalKM += Number(d.km || 0);

	if(rekapViewMode === "detail"){

	  html += `
	  <div class="card">

		<div class="timeTop">
		  ${formatJamShort(d.timestamp)}
		</div>

		<b>${d.jenis}</b><br>
		${d.rute} (${d.km} KM)

		<div class="detailTable">


		  <div class="detailItem">
			<div class="label">Keterangan Pesanan</div>
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

	  </div>`;
	}
	else{
		html += `

		<div class="rekapSimpleWrapper">

		  <div
			class="rekapSimpleRow"
			onclick="toggleRekapDetail(${rekapIndex})">

			<span class="colJenis">
			  ${d.jenis}
			</span>

			<span class="colRute">
			  ${d.rute}
			</span>

			<span class="colKM">
			  ${d.km} KM
			</span>

			<span class="colTanggal">
			  ${formatJamShort(d.timestamp)}
			</span>

		  </div>

			<div
			  id="rekapDetail${rekapIndex}"
			  class="rekapSimpleDetail">

			  <div class="detailRow">
				<span class="detailLabel">Keterangan Pesanan</span>
				<span class="detailValue">${d.ket_pesanan || "-"}</span>
			  </div>

			  <div class="detailRow">
				<span class="detailLabel">Diambil</span>
				<span class="detailValue">${formatWaktu(d.waktu_ambil)}</span>
			  </div>

			  <div class="detailRow">
				<span class="detailLabel">Selesai</span>
				<span class="detailValue">${formatWaktu(d.waktu_selesai)}</span>
			  </div>

			  <div class="detailRow">
				<span class="detailLabel">Parkir</span>
				<span class="detailValue">${d.parkir || 0}</span>
			  </div>

			  <div class="detailRow">
				<span class="detailLabel">Keterangan Kurir</span>
				<span class="detailValue">${d.ket_kurir || "-"}</span>
			  </div>

			</div>

		</div>
		`;

		rekapIndex++;
	}

  });

  let headerHTML = `
    <div class="rekapHeader">

      <div class="headerLeft">
        ${selectedUser} : ${selectedRole}
      </div>

		<div class="headerCenter">

		  <input type="date"
			id="filterRekapTanggal"
			value="${tanggalFilter || ""}"
			onchange="renderRekap()">

		  <label style="margin-left:10px;">
			Tampilan :
		  </label>

		  <select
			id="rekapMode"
			onchange="changeRekapMode()">

			<option value="detail"
			  ${rekapViewMode==="detail" ? "selected" : ""}>
			  Detail
			</option>

			<option value="sederhana"
			  ${rekapViewMode==="sederhana" ? "selected" : ""}>
			  Ringkas
			</option>

		  </select>

		</div>

      <div class="headerRight">
        <div class="totalKM">Total KM: ${totalKM}</div>
        <div class="backIcon" onclick="resetRekap()">↪</div>
      </div>

    </div>
  `;

  document.getElementById("listRekap").innerHTML =
    headerHTML + (html || "Tidak ada data");
}
