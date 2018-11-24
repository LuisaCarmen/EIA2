/*
Aufgabe: Aufgabe 5
Name: Luisa Neininger
Matrikel: 259314
Datum: 24.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A5;
(function (A5) {
    document.addEventListener("DOMContentLoaded", createAllProducts);
    document.addEventListener("DOMContentLoaded", changedMind);
    function changedMind(_event) {
        var fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    var treePrice = 0;
    var ballPrice = 0;
    var ballPrice1 = 0;
    var ballPrice2 = 0;
    var ballAmount = 0;
    var ballAmount1 = 0;
    var ballAmount2 = 0;
    var candlePrice = 0;
    var candlePrice1 = 0;
    var candlePrice2 = 0;
    var candleAmount = 0;
    var candleAmount1 = 0;
    var candleAmount2 = 0;
    var ornamentPrice = 0;
    var ornamentPrice1 = 0;
    var ornamentPrice2 = 0;
    var ornamentAmount = 0;
    var ornamentAmount1 = 0;
    var ornamentAmount2 = 0;
    var lamettaPrice = 0;
    var lamettaPrice1 = 0;
    var lamettaPrice2 = 0;
    var lamettaAmount = 0;
    var lamettaAmount1 = 0;
    var lamettaAmount2 = 0;
    var standPrice = 0;
    var deliveryPrice = 0;
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
        HTML += "<legend>Pick your tree</legend>";
        for (var arrayNumber = 0; arrayNumber < A5.christmasTree.length; arrayNumber++) {
            HTML += "<input type='radio' name='trees' value='" + arrayNumber + A5.christmasTree[arrayNumber].name + " " + A5.christmasTree[arrayNumber].price + " €'  id='stand" + arrayNumber + "' />";
            HTML += "<label for='check" + arrayNumber + "'>" + A5.christmasTree[arrayNumber].name + " " + A5.christmasTree[arrayNumber].price + " €</label>";
        }
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create christmas balls
        HTML += "<fieldset>";
        HTML += "<legend>Christmas balls</legend>";
        HTML += "<p>Main Color:</p>";
        HTML += "<select name='Select' id='balls'>";
        for (var arrayNumber = 0; arrayNumber < A5.christmasBalls.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A5.christmasBalls[arrayNumber].name + " " + A5.christmasBalls[arrayNumber].price + " €'>" + A5.christmasBalls[arrayNumber].name + " " + A5.christmasBalls[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Select' id='amountBalls'>";
        for (var amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        //Create christmas balls 1
        HTML += "<p>Additional Color 1:</p>";
        HTML += "<select name='Select' id='balls1'>";
        for (var arrayNumber = 0; arrayNumber < A5.christmasBalls.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A5.christmasBalls[arrayNumber].name + " " + A5.christmasBalls[arrayNumber].price + " €'>" + A5.christmasBalls[arrayNumber].name + " " + A5.christmasBalls[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Select' id='amountBalls1'>";
        for (var amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        //Create christmas balls 2
        HTML += "<p>Additional Color 2:</p>";
        HTML += "<select name='Select' id='balls2'>";
        for (var arrayNumber = 0; arrayNumber < A5.christmasBalls.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A5.christmasBalls[arrayNumber].name + " " + A5.christmasBalls[arrayNumber].price + " €'>" + A5.christmasBalls[arrayNumber].name + " " + A5.christmasBalls[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Select' id='amountBalls2'>";
        for (var amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create candles
        HTML += "<fieldset>";
        HTML += "<legend>Candles </legend>";
        HTML += "<p>Main Color:</p>";
        HTML += "<select name='Select' id='candles'>";
        for (var arrayNumber = 0; arrayNumber < A5.candles.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A5.candles[arrayNumber].name + " " + A5.candles[arrayNumber].price + " €'>" + A5.candles[arrayNumber].name + " " + A5.candles[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Select' id='amountCandles'>";
        for (var amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        //Create candles 1
        HTML += "<p>Additional Color 1:</p>";
        HTML += "<select name='Select' id='candles1'>";
        for (var arrayNumber = 0; arrayNumber < A5.candles.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A5.candles[arrayNumber].name + " " + A5.candles[arrayNumber].price + " €'>" + A5.candles[arrayNumber].name + " " + A5.candles[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Select' id='amountCandles1'>";
        for (var amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        //Create candles 2
        HTML += "<p>Additional Color 2:</p>";
        HTML += "<select name='Select' id='candles2'>";
        for (var arrayNumber = 0; arrayNumber < A5.candles.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A5.candles[arrayNumber].name + " " + A5.candles[arrayNumber].price + " €'>" + A5.candles[arrayNumber].name + " " + A5.candles[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Select' id='amountCandles2'>";
        for (var amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create ornaments
        HTML += "<fieldset>";
        HTML += "<legend>Ornaments</legend>";
        HTML += "<p>Main Color:</p>";
        HTML += "<select name='Select' id='ornaments'>";
        for (var arrayNumber = 0; arrayNumber < A5.ornaments.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A5.ornaments[arrayNumber].name + " " + A5.ornaments[arrayNumber].price + " €'>" + A5.ornaments[arrayNumber].name + " " + A5.ornaments[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Select' id='amountOrnaments'>";
        for (var amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        //Create ornaments 1
        HTML += "<p>Additional Color 1:</p>";
        HTML += "<select name='Select' id='ornaments1'>";
        for (var arrayNumber = 0; arrayNumber < A5.ornaments.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A5.ornaments[arrayNumber].name + " " + A5.ornaments[arrayNumber].price + " €'>" + A5.ornaments[arrayNumber].name + " " + A5.ornaments[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Select' id='amountOrnaments1'>";
        for (var amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        //Create ornaments 2
        HTML += "<p>Additional Color 2:</p>";
        HTML += "<select name='Select' id='ornaments2'>";
        for (var arrayNumber = 0; arrayNumber < A5.ornaments.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A5.ornaments[arrayNumber].name + " " + A5.ornaments[arrayNumber].price + " €'>" + A5.ornaments[arrayNumber].name + " " + A5.ornaments[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Select' id='amountOrnaments2'>";
        for (var amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create lametta
        HTML += "<fieldset>";
        HTML += "<legend>Lametta (200g pack)</legend>";
        HTML += "<p>Main Color:</p>";
        HTML += "<select name='Select' id='Lametta'>";
        for (var arrayNumber = 0; arrayNumber < A5.lametta.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A5.lametta[arrayNumber].name + " " + A5.lametta[arrayNumber].price + " €'>" + A5.lametta[arrayNumber].name + " " + A5.lametta[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Select' id='amountLametta'>";
        for (var amountNumber = 0; amountNumber < 10; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "<br>";
        //Create lametta 1
        HTML += "<p>Additional Color 1:</p>";
        HTML += "<select name='Select' id='Lametta1'>";
        for (var arrayNumber = 0; arrayNumber < A5.lametta.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A5.lametta[arrayNumber].name + " " + A5.lametta[arrayNumber].price + " €'>" + A5.lametta[arrayNumber].name + " " + A5.lametta[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Select' id='amountLametta1'>";
        for (var amountNumber = 0; amountNumber < 10; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        //Create lametta 2
        HTML += "<p>Additional Color 2:</p>";
        HTML += "<select name='Select' id='Lametta2'>";
        for (var arrayNumber = 0; arrayNumber < A5.lametta.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A5.lametta[arrayNumber].name + " " + A5.lametta[arrayNumber].price + " €'>" + A5.lametta[arrayNumber].name + " " + A5.lametta[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Select' id='amountLametta2'>";
        for (var amountNumber = 0; amountNumber < 10; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create tree stands
        HTML += "<fieldset>";
        HTML += "<legend>Tree stand</legend>";
        for (var arrayNumber = 0; arrayNumber < A5.treeStands.length; arrayNumber++) {
            HTML += "<input type='radio' name='Radiogroup' value='" + arrayNumber + A5.treeStands[arrayNumber].name + " " + A5.treeStands[arrayNumber].price + " €'  id='stand" + arrayNumber + "' />";
            HTML += "<label for='check" + arrayNumber + "'>" + A5.treeStands[arrayNumber].name + " " + A5.treeStands[arrayNumber].price + " €</label>";
        }
        HTML += "</fieldset>";
        HTML += "<br>";
        //delivery options
        HTML += "<fieldset>";
        HTML += "<legend>Delivery options</legend>";
        for (var arrayNumber = 0; arrayNumber < A5.delivery.length; arrayNumber++) {
            HTML += "<input type='radio' name='Radiogroup1' value='" + arrayNumber + A5.delivery[arrayNumber].name + " " + A5.delivery[arrayNumber].price + " €'  id='deliveryoption" + arrayNumber + "' />";
            HTML += "<label for='check" + arrayNumber + "'>" + A5.delivery[arrayNumber].name + " " + A5.delivery[arrayNumber].price + " €</label>";
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
        if (target.name == "trees") {
            var node_1 = document.getElementById("treeshtml");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            treePrice = A5.christmasTree[priceIndex].price;
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
            ballPrice = A5.christmasBalls[_price].price;
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
        //Additional Balls 1
        if (target.id == "balls1") {
            var node_4 = document.getElementById("ballhtml1");
            var value = target.value;
            var _price = parseInt(value.substr(0, 1));
            ballPrice1 = A5.christmasBalls[_price].price;
            var HTML_3;
            HTML_3 = "";
            HTML_3 += "<a>";
            HTML_3 += " " + value.substr(1);
            HTML_3 += "</a>";
            node_4.innerHTML = HTML_3;
        }
        if (target.id == "amountBalls1") {
            var node_5 = document.getElementById("ballamounthtml1");
            var value = target.value;
            var _number = parseInt(value.substr(1, 2));
            ballAmount1 = _number;
            var HTML_4;
            HTML_4 = "";
            HTML_4 += "<a>";
            HTML_4 += " " + target.value;
            HTML_4 += "</a>";
            node_5.innerHTML = HTML_4;
        }
        //Additional Balls 2
        if (target.id == "balls2") {
            var node_6 = document.getElementById("ballhtml2");
            var value = target.value;
            var _price = parseInt(value.substr(0, 1));
            ballPrice2 = A5.christmasBalls[_price].price;
            var HTML_5;
            HTML_5 = "";
            HTML_5 += "<a>";
            HTML_5 += " " + value.substr(1);
            HTML_5 += "</a>";
            node_6.innerHTML = HTML_5;
        }
        if (target.id == "amountBalls2") {
            var node_7 = document.getElementById("ballamounthtml2");
            var value = target.value;
            var _number = parseInt(value.substr(1, 2));
            ballAmount2 = _number;
            var HTML_6;
            HTML_6 = "";
            HTML_6 += "<a>";
            HTML_6 += " " + target.value;
            HTML_6 += "</a>";
            node_7.innerHTML = HTML_6;
        }
        //Kerzen
        if (target.id == "candles") {
            var node_8 = document.getElementById("candlehtml");
            var value = target.value;
            var _price = parseInt(value.substr(0, 1));
            candlePrice = A5.candles[_price].price;
            var HTML_7;
            HTML_7 = "";
            HTML_7 += "<a>";
            HTML_7 += " " + value.substr(1);
            HTML_7 += "</a>";
            node_8.innerHTML = HTML_7;
        }
        if (target.id == "amountCandles") {
            var node_9 = document.getElementById("candleamounthtml");
            var value = target.value;
            var _number = parseInt(value.substr(1, 2));
            candleAmount = _number;
            var HTML_8;
            HTML_8 = "";
            HTML_8 += "<a>";
            HTML_8 += " " + target.value;
            HTML_8 += "</a>";
            node_9.innerHTML = HTML_8;
        }
        //Candles 1
        if (target.id == "candles1") {
            var node_10 = document.getElementById("candlehtml1");
            var value = target.value;
            var _price = parseInt(value.substr(0, 1));
            candlePrice1 = A5.candles[_price].price;
            var HTML_9;
            HTML_9 = "";
            HTML_9 += "<a>";
            HTML_9 += " " + value.substr(1);
            HTML_9 += "</a>";
            node_10.innerHTML = HTML_9;
        }
        if (target.id == "amountCandles1") {
            var node_11 = document.getElementById("candleamounthtml1");
            var value = target.value;
            var _number = parseInt(value.substr(1, 2));
            candleAmount1 = _number;
            var HTML_10;
            HTML_10 = "";
            HTML_10 += "<a>";
            HTML_10 += " " + target.value;
            HTML_10 += "</a>";
            node_11.innerHTML = HTML_10;
        }
        //Candles 2
        if (target.id == "candles2") {
            var node_12 = document.getElementById("candlehtml2");
            var value = target.value;
            var _price = parseInt(value.substr(0, 1));
            candlePrice2 = A5.candles[_price].price;
            var HTML_11;
            HTML_11 = "";
            HTML_11 += "<a>";
            HTML_11 += " " + value.substr(1);
            HTML_11 += "</a>";
            node_12.innerHTML = HTML_11;
        }
        if (target.id == "amountCandles2") {
            var node_13 = document.getElementById("candleamounthtml2");
            var value = target.value;
            var _number = parseInt(value.substr(1, 2));
            candleAmount2 = _number;
            var HTML_12;
            HTML_12 = "";
            HTML_12 += "<a>";
            HTML_12 += " " + target.value;
            HTML_12 += "</a>";
            node_13.innerHTML = HTML_12;
        }
        //Ornaments
        if (target.id == "ornaments") {
            var node_14 = document.getElementById("ornamenthtml");
            var value = target.value;
            var _price = parseInt(value.substr(0, 1));
            ornamentPrice = A5.ornaments[_price].price;
            var HTML_13;
            HTML_13 = "";
            HTML_13 += "<a>";
            HTML_13 += " " + value.substr(1);
            HTML_13 += "</a>";
            node_14.innerHTML = HTML_13;
        }
        if (target.id == "amountOrnaments") {
            var node_15 = document.getElementById("ornamentamounthtml");
            var value = target.value;
            var _number = parseInt(value.substr(1, 2));
            ornamentAmount = _number;
            var HTML_14;
            HTML_14 = "";
            HTML_14 += "<a>";
            HTML_14 += " " + target.value;
            HTML_14 += "</a>";
            node_15.innerHTML = HTML_14;
        }
        //Ornaments 1
        if (target.id == "ornaments1") {
            var node_16 = document.getElementById("ornamenthtml1");
            var value = target.value;
            var _price = parseInt(value.substr(0, 1));
            ornamentPrice1 = A5.ornaments[_price].price;
            var HTML_15;
            HTML_15 = "";
            HTML_15 += "<a>";
            HTML_15 += " " + value.substr(1);
            HTML_15 += "</a>";
            node_16.innerHTML = HTML_15;
        }
        if (target.id == "amountOrnaments1") {
            var node_17 = document.getElementById("ornamentamounthtml1");
            var value = target.value;
            var _number = parseInt(value.substr(1, 2));
            ornamentAmount1 = _number;
            var HTML_16;
            HTML_16 = "";
            HTML_16 += "<a>";
            HTML_16 += " " + target.value;
            HTML_16 += "</a>";
            node_17.innerHTML = HTML_16;
        }
        //Ornaments 2
        if (target.id == "ornaments2") {
            var node_18 = document.getElementById("ornamenthtml2");
            var value = target.value;
            var _price = parseInt(value.substr(0, 1));
            ornamentPrice2 = A5.ornaments[_price].price;
            var HTML_17;
            HTML_17 = "";
            HTML_17 += "<a>";
            HTML_17 += " " + value.substr(1);
            HTML_17 += "</a>";
            node_18.innerHTML = HTML_17;
        }
        if (target.id == "amountOrnaments2") {
            var node_19 = document.getElementById("ornamentamounthtml2");
            var value = target.value;
            var _number = parseInt(value.substr(1, 2));
            ornamentAmount2 = _number;
            var HTML_18;
            HTML_18 = "";
            HTML_18 += "<a>";
            HTML_18 += " " + target.value;
            HTML_18 += "</a>";
            node_19.innerHTML = HTML_18;
        }
        //Lametta
        if (target.id == "Lametta") {
            var node_20 = document.getElementById("lamettahtml");
            var value = target.value;
            var _price = parseInt(value.substr(0, 1));
            lamettaPrice = A5.lametta[_price].price;
            var HTML_19;
            HTML_19 = "";
            HTML_19 += "<a>";
            HTML_19 += " " + value.substr(1);
            HTML_19 += "</a>";
            node_20.innerHTML = HTML_19;
        }
        if (target.id == "amountLametta") {
            var node_21 = document.getElementById("lamettaamounthtml");
            var value = target.value;
            var _number = parseInt(value.substr(1, 2));
            lamettaAmount = _number;
            var HTML_20;
            HTML_20 = "";
            HTML_20 += "<a>";
            HTML_20 += " " + target.value;
            HTML_20 += "</a>";
            node_21.innerHTML = HTML_20;
        }
        //Lametta 1
        if (target.id == "Lametta1") {
            var node_22 = document.getElementById("lamettahtml1");
            var value = target.value;
            var _price = parseInt(value.substr(0, 1));
            lamettaPrice1 = A5.lametta[_price].price;
            var HTML_21;
            HTML_21 = "";
            HTML_21 += "<a>";
            HTML_21 += " " + value.substr(1);
            HTML_21 += "</a>";
            node_22.innerHTML = HTML_21;
        }
        if (target.id == "amountLametta1") {
            var node_23 = document.getElementById("lamettaamounthtml1");
            var value = target.value;
            var _number = parseInt(value.substr(1, 2));
            lamettaAmount1 = _number;
            var HTML_22;
            HTML_22 = "";
            HTML_22 += "<a>";
            HTML_22 += " " + target.value;
            HTML_22 += "</a>";
            node_23.innerHTML = HTML_22;
        }
        //Lametta 2
        if (target.id == "Lametta2") {
            var node_24 = document.getElementById("lamettahtml2");
            var value = target.value;
            var _price = parseInt(value.substr(0, 1));
            lamettaPrice2 = A5.lametta[_price].price;
            var HTML_23;
            HTML_23 = "";
            HTML_23 += "<a>";
            HTML_23 += " " + value.substr(1);
            HTML_23 += "</a>";
            node_24.innerHTML = HTML_23;
        }
        if (target.id == "amountLametta2") {
            var node_25 = document.getElementById("lamettaamounthtml2");
            var value = target.value;
            var _number = parseInt(value.substr(1, 2));
            lamettaAmount2 = _number;
            var HTML_24;
            HTML_24 = "";
            HTML_24 += "<a>";
            HTML_24 += " " + target.value;
            HTML_24 += "</a>";
            node_25.innerHTML = HTML_24;
        }
        //tree stands
        if (target.name == "Radiogroup") {
            var node_26 = document.getElementById("standhtml");
            var value = target.value;
            var _price = parseInt(value.substr(0, 1));
            standPrice = A5.treeStands[_price].price;
            var HTML_25;
            HTML_25 = "";
            HTML_25 += "<a>";
            HTML_25 += " " + value.substr(1);
            HTML_25 += "</a>";
            node_26.innerHTML = HTML_25;
        }
        //delivery options
        if (target.name == "Radiogroup1") {
            var node_27 = document.getElementById("deliveryhtml");
            var value = target.value;
            var _price = parseInt(value.substr(0, 1));
            deliveryPrice = A5.delivery[_price].price;
            var HTML_26;
            HTML_26 = "";
            HTML_26 += "<a>";
            HTML_26 += " " + value.substr(1);
            HTML_26 += "</a>";
            node_27.innerHTML = HTML_26;
        }
        //Buyer information
        if (target.id == "adress") {
            var node_28 = document.getElementById("adresshtml");
            adress = target.value;
            var HTML_27;
            HTML_27 = "";
            HTML_27 += "<a>";
            HTML_27 += " " + target.value;
            HTML_27 += "</a>";
            node_28.innerHTML = HTML_27;
        }
        if (target.id == "surname") {
            var node_29 = document.getElementById("surnamehtml");
            surname = target.value;
            var HTML_28;
            HTML_28 = "";
            HTML_28 += "<a>";
            HTML_28 += " " + target.value;
            HTML_28 += "</a>";
            node_29.innerHTML = HTML_28;
        }
        if (target.id == "firstname") {
            var node_30 = document.getElementById("firstnamehtml");
            firstname = target.value;
            var HTML_29;
            HTML_29 = "";
            HTML_29 += "<a>";
            HTML_29 += " " + target.value;
            HTML_29 += "</a>";
            node_30.innerHTML = HTML_29;
        }
        if (target.id == "mail") {
            var node_31 = document.getElementById("mailhtml");
            mail = target.value;
            var HTML_30;
            HTML_30 = "";
            HTML_30 += "<a>";
            HTML_30 += " " + target.value;
            HTML_30 += "</a>";
            node_31.innerHTML = HTML_30;
        }
        if (target.id == "extra") {
            var node_32 = document.getElementById("extrahtml");
            extra = target.value;
            var HTML_31;
            HTML_31 = "";
            HTML_31 += "<a>";
            HTML_31 += " " + target.value;
            HTML_31 += "</a>";
            node_32.innerHTML = HTML_31;
        }
        //Berechnung des Gesamtpreises
        var node = document.getElementById("endpricehtml");
        var HTML;
        HTML = "";
        HTML += "<a>";
        HTML += (treePrice + (ballPrice * ballAmount) + (ballPrice1 * ballAmount1) + (ballPrice2 * ballAmount2) + (candlePrice * candleAmount) + (candlePrice1 * candleAmount1) + (candlePrice2 * candleAmount2) + (ornamentPrice * ornamentAmount) + (ornamentPrice1 * ornamentAmount1) + (ornamentPrice2 * ornamentAmount2) + (lamettaPrice * lamettaAmount) + (lamettaPrice1 * lamettaAmount1) + (lamettaPrice2 * lamettaAmount2) + standPrice + deliveryPrice);
        HTML += " €";
        HTML += "</a>";
        node.innerHTML = HTML;
    }
    //Progress. Wurde schon alles ausgewählt? Wenn ja--> nichts, wenn nein--> I'm sorry....
    function checkProgress(_event) {
        if (mail == "" || extra == "" || firstname == "" || surname == "" || adress == "" || treePrice == 0 || standPrice == 0 || ballPrice == 0 || lamettaPrice == 0 || candlePrice == 0 || deliveryPrice == 0 || ballAmount == 0 || lamettaAmount == 0 || candleAmount == 0) {
            document.getElementById("notSelectedYet").innerHTML = "I'm sorry, you need to fill out a few more things!";
        }
        else {
            document.getElementById("notSelectedYet").innerHTML = "All done, thank you for your order!";
        }
    }
})(A5 || (A5 = {}));
//# sourceMappingURL=Aufgabe5.js.map