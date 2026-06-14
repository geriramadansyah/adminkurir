function initAutocomplete(){

  const input = document.getElementById("rute");
  const box = document.getElementById("suggestions");

  function renderSuggestions(val){

    box.innerHTML = "";

    if(!val) return;

    let filtered = dataRute.filter(d=>
      d[0].toLowerCase().includes(val)
    );

filtered.forEach(d=>{

  let div = document.createElement("div");

  div.textContent = d[0];

  div.onclick = function(){

    input.value = d[0];

    document.getElementById("km").value = d[1];

    selectedRute = d[0];

    box.innerHTML = "";

  };

  box.appendChild(div);

});


if(filtered.length === 0){

  let div = document.createElement("div");

  div.innerHTML =
    "<b>Rute tidak tersedia, tambahkan?</b>";

  div.onclick = function(){

    openRutePopup(input.value);

  };

  box.appendChild(div);

};
  }

  input.addEventListener("input", function(){

    selectedRute = null;

    document.getElementById("km").value = "";

    renderSuggestions(
      this.value.toLowerCase()
    );

  });

  document.addEventListener("click", ()=>{
    box.innerHTML = "";
  });

}

function openRutePopup(nama=""){

  document.getElementById("newRute").value =
    nama || "";

  document.getElementById("newKm").value = "";

  document.getElementById("popupRute")
    .classList.add("show");

}

function closeRutePopup(){

  document.getElementById("popupRute")
    .classList.remove("show");

}

function simpanRute(){

  let rute =
    document.getElementById("newRute")
    .value.trim();

  let km =
    document.getElementById("newKm")
    .value.trim();

  if(!rute){
    alert("Nama rute wajib diisi");
    return;
  }

  if(!km){
    alert("Jarak wajib diisi");
    return;
  }

  fetch(URL,{
    method:"POST",
    body:JSON.stringify({

      action:"tambahRute",
      rute:rute,
      km:km

    })
  })
  .then(res=>res.json())
  .then(async ()=>{

    await loadRute();

    document.getElementById("rute").value =
      rute;

    document.getElementById("km").value =
      km;

    selectedRute = rute;

    document.getElementById("suggestions")
      .innerHTML = "";

    closeRutePopup();

  });

}
