"use strict";
var Vogelhaus;
(function (Vogelhaus) {
    window.addEventListener("load", handleload);
    let crc2;
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        Cloud();
    }
    function Cloud() {
        const gradient = crc2.createLinearGradient(0, 0, 0, 100);
        gradient.addColorStop(0, "grey");
        crc2.fillStyle = gradient;
        crc2.fillRect(250, 75, 250, 100);
    }
})(Vogelhaus || (Vogelhaus = {}));
//# sourceMappingURL=Vogelhaus.js.map