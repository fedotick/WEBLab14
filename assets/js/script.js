let response;

// 1
let yyyy = +prompt("Введите год рождения:");
let mm = +prompt("Введите месяц рождения:");
let dd = +prompt("Введите день рождения:");

response = "Вы ";

if (21 <= dd && mm == 3 || dd <= 20 && mm == 4) {
    response += "овен";
} else if (21  <= dd && mm == 4 || dd <= 21 && mm == 5) {
    response += "телец";
} else if (22  <= dd && mm == 5 || dd <= 21 && mm == 6) {
    response += "близнецы";
} else if (22  <= dd && mm == 6 || dd <= 22 && mm == 7) {
    response += "рак";
} else if (23  <= dd && mm == 7 || dd <= 21 && mm == 8) {
    response += "лев";
} else if (22  <= dd && mm == 8 || dd <= 23 && mm == 9) {
    response += "дева";
} else if (24  <= dd && mm == 9 || dd <= 23 && mm == 10) {
    response += "весы";
} else if (24  <= dd && mm == 10 || dd <= 22 && mm == 11) {
    response += "скорпион";
} else if (23  <= dd && mm == 11 || dd <= 22 && mm == 12) {
    response += "стрелец";
} else if (23  <= dd && mm == 12 || dd <= 20 && mm == 1) {
    response += "козерог";
} else if (21  <= dd && mm == 1 || dd <= 19 && mm == 2) {
    response += "водолей";
} else if (20  <= dd && mm == 2 || dd <= 20 && mm == 3) {
    response += "рыбы";
}

response += "!";

alert(response);

response = "Вы "

switch (yyyy % 12) {
    case 4:
        response += "крыса";
        break;
    case 5:
        response += "бык";
        break;
    case 6:
        response += "тигр";
        break;
    case 7:
        response += "заяц";
        break;
    case 8:
        response += "дракон";
        break;
    case 9:
        response += "змея";
        break;
    case 10:
        response += "лошадь";
        break;
    case 11:
        response += "овца";
        break;
    case 0:
        response += "обезьяна";
        break;
    case 1:
        response += "петух";
        break;
    case 2:
        response += "собака";
        break;
    case 3:
        response += "свинья";
        break;
}

response += "!";

alert(response);

// 2
let a = 2;
let b = 10;

function isSimple(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

response = "";

for (let i = a; i <= b; i++) {
    if (isSimple(i)) {
        response += i;
        if (i < b) {
            response += ", ";
        }
    }
}

alert(response);

// 3 
let answer;

for (let i = 0; i < 3; i++) {
    answer = prompt("Что это такое: синий, большой, с усами и полностью набит зайцами?");
    
    if (answer == "Троллейбус") {
        alert("Правильно!");
        break;
    }

    if (answer == "Сдаюсь") {
        alert("Правильный ответ: троллейбус.");
        break;
    }

    alert("Подумай еще.");
}

// 4
let product1 = 2.98;
let product2 = 4.50;
let product3 = 9.98;
let product4 = 4.49;
let product5 = 6.87;

let chois, amount;
let price;

while (true) {
    chois = +prompt("Введите номер продукта:");
    if (chois == 0) {
        break;
    }

    amount = +prompt("ЦЕНЫ\nПродукт 1: " + product1 + "\nПродукт 2: " + product2 + "\nПродукт 3: " + product3 + "\nПродукт 4: " + product4 + "\nПродукт 5: " + product5 + "\nВведите проданное количество:");
    
    switch (chois) {
        case 1:
            price = product1;
            break;
        case 2: 
            price = product2;
            break;
        case 3: 
            price = product3;
            break;
        case 4: 
            price = product4;
            break;
        case 5: 
            price = product5;
            break;
    }

    answer = "Продукт: " + chois + "\nЦена: " + price + "\nПроданно: " + amount + "\nОбщ. стоимость: " + price * amount;

    alert(answer);
} 
