function initKurir(){
  let select = document.getElementById("kurirSelect");
  let kurirSet = new Set();

  dataRekap.forEach(d=>kurirSet.add(d.kurir));

  select.innerHTML = "<option value=''>-- pilih kurir --</option>";

  kurirSet.forEach(k=>{
    let opt=document.createElement("option");
    opt.value=k;
    opt.textContent=k;
    select.appendChild(opt);
  });

  select.onchange = renderTable;
  document.getElementById("tglAwal").onchange = renderTable;
  document.getElementById("tglAkhir").onchange = renderTable;
}

function loadRekapSheet(){
  fetch(URL, {
    method:"POST",
    body: JSON.stringify({action:"getRekap"})
  })
  .then(res=>res.json())
  .then(data=>{
    dataRekap = data;
    initKurir();

    document.getElementById("tableInsentif").innerHTML =
      "<tr><td colspan='5'>Pilih kurir dan tanggal</td></tr>";
  });
}
