function generateElectricalDiagram() {
  const idea = document.getElementById("idea").value;
  const components = idea.split(" ");

  const diagram = document.createElement("svg");
  diagram.setAttribute("width", "400");
  diagram.setAttribute("height", "200");

  for (const component of components) {
    const symbol = document.createElement("rect");
    symbol.setAttribute("x", 0);
    symbol.setAttribute("y", 0);
    symbol.setAttribute("width", 50);
    symbol.setAttribute("height", 50);
    symbol.setAttribute("fill", component);

    diagram.appendChild(symbol);
  }

  const dataURL = diagram.toDataURL();

  // Download the diagram in PNG format
  document.getElementById("download").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "diagram.png";
    link.click();
  });

  // Download the diagram in PDF format
  const pdf = new PDF();
  pdf.addPage(diagram);
  const data = pdf.output('dataurl');

  document.getElementById("download").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = data;
    link.download = "diagram.pdf";
    link.click();
  });
}

document.getElementById("idea").addEventListener("keyup", generateElectricalDiagram);
