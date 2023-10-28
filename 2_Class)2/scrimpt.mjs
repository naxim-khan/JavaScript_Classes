 // Add a click event listener to the "CHECK" button
 document.getElementById('checkButton').addEventListener('click', function() {
    let tempInput = document.querySelector('#temperatureInput').value;
    tempInput = Number(tempInput);

    let message = "";
    if (tempInput < 20) {
        message = "It's Cold";
    } else {
        message = "It's Hot";
    }
    
    let msgline = document.querySelector("#msgline");
    msgline.textContent = message;
});