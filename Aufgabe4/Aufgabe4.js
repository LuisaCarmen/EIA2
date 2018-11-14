var L04_FormElements;
(function (L04_FormElements) {
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
})(L04_FormElements || (L04_FormElements = {}));
//# sourceMappingURL=Aufgabe4.js.map