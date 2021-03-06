/*
Aufgabe: Aufgabe 5
Name: Luisa Neininger
Matrikel: 259314 
Datum: 24.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/




namespace A7 {


    document.addEventListener("DOMContentLoaded", createAllProducts);
    document.addEventListener("DOMContentLoaded", changedMind);
    document.addEventListener("DOMContentLoaded", init);

    function changedMind(_event: Event): void {
        let fieldset: HTMLElement = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }

    let treePrice: number = 0;
    let ballPrice: number = 0;
    let ballPrice1: number = 0;
    let ballPrice2: number = 0;
    let ballAmount: number = 0;
    let ballAmount1: number = 0;
    let ballAmount2: number = 0;
    let candlePrice: number = 0;
    let candlePrice1: number = 0;
    let candlePrice2: number = 0;
    let candleAmount: number = 0;
    let candleAmount1: number = 0;
    let candleAmount2: number = 0;
    let ornamentPrice: number = 0;
    let ornamentPrice1: number = 0;
    let ornamentPrice2: number = 0;
    let ornamentAmount: number = 0;
    let ornamentAmount1: number = 0;
    let ornamentAmount2: number = 0;
    let lamettaPrice: number = 0;
    let lamettaPrice1: number = 0;
    let lamettaPrice2: number = 0;
    let lamettaAmount: number = 0;
    let lamettaAmount1: number = 0;
    let lamettaAmount2: number = 0;
    let standPrice: number = 0;
    let deliveryPrice: number = 0;
    let firstname: string = "";
    let surname: string = "";
    let adress: string = "";
    let mail: string = "";
    let extra: string = "";

    let address: string = "https://eia2-18.herokuapp.com";


    //main function!!
    function createAllProducts(): void {

        document.getElementById("button").addEventListener("click", checkProgress);
        let node: HTMLElement = document.getElementById("fieldset");

        let HTML: string;

        //Create Trees

        HTML += "<fieldset>";
        HTML += "<legend>Pick your tree</legend>";
        HTML += "<select name='Christmas Tree' id='picktree'>";
        for (let arrayNumber: number = 0; arrayNumber < christmasTree.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + christmasTree[arrayNumber].name + " " + christmasTree[arrayNumber].price + " €'>" + christmasTree[arrayNumber].name + " " + christmasTree[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";

        //Create christmas balls
        HTML += "<fieldset>";
        HTML += "<legend>Christmas balls</legend>";
        HTML += "<p>Main Color:</p>";
        HTML += "<select name='Christmas Balls' id='balls'>";
        for (let arrayNumber: number = 0; arrayNumber < christmasBalls.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + christmasBalls[arrayNumber].name + " " + christmasBalls[arrayNumber].price + " €'>" + christmasBalls[arrayNumber].name + " " + christmasBalls[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount Balls' id='amountBalls'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";

        //Create christmas balls 1
        HTML += "<p>Additional Color 1:</p>";
        HTML += "<select name='Additional Balls 1' id='balls1'>";
        for (let arrayNumber: number = 0; arrayNumber < christmasBalls.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + christmasBalls[arrayNumber].name + " " + christmasBalls[arrayNumber].price + " €'>" + christmasBalls[arrayNumber].name + " " + christmasBalls[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount Balls 1' id='amountBalls1'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";

        //Create christmas balls 2
        HTML += "<p>Additional Color 2:</p>";
        HTML += "<select name='Additional Balls 2' id='balls2'>";
        for (let arrayNumber: number = 0; arrayNumber < christmasBalls.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + christmasBalls[arrayNumber].name + " " + christmasBalls[arrayNumber].price + " €'>" + christmasBalls[arrayNumber].name + " " + christmasBalls[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount Balls 2' id='amountBalls2'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {
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
        for (let arrayNumber: number = 0; arrayNumber < candles.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + candles[arrayNumber].name + " " + candles[arrayNumber].price + " €'>" + candles[arrayNumber].name + " " + candles[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount candles' id='amountCandles'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";

        //Create candles 1
        HTML += "<p>Additional Color 1:</p>";
        HTML += "<select name='Additional candles 1' id='candles1'>";
        for (let arrayNumber: number = 0; arrayNumber < candles.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + candles[arrayNumber].name + " " + candles[arrayNumber].price + " €'>" + candles[arrayNumber].name + " " + candles[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount Candles 1' id='amountCandles1'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";

        //Create candles 2
        HTML += "<p>Additional Color 2:</p>";
        HTML += "<select name='Additional candles 2' id='candles2'>";
        for (let arrayNumber: number = 0; arrayNumber < candles.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + candles[arrayNumber].name + " " + candles[arrayNumber].price + " €'>" + candles[arrayNumber].name + " " + candles[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount Candles 2' id='amountCandles2'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {
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
        for (let arrayNumber: number = 0; arrayNumber < ornaments.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + ornaments[arrayNumber].name + " " + ornaments[arrayNumber].price + " €'>" + ornaments[arrayNumber].name + " " + ornaments[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount Ornament' id='amountOrnaments'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";

        //Create ornaments 1
        HTML += "<p>Additional Color 1:</p>";
        HTML += "<select name='Additional ornament 1' id='ornaments1'>";
        for (let arrayNumber: number = 0; arrayNumber < ornaments.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + ornaments[arrayNumber].name + " " + ornaments[arrayNumber].price + " €'>" + ornaments[arrayNumber].name + " " + ornaments[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount Ornament 1' id='amountOrnaments1'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";

        //Create ornaments 2
        HTML += "<p>Additional Color 2:</p>";
        HTML += "<select name='Additional ornament 2' id='ornaments2'>";
        for (let arrayNumber: number = 0; arrayNumber < ornaments.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + ornaments[arrayNumber].name + " " + ornaments[arrayNumber].price + " €'>" + ornaments[arrayNumber].name + " " + ornaments[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount ornament 2' id='amountOrnaments2'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {
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
        for (let arrayNumber: number = 0; arrayNumber < lametta.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + lametta[arrayNumber].name + " " + lametta[arrayNumber].price + " €'>" + lametta[arrayNumber].name + " " + lametta[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount lametta' id='amountLametta'>";
        for (let amountNumber: number = 0; amountNumber < 10; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "<br>";

        //Create lametta 1
        HTML += "<p>Additional Color 1:</p>";
        HTML += "<select name='Additional lametta 1' id='Lametta1'>";
        for (let arrayNumber: number = 0; arrayNumber < lametta.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + lametta[arrayNumber].name + " " + lametta[arrayNumber].price + " €'>" + lametta[arrayNumber].name + " " + lametta[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount Lametta 1' id='amountLametta1'>";
        for (let amountNumber: number = 0; amountNumber < 10; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";

        //Create lametta 2
        HTML += "<p>Additional Color 2:</p>";
        HTML += "<select name='Additional lametta 2' id='Lametta2'>";
        for (let arrayNumber: number = 0; arrayNumber < lametta.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + lametta[arrayNumber].name + " " + lametta[arrayNumber].price + " €'>" + lametta[arrayNumber].name + " " + lametta[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<select name='Amount Lametta 2' id='amountLametta2'>";
        for (let amountNumber: number = 0; amountNumber < 10; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";


        //Create tree stands
        HTML += "<fieldset>"
        HTML += "<legend>Tree Stand</legend>";
        HTML += "<select name='Tree Stand' id='pickstand'>";
        for (let arrayNumber: number = 0; arrayNumber < treeStands.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + treeStands[arrayNumber].name + " " + treeStands[arrayNumber].price + " €'>" + treeStands[arrayNumber].name + " " + treeStands[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>"
        HTML += "<br>";


        //delivery options
        HTML += "<fieldset>"
        HTML += "<legend>Delivery Options</legend>";
        HTML += "<select name='delivery' id='deliveryoptions'>";
        for (let arrayNumber: number = 0; arrayNumber < delivery.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + delivery[arrayNumber].name + " " + delivery[arrayNumber].price + " €'>" + delivery[arrayNumber].name + " " + delivery[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>"
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
    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        //trees
        if (target.id == "picktree") {
            let node: HTMLElement = document.getElementById("treeshtml");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            treePrice = christmasTree[priceIndex].price;
            //console.log(priceTree);
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //balls
        if (target.id == "balls") {
            let node: HTMLElement = document.getElementById("ballhtml");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            ballPrice = christmasBalls[_price].price;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "amountBalls") {
            let node: HTMLElement = document.getElementById("ballamounthtml");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            ballAmount = _number;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Additional Balls 1
        if (target.id == "balls1") {
            let node: HTMLElement = document.getElementById("ballhtml1");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            ballPrice1 = christmasBalls[_price].price;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountBalls1") {
            let node: HTMLElement = document.getElementById("ballamounthtml1");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            ballAmount1 = _number;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Additional Balls 2
        if (target.id == "balls2") {
            let node: HTMLElement = document.getElementById("ballhtml2");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            ballPrice2 = christmasBalls[_price].price;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "amountBalls2") {
            let node: HTMLElement = document.getElementById("ballamounthtml2");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            ballAmount2 = _number;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        //Kerzen
        if (target.id == "candles") {
            let node: HTMLElement = document.getElementById("candlehtml");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            candlePrice = candles[_price].price;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountCandles") {
            let node: HTMLElement = document.getElementById("candleamounthtml");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            candleAmount = _number;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        //Candles 1
        if (target.id == "candles1") {
            let node: HTMLElement = document.getElementById("candlehtml1");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            candlePrice1 = candles[_price].price;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "amountCandles1") {
            let node: HTMLElement = document.getElementById("candleamounthtml1");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            candleAmount1 = _number;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Candles 2
        if (target.id == "candles2") {
            let node: HTMLElement = document.getElementById("candlehtml2");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            candlePrice2 = candles[_price].price;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "amountCandles2") {
            let node: HTMLElement = document.getElementById("candleamounthtml2");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            candleAmount2 = _number;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Ornaments
        if (target.id == "ornaments") {
            let node: HTMLElement = document.getElementById("ornamenthtml");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            ornamentPrice = ornaments[_price].price;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "amountOrnaments") {
            let node: HTMLElement = document.getElementById("ornamentamounthtml");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            ornamentAmount = _number;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        //Ornaments 1
        if (target.id == "ornaments1") {
            let node: HTMLElement = document.getElementById("ornamenthtml1");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            ornamentPrice1 = ornaments[_price].price;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "amountOrnaments1") {
            let node: HTMLElement = document.getElementById("ornamentamounthtml1");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            ornamentAmount1 = _number;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Ornaments 2
        if (target.id == "ornaments2") {
            let node: HTMLElement = document.getElementById("ornamenthtml2");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            ornamentPrice2 = ornaments[_price].price;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "amountOrnaments2") {
            let node: HTMLElement = document.getElementById("ornamentamounthtml2");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            ornamentAmount2 = _number;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Lametta
        if (target.id == "Lametta") {
            let node: HTMLElement = document.getElementById("lamettahtml");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            lamettaPrice = lametta[_price].price;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "amountLametta") {
            let node: HTMLElement = document.getElementById("lamettaamounthtml");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            lamettaAmount = _number;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        //Lametta 1
        if (target.id == "Lametta1") {
            let node: HTMLElement = document.getElementById("lamettahtml1");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            lamettaPrice1 = lametta[_price].price;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "amountLametta1") {
            let node: HTMLElement = document.getElementById("lamettaamounthtml1");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            lamettaAmount1 = _number;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Lametta 2
        if (target.id == "Lametta2") {
            let node: HTMLElement = document.getElementById("lamettahtml2");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            lamettaPrice2 = lametta[_price].price;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "amountLametta2") {
            let node: HTMLElement = document.getElementById("lamettaamounthtml2");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            lamettaAmount2 = _number;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //tree stands
        if (target.id == "pickstand") {
            let node: HTMLElement = document.getElementById("standhtml");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            standPrice = treeStands[_price].price;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //delivery options
        if (target.id == "deliveryoptions") {
            let node: HTMLElement = document.getElementById("deliveryhtml");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            deliveryPrice = delivery[_price].price;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Buyer information
        if (target.id == "adress") {
            let node: HTMLElement = document.getElementById("adresshtml");
            adress = target.value;
            let
                HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "surname") {
            let node: HTMLElement = document.getElementById("surnamehtml");
            surname = target.value;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "firstname") {
            let node: HTMLElement = document.getElementById("firstnamehtml");
            firstname = target.value;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "mail") {
            let node: HTMLElement = document.getElementById("mailhtml");
            mail = target.value;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "extra") {
            let node: HTMLElement = document.getElementById("extrahtml");
            extra = target.value;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        //Berechnung des Gesamtpreises
        let node: HTMLElement = document.getElementById("endpricehtml");
        let HTML: string;
        HTML = "";
        HTML += "<a>";
        HTML += (treePrice + (ballPrice * ballAmount) + (ballPrice1 * ballAmount1) + (ballPrice2 * ballAmount2) + (candlePrice * candleAmount) + (candlePrice1 * candleAmount1) + (candlePrice2 * candleAmount2) + (ornamentPrice * ornamentAmount) + (ornamentPrice1 * ornamentAmount1) + (ornamentPrice2 * ornamentAmount2) + (lamettaPrice * lamettaAmount) + (lamettaPrice1 * lamettaAmount1) + (lamettaPrice2 * lamettaAmount2) + standPrice + deliveryPrice);
        HTML += " €";
        HTML += "</a>";
        node.innerHTML = HTML;
    }
    //Progress. Wurde schon alles ausgewählt? Wenn ja--> nichts, wenn nein--> I'm sorry....
    function checkProgress(_event: Event): void {
        if (mail == "" || extra == "" || firstname == "" || surname == "" || adress == "" || treePrice == 0 || standPrice == 0 || ballPrice == 0 || lamettaPrice == 0 || candlePrice == 0 || deliveryPrice == 0 || ballAmount == 0 || lamettaAmount == 0 || candleAmount == 0) {
            document.getElementById("notSelectedYet").innerHTML = "I'm sorry, you need to fill out a few more things!";
        }

        else {
            document.getElementById("notSelectedYet").innerHTML = "All done, thank you for your order!";
        }
    }
    //Aufgabe 7.2

    function init(_event: Event): void {
        document.getElementById("button").addEventListener("click", checkProgress);
        setupAsyncForm();
    }
    function setupAsyncForm(): void {
        let button: Element = document.querySelector("[type=button]");
        button.addEventListener("click", handleClickOnAsync);
    }
    function handleClickOnAsync(_event: Event): void {
        let checkout: string[] = [];
        let items: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");


        //trees 
        let pickedTree: HTMLOptionElement = <HTMLOptionElement>document.getElementById("picktree");
        let color1: string = "Your order:    Tree: " + pickedTree.value.substr(1);
        sendRequestWithCustomData(color1);
        checkout.push(color1);

        //balls
        let pickedBalls: HTMLOptionElement = <HTMLOptionElement>document.getElementById("balls");
        let color2: string = "Balls: " + pickedBalls.value.substr(1);
        sendRequestWithCustomData(color2);
        checkout.push(color2);
        let pickedBallsAmount: HTMLOptionElement = <HTMLOptionElement>document.getElementById("amountBalls");
        let color3: string = "Ball amount: " + pickedBallsAmount.value.substr(1);
        sendRequestWithCustomData(color3);
        checkout.push(color3);
        let pickedBalls1: HTMLOptionElement = <HTMLOptionElement>document.getElementById("balls1");
        let color4: string = "Additional Balls 1: " + pickedBalls1.value.substr(1);
        sendRequestWithCustomData(color4);
        checkout.push(color4);
        let pickedBallsAmount1: HTMLOptionElement = <HTMLOptionElement>document.getElementById("amountBalls1");
        let color5: string = "Balls amount 1: " + pickedBallsAmount1.value.substr(1);
        sendRequestWithCustomData(color5);
        checkout.push(color5);
        let pickedBalls2: HTMLOptionElement = <HTMLOptionElement>document.getElementById("balls2");
        let color6: string = "Additional Balls 2: " + pickedBalls2.value.substr(1);
        sendRequestWithCustomData(color6);
        checkout.push(color6);
        let pickedBallsAmount2: HTMLOptionElement = <HTMLOptionElement>document.getElementById("amountBalls2");
        let color7: string = "Balls amount 2: " + pickedBallsAmount2.value.substr(1);
        sendRequestWithCustomData(color7);
        checkout.push(color7);
        //candles
        let pickedCandles: HTMLOptionElement = <HTMLOptionElement>document.getElementById("candles");
        let color8: string = "Candles: " + pickedCandles.value.substr(1);
        sendRequestWithCustomData(color8);
        checkout.push(color8);
        let pickedCandlesAmount: HTMLOptionElement = <HTMLOptionElement>document.getElementById("amountCandles");
        let color9: string = "Candles amount: " + pickedCandlesAmount.value.substr(1);
        sendRequestWithCustomData(color9);
        checkout.push(color9);
        let pickedCandles1: HTMLOptionElement = <HTMLOptionElement>document.getElementById("candles1");
        let color10: string = "Additional Candles 1: " + pickedCandles1.value.substr(1);
        sendRequestWithCustomData(color10);
        checkout.push(color10);
        let pickedCandlesAmount1: HTMLOptionElement = <HTMLOptionElement>document.getElementById("amountCandles1");
        let color11: string = "Candles amount 1: " + pickedCandlesAmount1.value.substr(1);
        sendRequestWithCustomData(color11);
        checkout.push(color11);
        let pickedCandles2: HTMLOptionElement = <HTMLOptionElement>document.getElementById("candles2");
        let color12: string = "Additional Candles 2: " + pickedCandles2.value.substr(1);
        sendRequestWithCustomData(color12);
        checkout.push(color12);
        let pickedCandlesAmount2: HTMLOptionElement = <HTMLOptionElement>document.getElementById("amountCandles2");
        let color13: string = "Candles amount 2: " + pickedCandlesAmount2.value.substr(1);
        sendRequestWithCustomData(color13);
        checkout.push(color13);

        //ornaments
        let pickedOrnaments: HTMLOptionElement = <HTMLOptionElement>document.getElementById("ornaments");
        let color14: string = "Ornaments: " + pickedOrnaments.value.substr(1);
        sendRequestWithCustomData(color14);
        checkout.push(color14);
        let pickedOrnamentsAmount: HTMLOptionElement = <HTMLOptionElement>document.getElementById("amountOrnaments");
        let color15: string = "Ornaments amount: " + pickedOrnamentsAmount.value.substr(1);
        sendRequestWithCustomData(color15);
        checkout.push(color15);
        let pickedOrnaments1: HTMLOptionElement = <HTMLOptionElement>document.getElementById("ornaments1");
        let color16: string = "Additional Ornaments 1: " + pickedOrnaments1.value.substr(1);
        sendRequestWithCustomData(color16);
        checkout.push(color16);
        let pickedOrnamentsAmount1: HTMLOptionElement = <HTMLOptionElement>document.getElementById("amountOrnaments1");
        let color17: string = "Ornaments amount 1: " + pickedOrnamentsAmount1.value.substr(1);
        sendRequestWithCustomData(color17);
        checkout.push(color17);
        let pickedOrnaments2: HTMLOptionElement = <HTMLOptionElement>document.getElementById("ornaments2");
        let color18: string = "Additional Ornaments 2: " + pickedOrnaments2.value.substr(1);
        sendRequestWithCustomData(color18);
        checkout.push(color18);
        let pickedOrnamentsAmount2: HTMLOptionElement = <HTMLOptionElement>document.getElementById("amountOrnaments2");
        let color19: string = "Ornaments amount 2: " + pickedOrnamentsAmount2.value.substr(1);
        sendRequestWithCustomData(color19);
        checkout.push(color19);

        //lametta
        let pickedLametta: HTMLOptionElement = <HTMLOptionElement>document.getElementById("Lametta");
        let color20: string = "Lametta: " + pickedLametta.value.substr(1);
        sendRequestWithCustomData(color20);
        checkout.push(color20);
        let pickedLamettaAmount: HTMLOptionElement = <HTMLOptionElement>document.getElementById("amountLametta");
        let color21: string = "Lametta amount: " + pickedLamettaAmount.value.substr(1);
        sendRequestWithCustomData(color21);
        checkout.push(color21);
        let pickedLametta1: HTMLOptionElement = <HTMLOptionElement>document.getElementById("Lametta1");
        let color22: string = "Additional Lametta 1: " + pickedLametta1.value.substr(1);
        sendRequestWithCustomData(color22);
        checkout.push(color22);
        let pickedLamettaAmount1: HTMLOptionElement = <HTMLOptionElement>document.getElementById("amountLametta1");
        let color23: string = "Lametta amount 1: " + pickedLamettaAmount1.value.substr(1);
        sendRequestWithCustomData(color23);
        checkout.push(color23);
        let pickedLametta2: HTMLOptionElement = <HTMLOptionElement>document.getElementById("Lametta2");
        let color24: string = "Additional Lametta 2: " + pickedLametta2.value.substr(1);
        sendRequestWithCustomData(color24);
        checkout.push(color24);
        let pickedLamettaAmount2: HTMLOptionElement = <HTMLOptionElement>document.getElementById("amountLametta2");
        let color25: string = "Lametta amount 2: " + pickedLamettaAmount2.value.substr(1);
        sendRequestWithCustomData(color25);
        checkout.push(color25);

        //stand
        let pickedStand: HTMLOptionElement = <HTMLOptionElement>document.getElementById("pickstand");
        let color26: string = "Stand: " + pickedStand.value.substr(1);
        sendRequestWithCustomData(color26);
        checkout.push(color26);

        //adress
        let pickedAdress: HTMLOptionElement = <HTMLOptionElement>document.getElementById("adress");
        let color28: string = "Adress: " + pickedAdress.value.substr(1);
        sendRequestWithCustomData(color28);
        checkout.push(color28);

        //surname
        let pickedSurname: HTMLOptionElement = <HTMLOptionElement>document.getElementById("surname");
        let color29: string = "Surname: " + pickedSurname.value.substr(1);
        sendRequestWithCustomData(color29);
        checkout.push(color29);

        //name
        let pickedName: HTMLOptionElement = <HTMLOptionElement>document.getElementById("firstname");
        let color30: string = "Name: " + pickedName.value.substr(1);
        sendRequestWithCustomData(color30);
        checkout.push(color30);

        //mail
        let pickedMail: HTMLOptionElement = <HTMLOptionElement>document.getElementById("mail");
        let color31: string = "Mail: " + pickedMail.value.substr(1);
        sendRequestWithCustomData(color31);
        checkout.push(color31);

        //extra
        let pickedExtra: HTMLOptionElement = <HTMLOptionElement>document.getElementById("extra");
        let color32: string = "Extra: " + pickedExtra.value.substr(1);
        sendRequestWithCustomData(color32);
        checkout.push(color32);

        for (let i: number = 0; i < items.length; i++) {
            let article: HTMLInputElement = items[i];
            if (Number(article.value) > 0) {
                let color: string = article.name + " " + article.value + " " + article.title + " " + (Number(article.getAttribute("price")) * Number(article.value)) + " Euro";
                sendRequestWithCustomData(color);
                checkout.push(color);

            }
        }

        alert(checkout);

    }

    function sendRequestWithCustomData(_color: string): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?article=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }



}
