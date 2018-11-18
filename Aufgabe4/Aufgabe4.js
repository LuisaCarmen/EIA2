/*
Aufgabe: Aufgabe 4
Name: Luisa Neininger
Matrikel: 259314
Datum: 15.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A4;
(function (A4) {
    document.addEventListener("DOMContentLoaded", createAllProducts);
    document.addEventListener("DOMContentLoaded", changedMind);
    function changedMind(_event) {
        var fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    var treePrice = 0;
    var ballPrice = 0;
    var candlePrice = 0;
    var lamettaPrice = 0;
    var standPrice = 0;
    var deliveryPrice = 0;
    var ballAmount = 0;
    var candleAmount = 0;
    var lamettaAmount = 0;
    var firstname = "";
    var surname = "";
    var adress = "";
    var mail = "";
    var extra = "";
    //main function!!
    function createAllProducts() {
        document.getElementById("button").addEventListener("click", checkProgress);
        var node = document.getElementById("fieldset");
        var HTML;
        //Create Trees
        HTML += "<fieldset>";
        HTML += "<legend>Choose your tree</legend>";
        HTML += "<select name='Select' id='trees'>";
        for (var arrayNumber = 0; arrayNumber < A4.christmasTree.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A4.christmasTree[arrayNumber].name + " " + A4.christmasTree[arrayNumber].price + " €'>" + A4.christmasTree[arrayNumber].name + " " + A4.christmasTree[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        //Create christmas balls
        HTML += "<fieldset>";
        HTML += "<legend>Christmas balls (Pack of 5)</legend>";
        HTML += "<select name='Select' id='balls'>";
        for (var arrayNumber = 0; arrayNumber < A4.christmasBalls.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A4.christmasBalls[arrayNumber].name + " " + A4.christmasBalls[arrayNumber].price + " €'>" + A4.christmasBalls[arrayNumber].name + " " + A4.christmasBalls[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Select' id='amountBalls'>";
        for (var amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create candles
        HTML += "<fieldset>";
        HTML += "<legend>Candles (Pack of 10)</legend>";
        HTML += "<select name='Select' id='candles'>";
        for (var arrayNumber = 0; arrayNumber < A4.candles.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A4.candles[arrayNumber].name + " " + A4.candles[arrayNumber].price + " €'>" + A4.candles[arrayNumber].name + " " + A4.candles[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Select' id='amountCandles'>";
        for (var amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create lametta
        HTML += "<fieldset>";
        HTML += "<legend>Lametta (200g pack)</legend>";
        HTML += "<select name='Select' id='Lametta'>";
        for (var arrayNumber = 0; arrayNumber < A4.lametta.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A4.lametta[arrayNumber].name + " " + A4.lametta[arrayNumber].price + " €'>" + A4.lametta[arrayNumber].name + " " + A4.lametta[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Select' id='amountLametta'>";
        for (var amountNumber = 0; amountNumber < 10; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create tree stands
        HTML += "<fieldset>";
        HTML += "<legend>Tree stand</legend>";
        for (var arrayNumber = 0; arrayNumber < A4.treeStands.length; arrayNumber++) {
            HTML += "<input type='radio' name='Radiogroup' value='" + arrayNumber + A4.treeStands[arrayNumber].name + " " + A4.treeStands[arrayNumber].price + " €'  id='stand" + arrayNumber + "' />";
            HTML += "<label for='check" + arrayNumber + "'>" + A4.treeStands[arrayNumber].name + " " + A4.treeStands[arrayNumber].price + " €</label>";
        }
        HTML += "</fieldset>";
        HTML += "<br>";
        //delivery options
        HTML += "<fieldset>";
        HTML += "<legend>Delivery options</legend>";
        for (var arrayNumber = 0; arrayNumber < A4.delivery.length; arrayNumber++) {
            HTML += "<input type='radio' name='Radiogroup1' value='" + arrayNumber + A4.delivery[arrayNumber].name + " " + A4.delivery[arrayNumber].price + " €'  id='deliveryoption" + arrayNumber + "' />";
            HTML += "<label for='check" + arrayNumber + "'>" + A4.delivery[arrayNumber].name + " " + A4.delivery[arrayNumber].price + " €</label>";
        }
        HTML += "</fieldset>";
        HTML += "<br>";
        //buyer info
        HTML += "<fieldset>";
        HTML += "<legend>Buyer Information</legend>";
        HTML += "<input id='surname' type='text' name='Surname' placeholder='Surname'/>";
        HTML += "<br><br>";
        HTML += "<input id='firstname' type='text' name='name' placeholder='Name'/>";
        HTML += "<br><br>";
        HTML += "<input id='mail' type='email' name='mail' placeholder='E-mail'/>";
        HTML += "<br><br>";
        HTML += "<textarea id='adress' name='Area' cols='30' rows='4' placeholder='Please enter your adress' >";
        HTML += "</textarea>";
        HTML += "<br><br>";
        HTML += "<textarea id='extra' name='Area' cols='30' rows='4' placeholder='Extra information for the seller' >";
        HTML += "</textarea>";
        HTML += "</fieldset>";
        node.innerHTML += HTML;
    }
    //Handle Change Funktionen  
    function handleChange(_event) {
        var target = _event.target;
        //trees
        if (target.id == "trees") {
            var node_1 = document.getElementById("treeshtml");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            treePrice = A4.christmasTree[priceIndex].price;
            //console.log(priceTree);
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node_1.innerHTML = childNodeHTML;
        }
        //balls
        if (target.id == "balls") {
            var node_2 = document.getElementById("ballhtml");
            var value = target.value;
            var _price = parseInt(value.substr(0, 1));
            ballPrice = A4.christmasBalls[_price].price;
            var HTML_1;
            HTML_1 = "";
            HTML_1 += "<a>";
            HTML_1 += " " + value.substr(1);
            HTML_1 += "</a>";
            node_2.innerHTML = HTML_1;
        }
        if (target.id == "amountBalls") {
            var node_3 = document.getElementById("ballamounthtml");
            var value = target.value;
            var _number = parseInt(value.substr(1, 2));
            ballAmount = _number;
            var HTML_2;
            HTML_2 = "";
            HTML_2 += "<a>";
            HTML_2 += " " + target.value;
            HTML_2 += "</a>";
            node_3.innerHTML = HTML_2;
        }
        //Kerzen
        if (target.id == "candles") {
            var node_4 = document.getElementById("candlehtml");
            var value = target.value;
            var _price = parseInt(value.substr(0, 1));
            candlePrice = A4.candles[_price].price;
            var HTML_3;
            HTML_3 = "";
            HTML_3 += "<a>";
            HTML_3 += " " + value.substr(1);
            HTML_3 += "</a>";
            node_4.innerHTML = HTML_3;
        }
        if (target.id == "amountCandles") {
            var node_5 = document.getElementById("candleamounthtml");
            var value = target.value;
            var _number = parseInt(value.substr(1, 2));
            candleAmount = _number;
            var HTML_4;
            HTML_4 = "";
            HTML_4 += "<a>";
            HTML_4 += " " + target.value;
            HTML_4 += "</a>";
            node_5.innerHTML = HTML_4;
        }
        //Lametta
        if (target.id == "Lametta") {
            var node_6 = document.getElementById("lamettahtml");
            var value = target.value;
            var _price = parseInt(value.substr(0, 1));
            lamettaPrice = A4.lametta[_price].price;
            var HTML_5;
            HTML_5 = "";
            HTML_5 += "<a>";
            HTML_5 += " " + value.substr(1);
            HTML_5 += "</a>";
            node_6.innerHTML = HTML_5;
        }
        if (target.id == "amountLametta") {
            var node_7 = document.getElementById("lamettaamounthtml");
            var value = target.value;
            var _number = parseInt(value.substr(1, 2));
            lamettaAmount = _number;
            var HTML_6;
            HTML_6 = "";
            HTML_6 += "<a>";
            HTML_6 += " " + target.value;
            HTML_6 += "</a>";
            node_7.innerHTML = HTML_6;
        }
        //tree stands
        if (target.name == "Radiogroup") {
            var node_8 = document.getElementById("standhtml");
            var value = target.value;
            var _price = parseInt(value.substr(0, 1));
            standPrice = A4.treeStands[_price].price;
            var HTML_7;
            HTML_7 = "";
            HTML_7 += "<a>";
            HTML_7 += " " + value.substr(1);
            HTML_7 += "</a>";
            node_8.innerHTML = HTML_7;
        }
        //delivery options
        if (target.name == "Radiogroup1") {
            var node_9 = document.getElementById("deliveryhtml");
            var value = target.value;
            var _price = parseInt(value.substr(0, 1));
            deliveryPrice = A4.delivery[_price].price;
            var HTML_8;
            HTML_8 = "";
            HTML_8 += "<a>";
            HTML_8 += " " + value.substr(1);
            HTML_8 += "</a>";
            node_9.innerHTML = HTML_8;
        }
        //Buyer information
        if (target.id == "adress") {
            var node_10 = document.getElementById("adresshtml");
            adress = target.value;
            var HTML_9;
            HTML_9 = "";
            HTML_9 += "<a>";
            HTML_9 += " " + target.value;
            HTML_9 += "</a>";
            node_10.innerHTML = HTML_9;
        }
        if (target.id == "surname") {
            var node_11 = document.getElementById("surnamehtml");
            surname = target.value;
            var HTML_10;
            HTML_10 = "";
            HTML_10 += "<a>";
            HTML_10 += " " + target.value;
            HTML_10 += "</a>";
            node_11.innerHTML = HTML_10;
        }
        if (target.id == "firstname") {
            var node_12 = document.getElementById("firstnamehtml");
            firstname = target.value;
            var HTML_11;
            HTML_11 = "";
            HTML_11 += "<a>";
            HTML_11 += " " + target.value;
            HTML_11 += "</a>";
            node_12.innerHTML = HTML_11;
        }
        if (target.id == "mail") {
            var node_13 = document.getElementById("mailhtml");
            mail = target.value;
            var HTML_12;
            HTML_12 = "";
            HTML_12 += "<a>";
            HTML_12 += " " + target.value;
            HTML_12 += "</a>";
            node_13.innerHTML = HTML_12;
        }
        if (target.id == "extra") {
            var node_14 = document.getElementById("extrahtml");
            extra = target.value;
            var HTML_13;
            HTML_13 = "";
            HTML_13 += "<a>";
            HTML_13 += " " + target.value;
            HTML_13 += "</a>";
            node_14.innerHTML = HTML_13;
        }
        //Berechnung des Gesamtpreises
        var node = document.getElementById("endpricehtml");
        var HTML;
        HTML = "";
        HTML += "<a>";
        HTML += (treePrice + (ballPrice * ballAmount) + (candlePrice * candleAmount) + (lamettaPrice * lamettaAmount) + standPrice + deliveryPrice);
        HTML += " Euro";
        HTML += "</a>";
        node.innerHTML = HTML;
    }
    //Progress. Wurde schon alles ausgewählt? Wenn ja--> nichts, wenn nein--> I'm sorry....
    function checkProgress(_event) {
        if (mail == "" || extra == "" || firstname == "" || surname == "" || adress == "" || treePrice == 0 || standPrice == 0 || ballPrice == 0 || lamettaPrice == 0 || candlePrice == 0 || deliveryPrice == 0 || ballAmount == 0 || lamettaAmount == 0 || candleAmount == 0) {
            document.getElementById("notSelectedYet").innerHTML = "I'm sorry, you need to fill out a few more things!";
        }
        else {
            document.getElementById("notSelectedYet").innerHTML = "";
        }
    }
})(A4 || (A4 = {}));
//# sourceMappingURL=Aufgabe4.js.map