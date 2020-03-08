const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


function init() {
  let index = 0;
  document.body.addEventListener("keydown", (e) => {
   
   function onKeyDownHandler(e) {
     const key = e.key;
     
      index = (key === codes[index]) ? ++index : 0;
      
         if (index === codes.length) {
            window.alert("Hurray!");
              index = 0; 
     }
   }
  });
}

/* function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);

  if (key === alphabet[index]) {
    index++;

    if (index === alphabet.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
} */