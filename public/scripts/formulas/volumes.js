function volumeCubo () {
  var volumecuboinputlado = document.getElementById("volumecubo-input-lado");
  var labsanswer = document.getElementById("labs-answer");
  var l = parseFloat(volumecuboinputlado.value);

  if(!l || isNaN(l)) return;
  var labssol = document.getElementById("labs-sol");
  labssol.style.display = "flex";

  var V = l * l * l;
  console.log(V);
  labsanswer.innerHTML = `\\(V = ${l}^3\\)<br>\\(V = ${l} \\cdot ${l} \\cdot ${l}\\)<br>\\(V = ${V}\\)`;
  MathJax.typeset([labsanswer]);
  return V;
}

function volumeParalelepipedo () {
  var volumeparalelepipedoinputcomprimento = document.getElementById("volumeparalelepipedo-input-comprimento");
  var volumeparalelepipedoinputlargura = document.getElementById("volumeparalelepipedo-input-largura");
  var volumeparalelepipedoinputaltura = document.getElementById("volumeparalelepipedo-input-altura");
  var labsanswer = document.getElementById("labs-answer");
  var l = parseFloat(volumeparalelepipedoinputcomprimento.value);
  var c = parseFloat(volumeparalelepipedoinputlargura.value);
  var h = parseFloat(volumeparalelepipedoinputaltura.value);

  if(!l || isNaN(l)) return;
  if(!c || isNaN(c)) return;
  if(!h || isNaN(h)) return;
  var labssol = document.getElementById("labs-sol");
  labssol.style.display = "flex";

  var V = l * c * h;
  console.log(V);
  labsanswer.innerHTML = `\\(V = ${l} \\cdot ${c} \\cdot ${h}\\)<br>\\(V = ${V}\\)`;
  MathJax.typeset([labsanswer]);
  return V;
}

function volumePrismaregular () {
  var volumeprismaregularinputareadabase = document.getElementById("volumeprismaregular-input-areadabase");
  var volumeprismaregularinputaltura = document.getElementById("volumeprismaregular-input-altura");
  var labsanswer = document.getElementById("labs-answer");
  var Ab = parseFloat(volumeprismaregularinputareadabase.value);
  var h = parseFloat(volumeprismaregularinputaltura.value);

  if(!Ab || isNaN(Ab)) return;
  if(!h || isNaN(h)) return;
  var labssol = document.getElementById("labs-sol");
  labssol.style.display = "flex";

  var V = Ab * h;
  console.log(V);
  labsanswer.innerHTML = `\\(V = ${Ab} \\cdot ${h} \\)<br>\\(V = ${V}\\)`;
  MathJax.typeset([labsanswer]);
  return V;
}