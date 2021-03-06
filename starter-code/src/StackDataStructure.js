class List {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 9;
  }
  isfull() {
    return this.stackControl.length > 8;
  }

  isempty() {
    return this.stackControl.length < 0;
  }
}

class Stack extends List {
  constructor() {
    super();
  }

  add(elemento) {
    if (this.isfull()) return false;
    this.stackControl.push(elemento);
    return true;
  }

  remove() {
    if (this.isempty()) return false;
    this.stackControl.pop();
    return true;
  }
}

class Queue extends List {
  constructor() {
    super();
  }

  add(elemento) {
    if (this.isfull()) return false;
    this.stackControl.push(elemento);
    return true;
  }

  remove() {
    if (this.isempty()) return false;
    this.stackControl.shift();
    return true;
  }
}
var elementos = $(".elemento");
var texto = $("#next_elem");
var bagrega = $("#agrega");
var belimina = $("#elimina");
var structure = new Stack();

$(document).ready(() => elementos.toggleClass("no-display"));

$(bagrega).on("click", function() {
  let newelement = elementos[9 - structure.stackControl.length + 1];
  newelement.innerText = texto.val();
  texto.val("");
  if (!structure.add(newelement.innerText)) {
    elementos[0].innerText = "STACK IS FULL";
    elementos[0].toggleClass("no-display");
  }
  if (newelement.innerText.length < 1) return;

  $(newelement).toggleClass("no-display");
  //if (structure instanceof Stack)
});

$(belimina).on("click", function() {});
/*
var add = (a,b)=>a+b
var sub = (a,b)=>a-b
var mul = (a,b)=>a*b 
var div = (a,b)=>a/b 
var mod = (a,b)=>a%b
  
*/
