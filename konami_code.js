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


  function onKeyDownHandler(e) { 
     const key = e.key;
     
      index = (key === codes[index]) ? ++index : 0;
      
         if (index === codes.length) {
            window.alert("Hurray!");
              index = 0; 
     }
   }
function init() {
  let index = 0;
  document.body.addEventListener("keydown", onKeyDownHandler() );
}

