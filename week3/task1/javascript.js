const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");
const nextButton = document.getElementById("next");

let currentLight = "red"; 

function clearLights() {
  redLight.classList.remove("active");
  yellowLight.classList.remove("active");
  greenLight.classList.remove("active");
}

function updateLight() {
  clearLights();
  if (currentLight === "red") {
    redLight.classList.add("active");
    setTimeout(() => {
      currentLight = "yellow";
      updateLight();
    }, 5000);
  } 
  else if (currentLight === "yellow") {
    yellowLight.classList.add("active");
    setTimeout(() => {
      currentLight = "green";
      updateLight();
    }, 2000); 
  } 
  else if (currentLight === "green") {
    greenLight.classList.add("active");
    setTimeout(() => {
      currentLight = "red";
      updateLight();
    }, 4000);
  }
}

nextButton.addEventListener("click", () => {
  clearLights(); 
  if (currentLight === "red")
    currentLight = "yellow";
  else if (currentLight === "yellow")
    currentLight = "green";
  else if (currentLight === "green")
    currentLight = "red";

  updateLight(); 
});

updateLight();