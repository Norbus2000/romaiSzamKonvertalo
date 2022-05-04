window.addEventListener("load", init);

function init() {
    generalo(ArabSzam);
}

let ArabSzam = 4999;

function generalo (szam) {
   let txt = "";
   const romaiSzamok = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};
    
    if(szam < 1 || szam > 3999){
        console.log("Nem lesz jó!");
    }else{
        for (kulcs in romaiSzamok) {
          kerekitett = Math.floor(szam / romaiSzamok[kulcs]);
          if(kerekitett >= 0){
              for(let i = 0; i < kerekitett; i++){
                txt += kulcs;
              }
            }
          szam = szam % romaiSzamok[kulcs];
      }
    }
  console.log(txt);
  //document.getElementById("romai").innerHTML+=txt;
  return txt;
  }

