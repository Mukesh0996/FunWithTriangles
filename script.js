const submitBtn = document.querySelector("button[type='submit']");
const form = document.forms[0];

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    for(let fields of formData) {
        console.log(fields);
    }
});