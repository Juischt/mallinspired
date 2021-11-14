var app = new Vue({
  el: "#test",
  data: {
    text: "",
    selectedColor: 'dunkelgrün',
    optionsColor: [
      { colorname: "gelb" },
      { colorname: "orange" },
      { colorname: "rot" },
      { colorname: "bordeaux" },
      { colorname: "rosa" },
      { colorname: "pink" },
      { colorname: "lila" },
      { colorname: "marine" },
      { colorname: "königsblau" },
      { colorname: "hellblau" },
      { colorname: "babyblau" },
      { colorname: "dunkelgrün" },
      { colorname: "braun" },
      { colorname: "ocker" },
      { colorname: "beige" },
      { colorname: "grau" }
    ],
    selectedFont: 'Schrift 1',
    optionsFont: [
      { fontname: "Schrift 1" },
      { fontname: "Schrift 2" },
      { fontname: "Schrift 3" },
      { fontname: "Schrift 4" },
      { fontname: "Schrift 5" },
      { fontname: "Schrift 6" },
      { fontname: "Schrift 7" }
    ]
  }
});

function submitChanges() {
  changeBackgroundColor();
  changeFontFamily();
}



function changeBackgroundColor() {

  color = app.selectedColor;

  switch (color) {
    case 'gelb':
      document.getElementById("text").style.backgroundColor = "#f6cd46";
      break;
    case 'orange':
      document.getElementById("text").style.backgroundColor = "#ff8a00";
      break;
    case 'rot':
      document.getElementById("text").style.backgroundColor = "#ee3923";
      break;
    case 'bordeaux':
      document.getElementById("text").style.backgroundColor = "#a6102a";
      break;
    case 'rosa':
      document.getElementById("text").style.backgroundColor = "#f4b7c7";
      break;
    case 'pink':
      document.getElementById("text").style.backgroundColor = "#ff4588";
      break;
    case 'lila':
      document.getElementById("text").style.backgroundColor = "#7d3d96";
      break;
    case 'marine':
      document.getElementById("text").style.backgroundColor = "#2d2d49";
      break;
    case 'königsblau':
      document.getElementById("text").style.backgroundColor = "#2a3be1";
      break;
    case 'hellblau':
      document.getElementById("text").style.backgroundColor = "#26b7da";
      break;
    case 'babyblau':
      document.getElementById("text").style.backgroundColor = "#9ebae4";
      break;
    case 'dunkelgrün':
      document.getElementById("text").style.backgroundColor = "#005b46";
      break;
    case 'braun':
      document.getElementById("text").style.backgroundColor = "#684226";
      break;
    case 'ocker':
      document.getElementById("text").style.backgroundColor = "#b1863b";
      break;
    case 'beige':
      document.getElementById("text").style.backgroundColor = "#ceb4a9";
      break;
    case 'grau':
      document.getElementById("text").style.backgroundColor = "#b2afb8";
      break;
    default:
      document.getElementById("text").style.backgroundColor = "#005b46";
      break;
  }
}

function changeFontFamily() {

  font = app.selectedFont;
  document.getElementById("text").style.fontSize = "500%";

  switch (font) {
    case 'Schrift 1':
      document.getElementById("text").style.fontFamily = "'Schrift 1'";
      break;
    case 'Schrift 2':
      document.getElementById("text").style.fontFamily = "'Schrift 2'";
      document.getElementById("text").style.fontSize = "650%";
      break;
    case 'Schrift 3':
      document.getElementById("text").style.fontFamily = "'Schrift 3'";
      break;
    case 'Schrift 4':
      document.getElementById("text").style.fontFamily = "'Schrift 4'";
      break;
    case 'Schrift 5':
      document.getElementById("text").style.fontFamily = "'Schrift 5'";
      break;
    case 'Schrift 6':
      document.getElementById("text").style.fontFamily = "'Schrift 6'";
      break;
    case 'Schrift 7':
      document.getElementById("text").style.fontFamily = "'Schrift 7'";
      break;
    default:
      document.getElementById("text").style.fontFamily = "'Schrift 1'";
      break;
  }
}
