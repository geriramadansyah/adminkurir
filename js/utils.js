function formatDate(date){

  let d = new Date(date);

  if(isNaN(d.getTime())){
    return "";
  }

  return d.getFullYear() + "-" +
    String(d.getMonth()+1).padStart(2,"0") + "-" +
    String(d.getDate()).padStart(2,"0");
}

function formatWaktu(date){

  if(!date || date === "-"){
    return "-";
  }

  let d = new Date(date);

  if(isNaN(d.getTime())){
    return "-";
  }

  return d.toLocaleString("id-ID",{
    timeZone:"Asia/Jakarta",
    day:"2-digit",
    month:"2-digit",
    year:"numeric",
    hour:"2-digit",
    minute:"2-digit"
  });
}

function formatJamShort(date){

  if(!date){
    return "-";
  }

  let d = new Date(date);

  if(isNaN(d)){
    return "-";
  }

  let jam = d.toLocaleTimeString("id-ID",{
    hour:"2-digit",
    minute:"2-digit"
  });

  let tgl = d.toLocaleDateString("id-ID",{
    day:"2-digit",
    month:"short"
  });

  return jam + " " + tgl;
}