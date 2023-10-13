function areaQuadrado () {
  var quadradoinputlado = document.getElementById("quadrado-input-lado");
  var labsanswer = document.getElementById("labs-answer");
  var l = parseFloat(quadradoinputlado.value);
  
  if(!l || isNaN(l)) return;
  var labssol = document.getElementById("labs-sol");
  labssol.style.display = "flex";
  
  var A = l * l;
  console.log(A);
  labsanswer.innerHTML = `A = ${l}²<br>A = ${A}`;
  return A;
}

function areaRetangulo () {
  var retanguloinputcomprimento = document.getElementById("retangulo-input-comprimento");
  var retanguloinputlargura = document.getElementById("retangulo-input-largura");
  var labsanswer = document.getElementById("labs-answer");
  var c = parseFloat(retanguloinputcomprimento.value);
  var l = parseFloat(retanguloinputlargura.value);

  if(!c || isNaN(c)) return;
  if(!l || isNaN(l)) return;
  var labssol = document.getElementById("labs-sol");
  labssol.style.display = "flex";

  var A = c * l;
  console.log(A);
  labsanswer.innerHTML = `A = ${c} x ${l}<br>A = ${A}`;
  return A;
}

function areaTriangulo () {
  var trianguloinputbase = document.getElementById("triangulo-input-base");
  var trianguloinputaltura = document.getElementById("triangulo-input-altura");
  var labsanswer = document.getElementById("labs-answer");
  var b = parseFloat(trianguloinputbase.value);
  var h = parseFloat(trianguloinputaltura.value);

  if(!b || isNaN(b)) return;
  if(!h || isNaN(h)) return;
  var labssol = document.getElementById("labs-sol");
  labssol.style.display = "flex";

  var A = (b * h) / 2;
  console.log(A);
  labsanswer.innerHTML = `<row>A = <div class='col'><span class='frac-top'>${b} x ${h}</span><span>2</span></div></row><row>A = <div class='col'><span class='frac-top'>${b * h}</span><span>2</span></div></row><row>A = ${A}</row>`;
  return A;
}