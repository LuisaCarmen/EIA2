/*
Aufgabe: Aufgabe 5
Name: Luisa Neininger
Matrikel: 259314
Datum: 24.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A7;
(function (A7) {
    document.addEventListener("DOMContentLoaded", createAllProducts);
    document.addEventListener("DOMContentLoaded", changedMind);
    document.addEventListener("DOMContentLoaded", init);
    function changedMind(_event) {
        let fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    let treePrice = 0;
    let ballPrice = 0;
    let ballPrice1 = 0;
    let ballPrice2 = 0;
    let ballAmount = 0;
    let ballAmount1 = 0;
    let ballAmount2 = 0;
    let candlePrice = 0;
    let candlePrice1 = 0;
    let candlePrice2 = 0;
    let candleAmount = 0;
    let candleAmount1 = 0;
    let candleAmount2 = 0;
    let ornamentPrice = 0;
    let ornamentPrice1 = 0;
    let ornamentPrice2 = 0;
    let ornamentAmount = 0;
    let ornamentAmount1 = 0;
    let ornamentAmount2 = 0;
    let lamettaPrice = 0;
    let lamettaPrice1 = 0;
    let lamettaPrice2 = 0;
    let lamettaAmount = 0;
    let lamettaAmount1 = 0;
    let lamettaAmount2 = 0;
    let standPrice = 0;
    let deliveryPrice = 0;
    let firstname = "";
    let surname = "";
    let adress = "";
    let mail = "";
    let extra = "";
    let address = "https://eia2-18.herokuapp.com";
    //main function!!
    function createAllProducts() {
        document.getElementById("button").addEventListener("click", checkProgress);
        let node = document.getElementById("fieldset");
        let HTML;
        //Create Trees
        HTML += "<fieldset>";
        HTML += "<legend>Pick your tree</legend>";
        HTML += "<select name='Christmas Tree' id='picktree'>";
        for (let arrayNumber = 0; arrayNumber < A7.christmasTree.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A7.christmasTree[arrayNumber].name + " " + A7.christmasTree[arrayNumber].price + " €'>" + A7.christmasTree[arrayNumber].name + " " + A7.christmasTree[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create christmas balls
        HTML += "<fieldset>";
        HTML += "<legend>Christmas balls</legend>";
        HTML += "<p>Main Color:</p>";
        HTML += "<select name='Christmas Balls' id='balls'>";
        for (let arrayNumber = 0; arrayNumber < A7.christmasBalls.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A7.christmasBalls[arrayNumber].name + " " + A7.christmasBalls[arrayNumber].price + " €'>" + A7.christmasBalls[arrayNumber].name + " " + A7.christmasBalls[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount Balls' id='amountBalls'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        //Create christmas balls 1
        HTML += "<p>Additional Color 1:</p>";
        HTML += "<select name='Additional Balls 1' id='balls1'>";
        for (let arrayNumber = 0; arrayNumber < A7.christmasBalls.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A7.christmasBalls[arrayNumber].name + " " + A7.christmasBalls[arrayNumber].price + " €'>" + A7.christmasBalls[arrayNumber].name + " " + A7.christmasBalls[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount Balls 1' id='amountBalls1'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        //Create christmas balls 2
        HTML += "<p>Additional Color 2:</p>";
        HTML += "<select name='Additional Balls 2' id='balls2'>";
        for (let arrayNumber = 0; arrayNumber < A7.christmasBalls.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A7.christmasBalls[arrayNumber].name + " " + A7.christmasBalls[arrayNumber].price + " €'>" + A7.christmasBalls[arrayNumber].name + " " + A7.christmasBalls[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount Balls 2' id='amountBalls2'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create candles
        HTML += "<fieldset>";
        HTML += "<legend>Candles </legend>";
        HTML += "<p>Main Color:</p>";
        HTML += "<select name='Candles' id='candles'>";
        for (let arrayNumber = 0; arrayNumber < A7.candles.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A7.candles[arrayNumber].name + " " + A7.candles[arrayNumber].price + " €'>" + A7.candles[arrayNumber].name + " " + A7.candles[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount candles' id='amountCandles'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        //Create candles 1
        HTML += "<p>Additional Color 1:</p>";
        HTML += "<select name='Additional candles 1' id='candles1'>";
        for (let arrayNumber = 0; arrayNumber < A7.candles.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A7.candles[arrayNumber].name + " " + A7.candles[arrayNumber].price + " €'>" + A7.candles[arrayNumber].name + " " + A7.candles[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount Candles 1' id='amountCandles1'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        //Create candles 2
        HTML += "<p>Additional Color 2:</p>";
        HTML += "<select name='Additional candles 2' id='candles2'>";
        for (let arrayNumber = 0; arrayNumber < A7.candles.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A7.candles[arrayNumber].name + " " + A7.candles[arrayNumber].price + " €'>" + A7.candles[arrayNumber].name + " " + A7.candles[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount Candles 2' id='amountCandles2'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create ornaments
        HTML += "<fieldset>";
        HTML += "<legend>Ornaments</legend>";
        HTML += "<p>Main Color:</p>";
        HTML += "<select name='Ornament' id='ornaments'>";
        for (let arrayNumber = 0; arrayNumber < A7.ornaments.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A7.ornaments[arrayNumber].name + " " + A7.ornaments[arrayNumber].price + " €'>" + A7.ornaments[arrayNumber].name + " " + A7.ornaments[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount Ornament' id='amountOrnaments'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        //Create ornaments 1
        HTML += "<p>Additional Color 1:</p>";
        HTML += "<select name='Additional ornament 1' id='ornaments1'>";
        for (let arrayNumber = 0; arrayNumber < A7.ornaments.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A7.ornaments[arrayNumber].name + " " + A7.ornaments[arrayNumber].price + " €'>" + A7.ornaments[arrayNumber].name + " " + A7.ornaments[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount Ornament 1' id='amountOrnaments1'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        //Create ornaments 2
        HTML += "<p>Additional Color 2:</p>";
        HTML += "<select name='Additional ornament 2' id='ornaments2'>";
        for (let arrayNumber = 0; arrayNumber < A7.ornaments.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A7.ornaments[arrayNumber].name + " " + A7.ornaments[arrayNumber].price + " €'>" + A7.ornaments[arrayNumber].name + " " + A7.ornaments[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount ornament 2' id='amountOrnaments2'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create lametta
        HTML += "<fieldset>";
        HTML += "<legend>Lametta (200g pack)</legend>";
        HTML += "<p>Main Color:</p>";
        HTML += "<select name='Lametta' id='Lametta'>";
        for (let arrayNumber = 0; arrayNumber < A7.lametta.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A7.lametta[arrayNumber].name + " " + A7.lametta[arrayNumber].price + " €'>" + A7.lametta[arrayNumber].name + " " + A7.lametta[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount lametta' id='amountLametta'>";
        for (let amountNumber = 0; amountNumber < 10; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "<br>";
        //Create lametta 1
        HTML += "<p>Additional Color 1:</p>";
        HTML += "<select name='Additional lametta 1' id='Lametta1'>";
        for (let arrayNumber = 0; arrayNumber < A7.lametta.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A7.lametta[arrayNumber].name + " " + A7.lametta[arrayNumber].price + " €'>" + A7.lametta[arrayNumber].name + " " + A7.lametta[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount Lametta 1' id='amountLametta1'>";
        for (let amountNumber = 0; amountNumber < 10; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        //Create lametta 2
        HTML += "<p>Additional Color 2:</p>";
        HTML += "<select name='Additional lametta 2' id='Lametta2'>";
        for (let arrayNumber = 0; arrayNumber < A7.lametta.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A7.lametta[arrayNumber].name + " " + A7.lametta[arrayNumber].price + " €'>" + A7.lametta[arrayNumber].name + " " + A7.lametta[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount Lametta 2' id='amountLametta2'>";
        for (let amountNumber = 0; amountNumber < 10; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create tree stands
        HTML += "<fieldset>";
        HTML += "<legend>Tree Stand</legend>";
        HTML += "<select name='Tree Stand' id='pickstand'>";
        for (let arrayNumber = 0; arrayNumber < A7.treeStands.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A7.treeStands[arrayNumber].name + " " + A7.treeStands[arrayNumber].price + " €'>" + A7.treeStands[arrayNumber].name + " " + A7.treeStands[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //delivery options
        HTML += "<fieldset>";
        HTML += "<legend>Delivery Options</legend>";
        HTML += "<select name='delivery' id='deliveryoptions'>";
        for (let arrayNumber = 0; arrayNumber < A7.delivery.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A7.delivery[arrayNumber].name + " " + A7.delivery[arrayNumber].price + " €'>" + A7.delivery[arrayNumber].name + " " + A7.delivery[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //buyer info
        HTML += "<fieldset>";
        HTML += "<legend>Buyer Information</legend>";
        HTML += "<input id='surname' type='text' name='Surname' placeholder='Surname'/>";
        HTML += "<br><br>";
        HTML += "<input id='firstname' type='text' name='Name' placeholder='Name'/>";
        HTML += "<br><br>";
        HTML += "<input id='mail' type='email' name='Mail' placeholder='E-mail'/>";
        HTML += "<br><br>";
        HTML += "<textarea id='adress' name='Adress' cols='30' rows='4' placeholder='Please enter your adress' >";
        HTML += "</textarea>";
        HTML += "<br><br>";
        HTML += "<textarea id='extra' name='Additional information' cols='30' rows='4' placeholder='Extra information for the seller' >";
        HTML += "</textarea>";
        HTML += "</fieldset>";
        node.innerHTML += HTML;
    }
    //Handle Change Funktionen  
    function handleChange(_event) {
        let target = _event.target;
        //trees
        if (target.id == "picktree") {
            let node = document.getElementById("treeshtml");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            treePrice = A7.christmasTree[priceIndex].price;
            //console.log(priceTree);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //balls
        if (target.id == "balls") {
            let node = document.getElementById("ballhtml");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            ballPrice = A7.christmasBalls[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountBalls") {
            let node = document.getElementById("ballamounthtml");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            ballAmount = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Additional Balls 1
        if (target.id == "balls1") {
            let node = document.getElementById("ballhtml1");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            ballPrice1 = A7.christmasBalls[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountBalls1") {
            let node = document.getElementById("ballamounthtml1");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            ballAmount1 = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Additional Balls 2
        if (target.id == "balls2") {
            let node = document.getElementById("ballhtml2");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            ballPrice2 = A7.christmasBalls[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountBalls2") {
            let node = document.getElementById("ballamounthtml2");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            ballAmount2 = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Kerzen
        if (target.id == "candles") {
            let node = document.getElementById("candlehtml");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            candlePrice = A7.candles[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountCandles") {
            let node = document.getElementById("candleamounthtml");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            candleAmount = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Candles 1
        if (target.id == "candles1") {
            let node = document.getElementById("candlehtml1");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            candlePrice1 = A7.candles[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountCandles1") {
            let node = document.getElementById("candleamounthtml1");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            candleAmount1 = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Candles 2
        if (target.id == "candles2") {
            let node = document.getElementById("candlehtml2");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            candlePrice2 = A7.candles[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountCandles2") {
            let node = document.getElementById("candleamounthtml2");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            candleAmount2 = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Ornaments
        if (target.id == "ornaments") {
            let node = document.getElementById("ornamenthtml");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            ornamentPrice = A7.ornaments[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountOrnaments") {
            let node = document.getElementById("ornamentamounthtml");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            ornamentAmount = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Ornaments 1
        if (target.id == "ornaments1") {
            let node = document.getElementById("ornamenthtml1");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            ornamentPrice1 = A7.ornaments[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountOrnaments1") {
            let node = document.getElementById("ornamentamounthtml1");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            ornamentAmount1 = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Ornaments 2
        if (target.id == "ornaments2") {
            let node = document.getElementById("ornamenthtml2");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            ornamentPrice2 = A7.ornaments[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountOrnaments2") {
            let node = document.getElementById("ornamentamounthtml2");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            ornamentAmount2 = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Lametta
        if (target.id == "Lametta") {
            let node = document.getElementById("lamettahtml");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            lamettaPrice = A7.lametta[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountLametta") {
            let node = document.getElementById("lamettaamounthtml");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            lamettaAmount = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Lametta 1
        if (target.id == "Lametta1") {
            let node = document.getElementById("lamettahtml1");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            lamettaPrice1 = A7.lametta[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountLametta1") {
            let node = document.getElementById("lamettaamounthtml1");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            lamettaAmount1 = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Lametta 2
        if (target.id == "Lametta2") {
            let node = document.getElementById("lamettahtml2");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            lamettaPrice2 = A7.lametta[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountLametta2") {
            let node = document.getElementById("lamettaamounthtml2");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            lamettaAmount2 = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //tree stands
        if (target.id == "pickstand") {
            let node = document.getElementById("standhtml");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            standPrice = A7.treeStands[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //delivery options
        if (target.id == "deliveryoptions") {
            let node = document.getElementById("deliveryhtml");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            deliveryPrice = A7.delivery[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Buyer information
        if (target.id == "adress") {
            let node = document.getElementById("adresshtml");
            adress = target.value;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "surname") {
            let node = document.getElementById("surnamehtml");
            surname = target.value;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "firstname") {
            let node = document.getElementById("firstnamehtml");
            firstname = target.value;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "mail") {
            let node = document.getElementById("mailhtml");
            mail = target.value;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "extra") {
            let node = document.getElementById("extrahtml");
            extra = target.value;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Berechnung des Gesamtpreises
        let node = document.getElementById("endpricehtml");
        let HTML;
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
    //Aufgabe 7.2
    function init(_event) {
        document.getElementById("button").addEventListener("click", checkProgress);
        setupAsyncForm();
    }
    function setupAsyncForm() {
        let button = document.querySelector("[type=button]");
        button.addEventListener("click", handleClickOnAsync);
    }
    function handleClickOnAsync(_event) {
        let checkout = [];
        let items = document.getElementsByTagName("input");
        //trees 
        let pickedTree = document.getElementById("picktree");
        let color1 = "Your order:    Tree: " + pickedTree.value.substr(1);
        sendRequestWithCustomData(color1);
        checkout.push(color1);
        //balls
        let pickedBalls = document.getElementById("balls");
        let color2 = "Balls: " + pickedBalls.value.substr(1);
        sendRequestWithCustomData(color2);
        checkout.push(color2);
        let pickedBallsAmount = document.getElementById("amountBalls");
        let color3 = "Ball amount: " + pickedBallsAmount.value.substr(1);
        sendRequestWithCustomData(color3);
        checkout.push(color3);
        let pickedBalls1 = document.getElementById("balls1");
        let color4 = "Additional Balls 1: " + pickedBalls1.value.substr(1);
        sendRequestWithCustomData(color4);
        checkout.push(color4);
        let pickedBallsAmount1 = document.getElementById("amountBalls1");
        let color5 = "Balls amount 1: " + pickedBallsAmount1.value.substr(1);
        sendRequestWithCustomData(color5);
        checkout.push(color5);
        let pickedBalls2 = document.getElementById("balls2");
        let color6 = "Additional Balls 2: " + pickedBalls2.value.substr(1);
        sendRequestWithCustomData(color6);
        checkout.push(color6);
        let pickedBallsAmount2 = document.getElementById("amountBalls2");
        let color7 = "Balls amount 2: " + pickedBallsAmount2.value.substr(1);
        sendRequestWithCustomData(color7);
        checkout.push(color7);
        //candles
        let pickedCandles = document.getElementById("candles");
        let color8 = "Candles: " + pickedCandles.value.substr(1);
        sendRequestWithCustomData(color8);
        checkout.push(color8);
        let pickedCandlesAmount = document.getElementById("amountCandles");
        let color9 = "Candles amount: " + pickedCandlesAmount.value.substr(1);
        sendRequestWithCustomData(color9);
        checkout.push(color9);
        let pickedCandles1 = document.getElementById("candles1");
        let color10 = "Additional Candles 1: " + pickedCandles1.value.substr(1);
        sendRequestWithCustomData(color10);
        checkout.push(color10);
        let pickedCandlesAmount1 = document.getElementById("amountCandles1");
        let color11 = "Candles amount 1: " + pickedCandlesAmount1.value.substr(1);
        sendRequestWithCustomData(color11);
        checkout.push(color11);
        let pickedCandles2 = document.getElementById("candles2");
        let color12 = "Additional Candles 2: " + pickedCandles2.value.substr(1);
        sendRequestWithCustomData(color12);
        checkout.push(color12);
        let pickedCandlesAmount2 = document.getElementById("amountCandles2");
        let color13 = "Candles amount 2: " + pickedCandlesAmount2.value.substr(1);
        sendRequestWithCustomData(color13);
        checkout.push(color13);
        //ornaments
        let pickedOrnaments = document.getElementById("ornaments");
        let color14 = "Ornaments: " + pickedOrnaments.value.substr(1);
        sendRequestWithCustomData(color14);
        checkout.push(color14);
        let pickedOrnamentsAmount = document.getElementById("amountOrnaments");
        let color15 = "Ornaments amount: " + pickedOrnamentsAmount.value.substr(1);
        sendRequestWithCustomData(color15);
        checkout.push(color15);
        let pickedOrnaments1 = document.getElementById("ornaments1");
        let color16 = "Additional Ornaments 1: " + pickedOrnaments1.value.substr(1);
        sendRequestWithCustomData(color16);
        checkout.push(color16);
        let pickedOrnamentsAmount1 = document.getElementById("amountOrnaments1");
        let color17 = "Ornaments amount 1: " + pickedOrnamentsAmount1.value.substr(1);
        sendRequestWithCustomData(color17);
        checkout.push(color17);
        let pickedOrnaments2 = document.getElementById("ornaments2");
        let color18 = "Additional Ornaments 2: " + pickedOrnaments2.value.substr(1);
        sendRequestWithCustomData(color18);
        checkout.push(color18);
        let pickedOrnamentsAmount2 = document.getElementById("amountOrnaments2");
        let color19 = "Ornaments amount 2: " + pickedOrnamentsAmount2.value.substr(1);
        sendRequestWithCustomData(color19);
        checkout.push(color19);
        //lametta
        let pickedLametta = document.getElementById("Lametta");
        let color20 = "Lametta: " + pickedLametta.value.substr(1);
        sendRequestWithCustomData(color20);
        checkout.push(color20);
        let pickedLamettaAmount = document.getElementById("amountLametta");
        let color21 = "Lametta amount: " + pickedLamettaAmount.value.substr(1);
        sendRequestWithCustomData(color21);
        checkout.push(color21);
        let pickedLametta1 = document.getElementById("Lametta1");
        let color22 = "Additional Lametta 1: " + pickedLametta1.value.substr(1);
        sendRequestWithCustomData(color22);
        checkout.push(color22);
        let pickedLamettaAmount1 = document.getElementById("amountLametta1");
        let color23 = "Lametta amount 1: " + pickedLamettaAmount1.value.substr(1);
        sendRequestWithCustomData(color23);
        checkout.push(color23);
        let pickedLametta2 = document.getElementById("Lametta2");
        let color24 = "Additional Lametta 2: " + pickedLametta2.value.substr(1);
        sendRequestWithCustomData(color24);
        checkout.push(color24);
        let pickedLamettaAmount2 = document.getElementById("amountLametta2");
        let color25 = "Lametta amount 2: " + pickedLamettaAmount2.value.substr(1);
        sendRequestWithCustomData(color25);
        checkout.push(color25);
        //stand
        let pickedStand = document.getElementById("pickstand");
        let color26 = "Stand: " + pickedStand.value.substr(1);
        sendRequestWithCustomData(color26);
        checkout.push(color26);
        //adress
        let pickedAdress = document.getElementById("adress");
        let color28 = "Adress: " + pickedAdress.value.substr(1);
        sendRequestWithCustomData(color28);
        checkout.push(color28);
        //surname
        let pickedSurname = document.getElementById("surname");
        let color29 = "Surname: " + pickedSurname.value.substr(1);
        sendRequestWithCustomData(color29);
        checkout.push(color29);
        //name
        let pickedName = document.getElementById("firstname");
        let color30 = "Name: " + pickedName.value.substr(1);
        sendRequestWithCustomData(color30);
        checkout.push(color30);
        //mail
        let pickedMail = document.getElementById("mail");
        let color31 = "Mail: " + pickedMail.value.substr(1);
        sendRequestWithCustomData(color31);
        checkout.push(color31);
        //extra
        let pickedExtra = document.getElementById("extra");
        let color32 = "Extra: " + pickedExtra.value.substr(1);
        sendRequestWithCustomData(color32);
        checkout.push(color32);
        for (let i = 0; i < items.length; i++) {
            let article = items[i];
            if (Number(article.value) > 0) {
                let color = article.name + " " + article.value + " " + article.title + " " + (Number(article.getAttribute("price")) * Number(article.value)) + " Euro";
                sendRequestWithCustomData(color);
                checkout.push(color);
            }
        }
        alert(checkout);
    }
    function sendRequestWithCustomData(_color) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?article=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
})(A7 || (A7 = {}));
//# sourceMappingURL=Aufgabe7.js.map