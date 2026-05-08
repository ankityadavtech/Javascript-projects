
let weightInput = document.getElementById("Weight");
let heightInput = document.getElementById("Height");
let bmiValue = document.getElementById("bmi-value");
let bmiStatus = document.getElementById("bmi-status");


function calculatrBMI() {
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);
    if (!weight || !height) {
        alert("Please enter weight and height");
        return;
    }
    const heightInMeter = height / 100;
    let BMI = weight / (heightInMeter * heightInMeter);
    bmiValue.textContent = BMI.toFixed(1);
    if (BMI < 18.5) {
        bmiStatus.textContent = "Underweight";
    } else if (BMI < 25) {
        bmiStatus.textContent = "Normal Weight";
    } else if (BMI < 30) {
        bmiStatus.textContent = "Overweight";
    } else {
        bmiStatus.textContent = "Obese";
    }

}
