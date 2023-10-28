function checkAge(){
    document.getElementById('submit').addEventListener('click', function() {
        let ageInput = document.querySelector('#ageInput').value;
        ageInput = Number(ageInput)
        let message= document.querySelector('#message');
        if (ageInput <= 10) {
            message.textContent = "You're a Kid 👶";
        } else if (ageInput <= 19) {
            message.textContent = "You're a Teenager 👦";
        } else if (ageInput < 40){
            message.textContent = "You're Middle Age Person! 👨";
        }
        else{
            message.textContent="You're an Old age Person! 👵"
        }
    })
}

document.getElementById('submit').addEventListener('click', checkAge);

document.querySelector('#ageInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        checkAge();
    }
});