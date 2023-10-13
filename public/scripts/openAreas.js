const labscontainer = document.getElementById("labs-container");
const labslabel = document.getElementById("labs-label");
const labsformula = document.getElementById("labs-formula");
const labsdesc = document.getElementById("labs-desc");
const labsform = document.getElementById("labs-form");
const labssol = document.getElementById("labs-sol");

const labsclose = document.getElementById("labs-close");
labsclose.addEventListener("click", () => {
  labscontainer.style.display = "none";
});

function validarNumero(input) {
    const valor = input.value;
    const numero = parseFloat(valor);

    if (isNaN(numero)) {
      input.value = ""
    }
}
  
function openQuadrado() {
  labscontainer.style.display = "flex";
  labssol.style.display = "none";
  
  labslabel.innerHTML = "Quadrado";
  //labsformula.innerHTML = "A = l²";
  labsformula.innerHTML = "\\(A = l^2\\)";
  MathJax.typeset([labsformula]);
  
  labsdesc.innerHTML = "<row class='labs-desc-row'><span class='labs-desc-icon'>\\(A\\)</span></span> : Área</span></row><row class='labs-desc-row'><span class='labs-desc-icon'>\\(l\\)</span></span> : Lado</span></row>";
  MathJax.typeset([labsdesc]);
  
  labsform.innerHTML = "<row><span class='labs-form-label'>Lado</span><input class='labs-form-input' id='quadrado-input-lado' type='number' oninput='validarNumero(this)'></row><button class='labs-form-submit' onclick='areaQuadrado()'>Calcular</button>"
}

function openRetangulo() {
  labscontainer.style.display = "flex";
  labssol.style.display = "none";

  labslabel.innerHTML = "Retângulo";
  labsformula.innerHTML = "\\(A = c \\cdot l\\)";
  MathJax.typeset([labsformula]);

  labsdesc.innerHTML = "<row class='labs-desc-row'><span class='labs-desc-icon'>\\(A\\)</span></span> : Área</span></row><row class='labs-desc-row'><span class='labs-desc-icon'>\\(c\\)</span></span> : Comprimento</span></row><row><span class='labs-desc-icon'>\\(l\\)</span></span> : Largura</span></row>";
  MathJax.typeset([labsdesc]);

  labsform.innerHTML = "<row><span class='labs-form-label'>Comrprimento</span><input class='labs-form-input' id='retangulo-input-comprimento' type='number' oninput='validarNumero(this)'></row><row><span class='labs-form-label'>Largura</span><input class='labs-form-input' id='retangulo-input-largura' type='number' oninput='validarNumero(this)'></row><button class='labs-form-submit' onclick='areaRetangulo()'>Calcular</button>"

}

function openTriangulo() {
  labscontainer.style.display = "flex";
  labssol.style.display = "none";

  labslabel.innerHTML = "Triângulo";
  labsformula.innerHTML = "\\(A = \\frac{b \\cdot h}{2}\\)";
  MathJax.typeset([labsformula]);

  labsdesc.innerHTML = "<row class='labs-desc-row'><span class='labs-desc-icon'>\\(A\\)</span></span> : Área</span></row><row class='labs-desc-row'><span class='labs-desc-icon'>\\(b\\)</span></span> : Base</span></row><row><span class='labs-desc-icon'>\\(h\\)</span></span> : Altura</span></row>";
  MathJax.typeset([labsdesc]);

  labsform.innerHTML = "<row><span class='labs-form-label'>Base</span><input class='labs-form-input' id='triangulo-input-base' type='number' oninput='validarNumero(this)'></row><row><span class='labs-form-label'>Altura</span><input class='labs-form-input' id='triangulo-input-altura' type='number' oninput='validarNumero(this)'></row><button class='labs-form-submit' onclick='areaTriangulo()'>Calcular</button>"
}

