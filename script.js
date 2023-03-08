const slider1 = document.getElementById("slider1");
const slider1Value = document.getElementById("slider1Value");
const slider2 = document.getElementById("slider2");
const slider2Value = document.getElementById("slider2Value");
const slider3 = document.getElementById("slider3");
const slider3Value = document.getElementById("slider3Value");
const AmbientTemp = document.getElementById("AmbientTemp");
const AmbientTempValue = document.getElementById("AmbientTempValue");
const sumDisplay = document.getElementById("sum");
const corebody = document.getElementById("corebodytemp");

function updateSum() {
  const sum = Number(slider1.value) + Number(slider2.value) + Number(slider3.value);
  sumDisplay.textContent = "Sum: " + sum;
}

function updateCoreBodyTemperature() {
  const core_body_temp = Number(AmbientTemp.value)/2;
  corebody.textContent = "Core Body Temperature: " + core_body_temp;
}

function updateSliderValue(slider, valueDisplay) {
  valueDisplay.textContent = slider.value;
}

slider1.addEventListener("input", () => {
  updateSliderValue(slider1, slider1Value);
  updateSum();
});
slider2.addEventListener("input", () => {
  updateSliderValue(slider2, slider2Value);
  updateSum();
});
slider3.addEventListener("input", () => {
  updateSliderValue(slider3, slider3Value);
  updateSum();
});
AmbientTemp.addEventListener("input", () => {
  updateSliderValue(AmbientTemp, AmbientTempValue);
  updateCoreBodyTemperature()
});

updateSliderValue(slider1, slider1Value);
updateSliderValue(slider2, slider2Value);
updateSliderValue(slider3, slider3Value);
updateSliderValue(AmbientTemp, AmbientTempValue);
updateSum(); // Initialize sum display
updateCoreBodyTemperature();
