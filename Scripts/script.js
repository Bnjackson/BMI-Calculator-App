/*BMI weight calculator
*User enters height and weight if incorrect input, error message shows.
*If input is correct BMI is calculated and BMI is shown using DOM-manipulation.
*Needs way to combine feet and inches and stone and pounds. 
*Then function to calculate BMI. 
*Way to change height to cm and back and weight to kg and back.
*/

let submitButton = document.getElementById('button-submit');
submitButton.addEventListener('click', calculateBMI);

function calculateBMI (ev) { //ev refers to the actual click event itself.
    ev.preventDefault(); //prevents form submitting
    ev.stopPropagation(); //prevents bubbling
    let feet = document.getElementById('height-feet-input').value;
    let inches = document.getElementById('height-inches-input').value;
    let stone = document.getElementById('weight-stone-input').value;
    let pounds = document.getElementById('weight-pounds-input').value;
    let height, weight, BMI;
    height = (feet * 12) + Number(inches);
    weight = (stone * 14) + Number(pounds);
    BMI = weight/(height^2) * 703;
    console.log(height, weight, BMI);
}

