function renderUserBox(){

  let users = {};

  dataGlobal.forEach(d=>{
    if(d.kurir && d.kurir !== "-"){
      users[d.kurir] = "kurir";
    }
    if(d.purchasing && !users[d.purchasing]){
      users[d.purchasing] = "pemesan";
    }
  });

  let html = "";

  for(let nama in users){
    html += `
    <div class="userBox" onclick="selectUser('${nama}','${users[nama]}')">
      <div class="userName">${nama}</div>
      <div class="userRole">${users[nama]}</div>
    </div>`;
  }

  document.getElementById("userBoxContainer").innerHTML = html;
}

function selectUser(nama, role){
  selectedUser = nama;
  selectedRole = role;

  document.getElementById("userBoxContainer").style.display = "none";

  renderRekap();
}

function resetRekap(){
  selectedUser = null;
  selectedRole = null;

  document.getElementById("userBoxContainer").style.display = "block";
  document.getElementById("listRekap").innerHTML = "";
}

function changeRekapMode(){

  rekapViewMode =
    document.getElementById("rekapMode").value;

  renderRekap();

}

function toggleRekapDetail(index){

  document
    .querySelectorAll(".rekapSimpleDetail")
    .forEach(el=>el.classList.remove("show"));

  if(openedRekapDetail === index){

    openedRekapDetail = null;
    return;

  }

  let detail =
    document.getElementById(
      "rekapDetail" + index
    );

  if(detail){
    detail.classList.add("show");
  }

  openedRekapDetail = index;

}

document.addEventListener("click", function(e){

  if(!e.target.closest(".rekapSimpleWrapper")){

    document
      .querySelectorAll(".rekapSimpleDetail")
      .forEach(el=>el.classList.remove("show"));

    openedRekapDetail = null;

  }

});