function openLosango() {
  labscontainer.style.display = "flex";
  labssol.style.display = "none";

  labslabel.innerHTML = "Losango";
  labsformula.innerHTML = "\\(A = \\frac{D \\cdot d}{2}\\)";
  MathJax.typeset([labsformula]);

  labsdesc.innerHTML = "<row class='labs-desc-row'><span class='labs-desc-icon'>\\(A\\)</span></span> : Área</span></row><row class='labs-desc-row'><span class='labs-desc-icon'>\\(D\\)</span></span> : Diagonal maior</span></row><row><span class='labs-desc-icon'>\\(d\\)</span></span> : Diagonal menor</span></row>";
  MathJax.typeset([labsdesc]);

  labsform.innerHTML = "<row><span class='labs-form-label'>Diagonal maior</span><input class='labs-form-input' id='losango-input-maior' type='number' oninput='validarNumero(this)'></row><row><span class='labs-form-label'>Diagonal menor</span><input class='labs-form-input' id='losango-input-menor' type='number' oninput='validarNumero(this)'></row><button class='labs-form-submit' onclick='areaLosango()'>Calcular</button>"
}

function openTrapezio() {
  labscontainer.style.display = "flex";
  labssol.style.display = "none";

  labslabel.innerHTML = "Trapézio";
  labsformula.innerHTML = "\\(A = \\frac{B + b}{2} \\cdot h\\)";
  MathJax.typeset([labsformula]);

  labsdesc.innerHTML = "<row class='labs-desc-row'><span class='labs-desc-icon'>\\(A\\)</span></span> : Área</span></row><row class='labs-desc-row'><span class='labs-desc-icon'>\\(B\\)</span></span> : Base maior</span></row><row><span class='labs-desc-icon'>\\(b\\)</span></span> : Base menor</span></row><row><span class='labs-desc-icon'>\\(h\\)</span></span> : Altura</span></row>";
  MathJax.typeset([labsdesc]);

  labsform.innerHTML = "<row><span class='labs-form-label'>Base maior</span><input class='labs-form-input' id='trapezio-input-maior' type='number' oninput='validarNumero(this)'></row><row><span class='labs-form-label'>Base menor</span><input class='labs-form-input' id='trapezio-input-menor' type='number' oninput='validarNumero(this)'></row><row><span class='labs-form-label'>Altura</span><input class='labs-form-input' id='trapezio-input-altura' type='number' oninput='validarNumero(this)'></row><button class='labs-form-submit' onclick='areaTrapezio()'>Calcular</button>"
}

function openPoligonoRegular() {
  labscontainer.style.display = "flex";
  labssol.style.display = "none";

  labslabel.innerHTML = "Polígono Regular";
  labsformula.innerHTML = "\\(A = \\frac{p}{2} \\cdot a\\)";
  MathJax.typeset([labsformula]);

  labsdesc.innerHTML = "<row class='labs-desc-row'><span class='labs-desc-icon'>\\(A\\)</span> : Área</row><row class='labs-desc-row'><span class='labs-desc-icon'>\\(p\\)</span> : Perímetro</row><row><span class='labs-desc-icon'>\\(a\\)</span> : Apótema</row>";
  MathJax.typeset([labsdesc]);

  labsform.innerHTML = "<row><span class='labs-form-label'>Perímetro</span><input class='labs-form-input' id='poligono-input-perimetro' type='number' oninput='validarNumero(this)'></row><row><span class='labs-form-label'>Apótema</span><input class='labs-form-input' id='poligono-input-apotema' type='number' oninput='validarNumero(this)'></row><button class='labs-form-submit' onclick='areaPoligonoRegular()'>Calcular</button>";
}

function openCirculo() {
  labscontainer.style.display = "flex";
  labssol.style.display = "none";

  labslabel.innerHTML = "Círculo";
  labsformula.innerHTML = "\\(A = \\pi r^2\\)<br>\\(P = 2 \\pi r\\)";
  MathJax.typeset([labsformula]);

  labsdesc.innerHTML = "<row class='labs-desc-row'><span class='labs-desc-icon'>\\(A\\)</span> : Área</row><row class='labs-desc-row'><span class='labs-desc-icon'>\\(P\\)</span> : Perímetro</row><row><span class='labs-desc-icon'>\\(r\\)</span> : Raio</row>";
  MathJax.typeset([labsdesc]);

  labsform.innerHTML = "<row><span class='labs-form-label'>Raio</span><input class='labs-form-input' id='circulo-input-raio' type='number' oninput='validarNumero(this)'></row><button class='labs-form-submit' onclick='areaCirculo()'>Calcular</button>";
}
