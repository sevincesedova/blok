let btn = document.getElementById("btn"); 
let boxes = document.getElementById("boxes")
btn.addEventListener("click", function() {
  let box = document.createElement("div");
  box.classList.add("box");
  box.textContent = "Qutu";
 boxes.append(box);
 let color=RandomColor()
 box.style.color=color
  setTimeout(function() {
  boxes.removeChild(box);
  }, 3000); 
});
function RandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

