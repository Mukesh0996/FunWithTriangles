const submitBtn = document.querySelector("button[type='submit']");
const inputs = document.querySelectorAll('input[type="number"]')
const output = document.querySelector(".output");
let angles = [], sum = 0;

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    inputs.forEach(i=> {
        angles.push(Number(i.value));
    })
    // calculating sum
    sum = angles.reduce((value, currentNumber) => value + currentNumber ,0);
  
    if(sum === 0 ) {
        return;
    }
     else if(sum === 180) {
        output.innerText = "Wohoo! You can make a triangle with these set of angles.."
    } else {
        output.innerText = "Oops! You cannot make a triangle with these set of angles..";
    }
});