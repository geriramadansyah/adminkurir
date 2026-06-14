document.addEventListener(
  "DOMContentLoaded",
  async ()=>{

    setPage("pesanan");

    await loadRute();

    initAutocomplete();

    loadData();

    setInterval(()=>{
      loadData();
    },3000);

  }
);

function setPage(p, fromMenu=false){

  currentPage = p;

  document
    .querySelectorAll(".page")
    .forEach(el=>el.classList.remove("active"));

  if(p==="pesanan"){
    document
      .getElementById("pagePesanan")
      .classList.add("active");
  }

  if(p==="rekapUser"){
    document
      .getElementById("pageRekapUser")
      .classList.add("active");

    resetRekap();

    renderUserBox();
  }

  if(p==="insentif"){
    document
      .getElementById("pageInsentif")
      .classList.add("active");

    loadRekapSheet();
  }

  if(fromMenu){
    toggleSidebar();
  }
}