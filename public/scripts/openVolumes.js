function openVolumeCubo() {
  labscontainer.style.display = "flex";
  labssol.style.display = "none";

  labslabel.innerHTML = "Cubo";
  //labsformula.innerHTML = "A = l²";
  labsformula.innerHTML = "\\(V = l^3\\)";
  MathJax.typeset([labsformula]);

  labsdesc.innerHTML = "<row class='labs-desc-row'><span class='labs-desc-icon'>\\(V\\)</span></span> : Volume</span></row><row class='labs-desc-row'><span class='labs-desc-icon'>\\(l\\)</span></span> : Lado</span></row>";
  MathJax.typeset([labsdesc]);

  labsform.innerHTML = "<row><span class='labs-form-label'>Lado</span><input class='labs-form-input' id='volumecubo-input-lado' type='number' oninput='validarNumero(this)'></row><button class='labs-form-submit' onclick='volumeCubo()'>Calcular</button>"
}

function openVolumeParalelepipedo() {
  labscontainer.style.display = "flex";
  labssol.style.display = "none";

  labslabel.innerHTML = "Paralelepípedo";
  //labsformula.innerHTML = "A = l²";
  labsformula.innerHTML = "\\(V = c \\cdot l \\cdot h\\)";
  MathJax.typeset([labsformula]);

  labsdesc.innerHTML = "<row class='labs-desc-row'><span class='labs-desc-icon'>\\(V\\)</span></span> : Volume</span></row><row class='labs-desc-row'><span class='labs-desc-icon'>\\(c\\)</span></span> : Comprimento</span></row><row class='labs-desc-row'><span class='labs-desc-icon'>\\(l\\)</span></span> : Largura</span></row><row class='labs-desc-row'><span class='labs-desc-icon'>\\(h\\)</span></span> : Altura</span></row>";
  MathJax.typeset([labsdesc]);

  labsform.innerHTML = "<row><span class='labs-form-label'>Comprimento</span><input class='labs-form-input' id='volumeparalelepipedo-input-comprimento' type='number' oninput='validarNumero(this)'></row><row><span class='labs-form-label'>Largura</span><input class='labs-form-input' id='volumeparalelepipedo-input-largura' type='number' oninput='validarNumero(this)'></row><row><span class='labs-form-label'>Altura</span><input class='labs-form-input' id='volumeparalelepipedo-input-altura' type='number' oninput='validarNumero(this)'></row><button class='labs-form-submit' onclick='volumeParalelepipedo()'>Calcular</button>"
}

function openVolumePrismaregular() {
  labscontainer.style.display = "flex";
  labssol.style.display = "none";

  labslabel.innerHTML = "Prisma Regular";
  //labsformula.innerHTML = "A = l²";
  labsformula.innerHTML = "\\(V = A\\scriptsize{b} \\cdot h\\)";
  MathJax.typeset([labsformula]);

  labsdesc.innerHTML = "<row class='labs-desc-row'><span class='labs-desc-icon'>\\(V\\)</span></span> : Volume</span></row><row class='labs-desc-row'><span class='labs-desc-icon'>\\(A\\scriptsize{b}\\)</span></span> : Área da base</span></row><row class='labs-desc-row'><span class='labs-desc-icon'>\\(h\\)</span></span> : Altura</span></row>";
  MathJax.typeset([labsdesc]);

  labsform.innerHTML = "<row><span class='labs-form-label'>Área da base</span><input class='labs-form-input' id='volumeprismaregular-input-areadabase' type='number' oninput='validarNumero(this)'></row><row><span class='labs-form-label'>Altura</span><input class='labs-form-input' id='volumeprismaregular-input-altura' type='number' oninput='validarNumero(this)'></row><button class='labs-form-submit' onclick='volumePrismaregular()'>Calcular</button>"
}