const radioBtns = document.querySelectorAll("input[type='radio']");
const outputs = document.getElementsByClassName("calc");
const output_div = document.getElementsByClassName("output");
const forms = document.forms;
const inputs = document.querySelectorAll("input[type='number']");

radioBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
      if(index === 0) {
        outputs[0].style.display = "block";
        outputs[1].style.display = "none";
        outputs[2].style.display = "none";
      } else if(index === 1) {
        outputs[0].style.display = "none";
        outputs[1].style.display = "block";
        outputs[2].style.display = "none";
       
      } else if(index ===2) {
        outputs[0].style.display = "none";
        outputs[1].style.display = "none";
        outputs[2].style.display = "block";
      }
    })
});

forms[1].addEventListener('submit', (event)=>{
    event.preventDefault();
   const a = Number(inputs[0].value), b = Number(inputs[1].value);
   output_div[0].innerText = 1/2*(a*b);
});

forms[2].addEventListener('submit', (event) => {
    event.preventDefault();
    const a = Number(inputs[2].value),b = Number(inputs[3].value),c = Number(inputs[4].value);
    if((a+b)>c && (a+c) > b && (c+a)>b) {

        const s =  (a+b+c)/2;
        output_div[1].innerText = Math.sqrt(s*(s-a)*(s-b)*(s-c));

    } else {
        output_div[1].innerText = "Unable to create a triangle with these angles"
    }
   
});

forms[3].addEventListener('submit', (event) => {
    event.preventDefault();
    const a = Number(inputs[5].value), b = Number(inputs[6].value), c = Number(inputs[7].value);
    console.log(a,b,c);
    output_div[2].innerText = 1/2*(b*c* Math.sin(a* Math.PI/180));
})
