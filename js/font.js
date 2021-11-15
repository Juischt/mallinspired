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
      { fontname: "Schrift 1", wert: 'f1' },
      { fontname: "Schrift 2", wert: 'f2' },
      { fontname: "Schrift 3", wert: 'f3' },
      { fontname: "Schrift 4", wert: 'f4' },
      { fontname: "Schrift 5", wert: 'f5' },
      { fontname: "Schrift 6", wert: 'f6' },
      { fontname: "Schrift 7", wert: 'f7' }
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
  //font = document.getElementsByClassName("select-selected").innerHTML;
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


function changeSelectFont() {

  font = app.selectedFont;

  switch (font) {
    case 'Schrift 1':
      document.getElementById("selectFont").style.fontFamily = "'Schrift 1'";
      a.style.fontFamily = "'Schrift 1'";
      break;
    case 'Schrift 2':
      document.getElementById("selectFont").style.fontFamily = "'Schrift 2'";
      a.style.fontFamily = "'Schrift 2'";
      break;
    case 'Schrift 3':
      document.getElementById("selectFont").style.fontFamily = "'Schrift 3'";
      a.style.fontFamily = "'Schrift 3'";
      break;
    case 'Schrift 4':
      document.getElementById("selectFont").style.fontFamily = "'Schrift 4'";
      a.style.fontFamily = "'Schrift 4'";
      break;
    case 'Schrift 5':
      document.getElementById("selectFont").style.fontFamily = "'Schrift 5'";
      a.style.fontFamily = "'Schrift 5'";
      break;
    case 'Schrift 6':
      document.getElementById("selectFont").style.fontFamily = "'Schrift 6'";
      a.style.fontFamily = "'Schrift 6'";
      break;
    case 'Schrift 7':
      document.getElementById("selectFont").style.fontFamily = "'Schrift 7'";
      a.style.fontFamily = "'Schrift 7'";
      break;
    default:
      document.getElementById("selectFont").style.fontFamily = "'Schrift 1'";
      a.style.fontFamily = "'Schrift 1'";
      break;
  }
}

function leer() {
  setTimeout(function () { changeSelectFont() }, 10);
}






var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");


l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
      and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);

    changeSelectFont();
    c.setAttribute("class", app.optionsFont[j - 1]?.wert);

  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
  app.selectedFont = a.innerText;
  changeSelectFont();
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);











var x2, i2, j2, l2, ll2, selElmnt2, a2, b2, c2;
/* Look for any elements with the class "custom-select": */
x2 = document.getElementsByClassName("custom-select2");


l2 = x2.length;
for (i2 = 0; i2 < l2; i2++) {
  selElmnt2 = x2[i2].getElementsByTagName("select")[0];
  ll2 = selElmnt2.length;
  /* For each element, create a2 new DIV that will act as the selected item: */
  a2 = document.createElement("DIV");
  a2.setAttribute("class", "select-selected2");
  a2.innerHTML = selElmnt2.options[selElmnt2.selectedIndex].innerHTML;
  x2[i2].appendChild(a2);
  /* For each element, create a2 new DIV that will contain the option list: */
  b2 = document.createElement("DIV");
  b2.setAttribute("class", "select-items2 select-hide2");
  for (j2 = 1; j2 < ll2; j2++) {
    /* For each option in the original select element,
    create a2 new DIV that will act as an option item: */
    c2 = document.createElement("DIV");
    c2.innerHTML = selElmnt2.options[j2].innerHTML;
    c2.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
      and the selected item: */
      var y, i2, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i2 = 0; i2 < sl; i2++) {
        if (s.options[i2].innerHTML == this.innerHTML) {
          s.selectedIndex = i2;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected2");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected2");
          break;
        }
      }
      h.click();
    });
    b2.appendChild(c2);

  }
  x2[i2].appendChild(b2);
  a2.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide2");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect2(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x2, y, i2, xl, yl, arrNo = [];
  x2 = document.getElementsByClassName("select-items2");
  y = document.getElementsByClassName("select-selected2");
  xl = x2.length;
  yl = y.length;
  for (i2 = 0; i2 < yl; i2++) {
    if (elmnt == y[i2]) {
      arrNo.push(i2)
    } else {
      y[i2].classList.remove("select-arrow-active");
    }
  }
  for (i2 = 0; i2 < xl; i2++) {
    if (arrNo.indexOf(i2)) {
      x2[i2].classList.add("select-hide2");
    }
  }
  app.selectedColor = a2.innerText;
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect2);