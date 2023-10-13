const labscontainer = document.getElementById("labs-container");
const labslabel = document.getElementById("labs-label");
const labsformula = document.getElementById("labs-formula");
const labsdesc = document.getElementById("labs-desc");
const labsform = document.getElementById("labs-form");
const labssol = document.getElementById("labs-sol");

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
  labsformula.innerHTML = "A = l²";
  
  labsdesc.innerHTML = "<row class='labs-desc-row'><span class='labs-desc-icon'>A</span></span> : Área</span></row><row class='labs-desc-row'><span class='labs-desc-icon'>l</span></span> : Lado</span></row>";
  labsform.innerHTML = "<row><span class='labs-form-label'>Lado</span><input class='labs-form-input' id='quadrado-input-lado' type='number' oninput='validarNumero(this)'></row><button class='labs-form-submit' onclick='areaQuadrado()'>Calcular</button>"
}

function openRetangulo() {
  labscontainer.style.display = "flex";
  labssol.style.display = "none";

  labslabel.innerHTML = "Retângulo";
  labsformula.innerHTML = "A = C x l";
  labsdesc.innerHTML = "<row class='labs-desc-row'><span class='labs-desc-icon'>A</span></span> : Área</span></row><row class='labs-desc-row'><span class='labs-desc-icon'>C</span></span> : Comprimento</span></row><row><span class='labs-desc-icon'>l</span></span> : Largura</span></row>";
  labsform.innerHTML = "<row><span class='labs-form-label'>Comrprimento</span><input class='labs-form-input' id='retangulo-input-comprimento' type='number' oninput='validarNumero(this)'></row><row><span class='labs-form-label'>Largura</span><input class='labs-form-input' id='retangulo-input-largura' type='number' oninput='validarNumero(this)'></row><button class='labs-form-submit' onclick='areaRetangulo()'>Calcular</button>"

}

function openTriangulo() {
  labscontainer.style.display = "flex";
  labssol.style.display = "none";

  labslabel.innerHTML = "Triângulo";
  labsformula.innerHTML = "A = <div class='col'><span class='frac-top'>b x h</span><span>2</span></div>";
  labsdesc.innerHTML = "<row class='labs-desc-row'><span class='labs-desc-icon'>A</span></span> : Área</span></row><row class='labs-desc-row'><span class='labs-desc-icon'>b</span></span> : Base</span></row><row><span class='labs-desc-icon'>h</span></span> : Altura</span></row>";
  labsform.innerHTML = "<row><span class='labs-form-label'>Comrprimento</span><input class='labs-form-input' id='triangulo-input-base' type='number' oninput='validarNumero(this)'></row><row><span class='labs-form-label'>Largura</span><input class='labs-form-input' id='triangulo-input-altura' type='number' oninput='validarNumero(this)'></row><button class='labs-form-submit' onclick='areaTriangulo()'>Calcular</button>"
}