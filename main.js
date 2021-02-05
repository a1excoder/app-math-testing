let formulas = [
    ["( a + b )<sup><small>2</small></sup>", "a<sup>2</sup> + 2ab + b<sup>2</sup>"],
    ["( a - b )<sup><small>2</small></sup>", "a<sup><small>2</small></sup> - 2ab + b<sup><small>2</small></sup>"],
    ["a<sup><small>2</small></sup> - b<sup><small>2</small></sup>", "( a + b ) ( a - b )"],
    ["a<sup><small>3</small></sup> + b<sup><small>3</small></sup>", "( a + b ) ( a<sup><small>2</small></sup> - ab + b<sup><small>2</small></sup> )"],
    ["a<sup><small>3</small></sup> - b<sup><small>3</small></sup>", "( a - b ) ( a<sup><small>2</small></sup> + ab + b<sup><small>2</small></sup> )"]
];


var rand_int = Math.floor(Math.random() * 5);
var rand_int_2 = Math.floor(Math.random() * 2);
var example = document.getElementById("example");

var rating = null;
var ratingValues = null;
var time = 25;

var timerCore = setInterval(function () {
    if (time > 0) {
        time--;
    } else {
        alert("З " + ratingValues + " варіантів правельних: " + rating);
        clearInterval(timerCore);
    }

    document.getElementById("timer").innerText = time;
}, 1000);

example.innerHTML = formulas[rand_int][rand_int_2];

function check() {
    var value = document.getElementById("value_int").value;

    ratingValues++;
    if (parseInt(value) === rand_int) {
        rating++;
    }

    rand_int = Math.floor(Math.random() * 5);
    rand_int_2 = Math.floor(Math.random() * 2);
    example.innerHTML = formulas[rand_int][rand_int_2];
}