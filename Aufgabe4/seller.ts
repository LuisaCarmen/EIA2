/*
Aufgabe: Aufgabe 4
Name: Luisa Neininger
Matrikel: 259314 
Datum: 15.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/




namespace A4 {
    
export interface Products {
    name: string;
    price: number;
}
    
    export let christmasTree: Products[] = [ {name: "White Spruce,", price: 49.99}, {name: "Serbian Spruce,", price: 49.99}, {name: "Colorado Blue Spruce,", price: 49.99}, {name: "Scots Pine,", price: 69.99}, {name: "White Pine,", price: 69.99}, {name: "Balsam Fir,", price: 59.99}, {name: "Fraser Fir,", price: 59.99}, {name: "Douglas Fir,", price: 59.99}];
    export let christmasBalls: Products[] = [{name: "Select your balls,", price: 0}, {name: "red,", price: 7.99}, {name: "blue,", price: 7.99}, {name: "green,", price: 7.99}, {name: "gold,", price: 9.99}, {name: "silver,", price: 9.99}, {name: "white,", price: 7.99}];
    export let candles: Products[] = [{name: "Select your candles,", price: 0}, {name: "red,", price: 4.99}, {name: "blue,", price: 4.99}, {name: "green,", price: 4.99}, {name: "gold,", price: 5.99}, {name: "silver,", price: 5.99}, {name: "white,", price: 3.99}];
    export let lametta: Products[] = [{name: "Select your lametta,", price: 0}, {name: "red,", price: 1.99}, {name: "blue,", price: 1.99}, {name: "green,", price: 1.99}, {name: "gold,", price: 2.99}, {name: "silver,", price: 2.99}, {name: "white,", price: 0.99}];
    export let treeStands: Products[] = [{name: "none", price: 0}, {name: "green,", price: 10.99}, {name: "brown,", price: 10.99}, {name: "white,", price: 10.99}, {name: "gold,", price: 13.99}, {name: "silver,", price: 13.99}];
    export let delivery: Products[] = [ {name: "Express(next day delivery)", price: 59.99}, {name: "Fast(arrives within 2-3 days)", price: 40.99}, {name: "Standard(arrives within a week)", price: 29.99}];
 
}