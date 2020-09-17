/*BMI weight calculator
*User enters height and weight if incorrect input, error message shows.
*If input is correct BMI is calculated and BMI is shown using DOM-manipulation.
*Needs way to combine feet and inches and stone and pounds. 
*Then function to calculate BMI. 
*Way to change height to cm and back and weight to kg and back.
*/

let submitButton = document.getElementById('button-submit');
submitButton.addEventListener('click', calculateHeightWeight);

function calculateHeightWeight (ev) { //ev refers to the actual click event itself.
    ev.preventDefault(); //prevents form submitting
    ev.stopPropagation(); //prevents bubbling
    let feet = document.getElementById('height-feet-input').value;
    let inches = document.getElementById('height-inches-input').value;
    let stone = document.getElementById('weight-stone-input').value;
    let pounds = document.getElementById('weight-pounds-input').value;
    let height = (feet * 12) + Number(inches);
    let weight = (stone * 14) + Number(pounds);
    function calculateBMI () {
        if (height > 0 && weight > 0) {
            let BMI = (weight /(height*height)) * 703.06957964;
            BMI = BMI.toFixed(1);
            displayBMI();
            function displayBMI () {
                let resultBMI = document.getElementById('BMI-result');
                resultBMI.style.display = "block";
                let numberBMI = document.getElementById('BMI-number');
                numberBMI.textContent = BMI;
                let weightRange = document.getElementById('weight-range');
                if (BMI < 18.5) {
                    weightRange.textContent = 'Underweight';
                }
                else if (BMI >= 18.5 && BMI <= 24.9) {
                    weightRange.textContent = 'Normal or healthy weight';
                }
                else if (BMI >= 25 && BMI <= 29.9) {
                    weightRange.textContent = 'Overweight';
                }
                else if (BMI >= 30) {
                    weightRange.textContent = 'Obese';
                }
            }
        }
        else {

        }
    }
    calculateBMI();
}

