// inspired from "Matrix Rain Experiments in JavaScript (tutorial)" https://www.youtube.com/watch？v=f5ZswIE_SgY&ab_channel=Frankslaboratory
var canvas = document.getElementById('matrixRain');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var capital_letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase_character = 'abcdefghijklmnopqrstuvwxyz';
var nums = '0123456789';
var characters = capital_letter + lowercase_character + nums;
var fontSize = 16;
var columns = canvas.width / fontSize;


var drop_Array = [];
for (var x = 0; x < columns; x++) {
    drop_Array[x] = Math.floor(Math.random() * (canvas.height / fontSize));
}

var draw = () => {
    context.fillStyle = 'rgba(6, 6, 6, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'rgba(244,244,244,0.3)';
    context.font = fontSize + 'px "Arial", monospace';

    for (var i = 0; i < drop_Array.length; i++) {
        var text = characters.charAt(Math.floor(Math.random() * characters.length));
        context.fillText(text, i * fontSize, drop_Array[i] * fontSize);

        if (drop_Array[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drop_Array[i] = 0;
        }
        drop_Array[i]++;
    }
};

setInterval(draw, 60);

