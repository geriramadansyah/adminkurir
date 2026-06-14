async function loadRute(){

  try{

    let res =
      await fetch(
        URL + "?action=getRute"
      );

    let data =
      await res.json();

    dataRute =
      data.map(d=>[
        d.nama || d.rute,
        Number(d.km) || 0
      ]);

  }catch(err){

    console.error(err);

  }
}