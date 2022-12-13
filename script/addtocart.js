const carts = ['addtocart1', 'addtocart2', 'addtocart3', 'addtocart4', 'addtocart5', 'addtocart6', 'addtocart7', 'addtocart8', 'addtocart9', 'addtocart10'];

window.onload = function () {
  for (let i = 0; i < carts.length; i++) {
    document.getElementById(carts[i]).onclick = function() {
      let q = "#image" + (i+1) + " .options .quantity";
      let quantity = document.querySelector(q).value;
      let s = "#image" + (i+1) + " .options .size";
      let size = document.querySelector(s).value;
      let c = "#image" + (i+1) + " .options .color";
      let color = document.querySelector(c).value;
      let msg = quantity + " " + size + " " + color + " (s) selected";
      alert(msg);
    };
  }
};
