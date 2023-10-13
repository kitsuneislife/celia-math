function areaQuadrado () {
  var quadradoinputlado = document.getElementById("quadrado-input-lado");
  var labsanswer = document.getElementById("labs-answer");
  var l = parseFloat(quadradoinputlado.value);
  
  if(!l || isNaN(l)) return;
  var labssol = document.getElementById("labs-sol");
  labssol.style.display = "flex";
  
  var A = l * l;
  console.log(A);
  labsanswer.innerHTML = `\\(A = ${l}^2\\)<br>\\(A = ${A}\\)`;
  MathJax.typeset([labsanswer]);
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
  labsanswer.innerHTML = `\\(A = ${c} \\cdot ${l}\\)<br>\\(A = ${A}\\)`;
  MathJax.typeset([labsanswer]);
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
  labsanswer.innerHTML = `\\(A = \\frac{${b} \\cdot ${h}}{2}\\)<br>\\(A = \\frac{${b * h}}{2}\\)<br>\\(A = ${A}\\)`;
  MathJax.typeset([labsanswer]);
  return A;
}

function areaLosango () {
  var losangoinputmaior = document.getElementById("losango-input-maior");
  var losangoinputmenor = document.getElementById("losango-input-menor");
  var labsanswer = document.getElementById("labs-answer");
  var D = parseFloat(losangoinputmaior.value);
  var d = parseFloat(losangoinputmenor.value);

  if(!D || isNaN(D)) return;
  if(!d || isNaN(d)) return;
  var labssol = document.getElementById("labs-sol");
  labssol.style.display = "flex";

  var A = (D * d) / 2;
  console.log(A);
  labsanswer.innerHTML = `\\(A = \\frac{${D} \\cdot ${d}}{2}\\)<br>\\(A = \\frac{${D * d}}{2}\\)<br>\\(A = ${A}\\)`;
  MathJax.typeset([labsanswer]);
  return A;
}

function areaTrapezio() {
  var trapezioinputmaior = document.getElementById("trapezio-input-maior");
  var trapezioinputmenor = document.getElementById("trapezio-input-menor");
  var trapezioinputaltura = document.getElementById("trapezio-input-altura");
  var labsanswer = document.getElementById("labs-answer");

  var B = parseFloat(trapezioinputmaior.value);
  var b = parseFloat(trapezioinputmenor.value);
  var h = parseFloat(trapezioinputaltura.value);

  if (!B || isNaN(B)) return;
  if (!b || isNaN(b)) return;
  if (!h || isNaN(h)) return;

  var labssol = document.getElementById("labs-sol");
  labssol.style.display = "flex";

  var A = (B + b) / 2 * h;

  labsanswer.innerHTML = `\\(A = \\frac{${B} + ${b}}{2} \\cdot ${h}\\)<br>\\(A = \\frac{${B + b}}{2} \\cdot ${h}\\)<br>\\(A = ${A}\\)`;
  MathJax.typeset([labsanswer]);

  return A;
}

function areaPoligonoRegular() {
  var poligonoInputPerimetro = document.getElementById("poligono-input-perimetro");
  var poligonoInputApotema = document.getElementById("poligono-input-apotema");
  var labsAnswer = document.getElementById("labs-answer");

  var p = parseFloat(poligonoInputPerimetro.value);
  var a = parseFloat(poligonoInputApotema.value);

  if (!p || isNaN(p)) return;
  if (!a || isNaN(a)) return;

  var labssol = document.getElementById("labs-sol");
  labssol.style.display = "flex";

  var A = (p / 2) * a;

  labsAnswer.innerHTML = `\\(A = \\frac{${p}}{2} \\cdot ${a}\\)<br>\\(A = ${p / 2} \\cdot ${a}\\)<br>\\(A = ${A}\\)`;
  MathJax.typeset([labsAnswer]);

  return A;
}

function areaCirculo() {
  var circuloInputRaio = document.getElementById("circulo-input-raio");
  var labsAnswer = document.getElementById("labs-answer");

  var r = parseFloat(circuloInputRaio.value);

  if (!r || isNaN(r)) return;

  var labssol = document.getElementById("labs-sol");
  labssol.style.display = "flex";

  var A = Math.PI * Math.pow(r, 2);
  var P = 2 * Math.PI * r;

  A = Math.round(A * 100) / 100;
  P = Math.round(P * 100) / 100;

  labsAnswer.innerHTML = `\\(A = \\pi \\cdot ${r}^2\\)<br>\\(A = \\pi \\cdot ${r * r}\\)<br>\\(A \\approx ${A}\\)<br><br>\\(P = 2 \\cdot \\pi \\cdot ${r}\\)<br>\\(P = 2 \\cdot \\pi \\cdot ${r}\\)<br>\\(P \\approx ${P}\\)`;
  MathJax.typeset([labsAnswer]);

  return { area: A, perimetro: P };
}