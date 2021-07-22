const inputs = document.querySelectorAll("input[type='number']");
const submitBtn = document.querySelector("button[type='submit']");
const output = document.getElementsByClassName('output')[0];
submitBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    let length_a = Number(inputs[0].value), length_b = Number(inputs[1].value);
    const hypotenuse = Math.sqrt((length_a * length_a)+(length_b * length_b));
    output.innerText = hypotenuse;
})