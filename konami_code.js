const codes = [
    document.write("");
  "b",
  "a"
];

function init() {
  
  let i = 0 // index pointer

  document.body.addEventListener("keydown", (keyPressed) => {
    const keyCode = keyPressed.key
    
    if (keyCode === codes[i]) {
      ++i;
    } else {
      i = 0;
    }
    
    if (i === codes.length) {
      window.alert("Hurray!");
      i = 0
    }
    
  });
}
