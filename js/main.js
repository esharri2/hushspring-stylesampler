(function () {

  console.log('main.js');
  const main = document.querySelector("main");

  const initPaletteSelector = () => {
    const paletteSelector = document.querySelector("select.controls-palettes");
    if (!paletteSelector) console.error("Palette selector not available");
    addPaletteSelectorValue(paletteSelector.value, main);
    paletteSelector.addEventListener("input", (event) => {
      addPaletteSelectorValue(event.target.value, main);
    });
  };

  const addPaletteSelectorValue = (value, el) => {
    const classes = value.split(" ");
    el.className = "";
    for (let classname of classes) {
      el.classList.add(classname);
    }
  };

  const initCaseSwitch = () => {
    const caseSwitch = document.querySelector(".case-switch");
    if (!caseSwitch) return;
    caseSwitch.addEventListener("input", function (event) {
      document.querySelectorAll(".heading, .body").forEach((el) => {
        el.classList.toggle("uppercase");
      });
    });
  };

  const initColorSwitch = () => {
    const colorSwitch = document.querySelector(".color-switch");
    if (!colorSwitch) return;
    colorSwitch.addEventListener("input", function(event) {
      const classes = main.classList;
      let textClassIndex;
      let bgClassIndex;
      classes.forEach((className, index)=>{
        if (className.includes("text-")) {
          textClassIndex = index;
        } else if (className.includes("bg-")) {
          bgClassIndex = index;
        }
      })
      const textClass = classes[textClassIndex];
      const bgClass = classes[bgClassIndex];
      const textColor = textClass.split('-')[1];
      const bgColor = bgClass.split("-")[1];
      main.classList.remove(textClass, bgClass);
      main.classList.add(`text-${bgColor}`, `bg-${textColor}`)
    })
  }

  initPaletteSelector();
  initCaseSwitch();
  initColorSwitch();
})();
