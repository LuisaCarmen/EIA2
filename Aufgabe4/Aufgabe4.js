var Aufgabe4;
(function (Aufgabe4) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        var fieldsets = document.getElementsByTagName("fieldset");
        for (var i = 0; i < fieldsets.length; i++) {
            var fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function handleChange(_event) {
        console.log(_event);
        //*/
        var target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Aufgabe4.js.map