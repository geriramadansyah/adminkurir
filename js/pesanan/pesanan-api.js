function loadData(){

  fetch(URL)
  .then(res=>res.json())
  .then(data=>{

    const newJSON =
      JSON.stringify(data);

    if(newJSON === lastDataJSON){
      return;
    }

    lastDataJSON = newJSON;

    dataGlobal = data;

    if(currentPage === "pesanan"){
      renderPesanan();
    }

    if(currentPage === "rekapUser"){
      renderUserBox();
    }

  });
}