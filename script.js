document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.querySelector(".btn-primary");
    const heightInput = document.querySelector('input[placeholder="Height/cm"]');
    const weightInput = document.querySelector('input[placeholder="Weight/kg"]');
    const bmiResultContainer = document.createElement("div");
    bmiResultContainer.className = "bmi-result-container";
    document.querySelector(".bmi-section").appendChild(bmiResultContainer);

    calculateButton.addEventListener("click", (event) => {
        event.preventDefault();

        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (!height || !weight) {
            bmiResultContainer.textContent = "Please enter valid height and weight.";
            return;
        }

        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        let status = "";

        if (bmi < 18.5) {
            status = "Underweight";
        } else if (bmi < 24.9) {
            status = "Healthy";
        } else if (bmi < 29.9) {
            status = "Overweight";
        } else {
            status = "Obese";
        }

        bmiResultContainer.innerHTML = `
            <h4>Your BMI: ${bmi}</h4>
            <p>Weight Status: ${status}</p>
        `;
    });
});
