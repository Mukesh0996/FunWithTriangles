const userDetail = document.getElementsByClassName('user_detail')[0];
const user_name = document.getElementsByClassName('name')[0];
const startPlayGameBtn = document.getElementsByClassName('playGame')[0];
const quiz = document.getElementsByClassName('quiz')[0];
const form = document.forms[0];

// capturing the html tags for player details
const player_name = document.getElementsByClassName('player_name')[0];
const player_icon = document.getElementsByClassName('player_icon')[0];
const player_score = document.getElementsByClassName('player_score')[0];
const formControl = document.getElementsByClassName('form-control');


const answers = ["yes","no", "yes","yes", "yes","isoceles", "30", "both", "45cm", "isoceles"];

startPlayGameBtn.addEventListener('click', (event) => {
    event.preventDefault();
    userDetail.style.display = "none";
    quiz.style.display = "flex";
    player_name.innerText = user_name.value;
});

//check the answers
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    let index = 0, score = 0;
    for(let fields of formData) {
        const [name, value] = fields;
        if(value === answers[index]) {
            formControl[index].style = "background-color: green";
            score++;
        } else {
            formControl[index].style = "background-color: red"
        }
        index++;
    }
    player_score.innerText = `Score: ${score}`
})