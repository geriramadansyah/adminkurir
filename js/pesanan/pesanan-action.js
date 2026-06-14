function kirim(){

  let ruteVal = document.getElementById("rute").value.trim();
  let kmVal = document.getElementById("km").value;

  if(!ruteVal){
    alert("Pilih rute");
    return;
  }

  if(!selectedRute){
    alert("Pilih rute dari daftar");
    return;
  }

  const btn = document.getElementById("btnKirim");

  btn.disabled = true;
  btn.classList.add("loadingBtn");
  btn.innerHTML = "Memproses...";

  fetch(URL,{
    method:"POST",
    body:JSON.stringify({
      action:"tambah",
      rute:ruteVal,
      km:kmVal,
      jenis:document.getElementById("jenis").value,
      keterangan:document.getElementById("ket").value,
      pemesan:"ADMIN"
    })
  })
  .then(()=>{

    document.getElementById("rute").value = "";
    document.getElementById("km").value = "";
    document.getElementById("ket").value = "";

    selectedRute = null;

    loadData();

  })
  .finally(()=>{

    btn.disabled = false;
    btn.classList.remove("loadingBtn");
    btn.innerHTML = "Buat Perjalanan";

  });
}
function hapusPesanan(id){

  const btn = document.getElementById("hapusBtn" + id);

  if(!btn) return;

  btn.disabled = true;
  btn.classList.add("loadingBtn");
  btn.innerHTML = "Menghapus...";

  fetch(URL,{
    method:"POST",
    body:JSON.stringify({
      action:"hapus",
      id:id
    })
  })
  .then(res=>res.json())
  .then(()=>{

    const interval = setInterval(()=>{

      const masihAda = dataGlobal.some(
        d => String(d.id) === String(id)
      );

      if(!masihAda){

        clearInterval(interval);
        loadData();

      }else{

        loadData();

      }

    },500);

  })
  .catch(()=>{

    btn.disabled = false;
    btn.classList.remove("loadingBtn");
    btn.innerHTML = "Hapus Pesanan";

  });
}

function konfirmasiSelesai(id){

  fetch(URL,{
    method:"POST",
    body:JSON.stringify({
      action:"konfirmasiSelesai",
      id:id
    })
  })
  .then(res=>res.json())
  .then(res=>{

    if(res.status === "ok"){
      loadData();
    }else{
      alert("Gagal mengkonfirmasi pesanan");
    }

  })
  .catch(()=>{
    alert("Terjadi kesalahan");
  });

}

function toggleDetail(index){

  let detail = document.getElementById("detail" + index);

  document.querySelectorAll(".pesananDetail").forEach(el=>{
    el.classList.remove("show");
  });

  if(openedDetail === index){
    openedDetail = null;
    return;
  }

  detail.classList.add("show");
  openedDetail = index;
}
