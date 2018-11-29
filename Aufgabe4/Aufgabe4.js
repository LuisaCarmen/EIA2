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
        let fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    let treePrice = 0;
    let ballPrice = 0;
    let candlePrice = 0;
    let ornamentPrice = 0;
    let lamettaPrice = 0;
    let standPrice = 0;
    let deliveryPrice = 0;
    let ballAmount = 0;
    let candleAmount = 0;
    let ornamentAmount = 0;
    let lamettaAmount = 0;
    let firstname = "";
    let surname = "";
    let adress = "";
    let mail = "";
    let extra = "";
    //main function!!
    function createAllProducts() {
        document.getElementById("button").addEventListener("click", checkProgress);
        let node = document.getElementById("fieldset");
        let HTML;
        //Create Trees
        HTML += "<fieldset>";
        HTML += "<legend>Design your tree</legend>";
        HTML += "<select name='Select' id='trees'  >";
        for (let arrayNumber = 0; arrayNumber < A4.christmasTree.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A4.christmasTree[arrayNumber].name + " " + A4.christmasTree[arrayNumber].price + " €'>" + A4.christmasTree[arrayNumber].name + " " + A4.christmasTree[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        //Create christmas balls
        HTML += "<fieldset>";
        HTML += "<legend>Christmas balls (Pack of 5)</legend>";
        HTML += "<select name='Select' id='balls'>";
        for (let arrayNumber = 0; arrayNumber < A4.christmasBalls.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A4.christmasBalls[arrayNumber].name + " " + A4.christmasBalls[arrayNumber].price + " €'>" + A4.christmasBalls[arrayNumber].name + " " + A4.christmasBalls[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Select' id='amountBalls'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create candles
        HTML += "<fieldset>";
        HTML += "<legend>Candles (Pack of 10)</legend>";
        HTML += "<select name='Select' id='candles'>";
        for (let arrayNumber = 0; arrayNumber < A4.candles.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A4.candles[arrayNumber].name + " " + A4.candles[arrayNumber].price + " €'>" + A4.candles[arrayNumber].name + " " + A4.candles[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Select' id='amountCandles'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create ornaments
        HTML += "<fieldset>";
        HTML += "<legend>Ornaments</legend>";
        HTML += "<select name='Select' id='ornaments'>";
        for (let arrayNumber = 0; arrayNumber < A4.ornaments.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A4.ornaments[arrayNumber].name + " " + A4.ornaments[arrayNumber].price + " €'>" + A4.ornaments[arrayNumber].name + " " + A4.ornaments[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Select' id='amountOrnaments'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create lametta
        HTML += "<fieldset>";
        HTML += "<legend>Lametta (200g pack)</legend>";
        HTML += "<select name='Select' id='Lametta'>";
        for (let arrayNumber = 0; arrayNumber < A4.lametta.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + A4.lametta[arrayNumber].name + " " + A4.lametta[arrayNumber].price + " €'>" + A4.lametta[arrayNumber].name + " " + A4.lametta[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Select' id='amountLametta'>";
        for (let amountNumber = 0; amountNumber < 10; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        //Create tree stands
        HTML += "<fieldset>";
        HTML += "<legend>Tree stand</legend>";
        for (let arrayNumber = 0; arrayNumber < A4.treeStands.length; arrayNumber++) {
            HTML += "<input type='checkbox' name='Radiogroup' value='" + arrayNumber + A4.treeStands[arrayNumber].name + " " + A4.treeStands[arrayNumber].price + " €'  id='stand" + arrayNumber + "' />";
            HTML += "<label for='check" + arrayNumber + "'>" + A4.treeStands[arrayNumber].name + " " + A4.treeStands[arrayNumber].price + " €</label>";
        }
        HTML += "</fieldset>";
        HTML += "<br>";
        //delivery options
        HTML += "<fieldset>";
        HTML += "<legend>Delivery options</legend>";
        for (let arrayNumber = 0; arrayNumber < A4.delivery.length; arrayNumber++) {
            HTML += "<input type='checkbox' name='Radiogroup1' value='" + arrayNumber + A4.delivery[arrayNumber].name + " " + A4.delivery[arrayNumber].price + " €'  id='deliveryoption" + arrayNumber + "' />";
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
        let target = _event.target;
        //trees
        if (target.id == "trees") {
            let node = document.getElementById("treeshtml");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            treePrice = A4.christmasTree[priceIndex].price;
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
            ballPrice = A4.christmasBalls[_price].price;
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
        //Kerzen
        if (target.id == "candles") {
            let node = document.getElementById("candlehtml");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            candlePrice = A4.candles[_price].price;
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
        //Ornaments
        if (target.id == "ornaments") {
            let node = document.getElementById("ornamenthtml");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            ornamentPrice = A4.ornaments[_price].price;
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
        //Lametta
        if (target.id == "Lametta") {
            let node = document.getElementById("lamettahtml");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            lamettaPrice = A4.lametta[_price].price;
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
        //tree stands
        if (target.name == "Radiogroup") {
            let node = document.getElementById("standhtml");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            standPrice = A4.treeStands[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //delivery options
        if (target.name == "Radiogroup1") {
            let node = document.getElementById("deliveryhtml");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            deliveryPrice = A4.delivery[_price].price;
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
        HTML += (treePrice + (ballPrice * ballAmount) + (candlePrice * candleAmount) + (ornamentPrice * ornamentAmount) + (lamettaPrice * lamettaAmount) + standPrice + deliveryPrice);
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
            document.getElementById("notSelectedYet").innerHTML = "";
        }
    }
})(A4 || (A4 = {}));
//# sourceMappingURL=Aufgabe4.js.map