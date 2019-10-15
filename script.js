//write first method
function sleep_in(weekday,vacation) {
    var schoolOut = !weekday || vacation;
    return schoolOut;
}

//write second method
function monkey_trouble(a_smile, b_smile) {
    var inTrouble = (a_smile && b_smile) || (!a_smile && !b_smile);
    return inTrouble;
}

//add 3-10 below here...
function string_times(text,num) {
    var textTot = text;
    if (num > 0) {
        for (var i = 1; i < num; i++) {
            textTot += text;
        }
        return textTot;
    } else {
        return "";
    }
}

function front_times(string, num){
    var string = string.substring(0,3);
    var stringTot = string;
    if (num > 0) {
        for (var i = 1; i < num; i++) {
            stringTot += string;
        }
        return stringTot;
    } else {
        return "";
    }
}

function string_bits(string){
    var stringTot = "";
    for(var i = 0; i < string.length; i++){
        if (i % 2 == 0){
            stringTot += string.substring(i, i+1);
        }
    }
    return stringTot
}

function caughtSpeeding(speed,Bday){
    var ticket = 0;
    if(Bday == true){
        speed -= 5;
    }
    if(speed <= 60){
        var ticket = 0;
    }
    if(speed >= 61 && speed <= 80){
        var ticket = 1;
    }
    if(speed >= 81){
        var ticket = 2;
    }
    return ticket;
}

function fizz_buzz(num){
    var string = "";
    if(num % 3 == 0 || num % 5 == 0){
        if(num % 3 == 0){
            string += "Fizz";
        }
        if(num % 5 == 0){
            string += "Buzz";
        }
    } else {
        string += (num + "!");
    }
    return string;
}

function teaParty(tea, candy){
    var party = 0;
    if(tea >= 5 && candy >= 5){
        var party = 1;
        if(tea >= 2*candy || candy >= 2*tea) {
            var party = 2;
        }
    }
    return party;
}

function blackjack(num1, num2){
    if(num1 >= 21 && num2 >= 21){
        var card = 0;
    } else {
        if(num1 <= 21 && num2 <= 21){
            if(num1 > num2){
                var card = num1;
            } else {
                var card = num2;
            }
        } else {
            if (num1 > 21) {
                var card = num2;
            } else {
                var card = num1;
            }
        }
    }
    return card;
}

function loneSum(a, b, c){
    var numa = a;
    var numb = b;
    var numc = c;
    if(a == b){
        var numa = 0
        var numb = 0
    }
    if(b == c){
        var numb = 0;
        var numc = 0;
    }
    if(a == c){
        var numa = 0;
        var numc = 0;
    }
    return numa + numb + numc;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    //test third method, etc
    document.getElementById("output").innerHTML += string_times("hey", 3);
    document.getElementById("output").innerHTML += front_times("hello", 3);
    document.getElementById("output").innerHTML += string_bits("happy Birthday");
    document.getElementById("output").innerHTML += caughtSpeeding(65, true);
    document.getElementById("output").innerHTML += fizz_buzz(25);
    document.getElementById("output").innerHTML += teaParty(5, 10);
    document.getElementById("output").innerHTML += blackjack(19, 25);
    document.getElementById("output").innerHTML += loneSum(3, 2, 3);
}
