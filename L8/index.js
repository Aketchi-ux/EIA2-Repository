"use strict";
var L8;
(function (L8) {
    window.addEventListener("load", handleload);
    let crc2;
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        Color();
    }
    function Color() {
        const gradient = crc2.createLinearGradient(0, 0, 0, 100);
        gradient.addColorStop(0, "black");
        gradient.addColorStop(0.5, "red");
        gradient.addColorStop(1.0, "gold");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 200, 100);
    }
    ;
})(L8 || (L8 = {}));
//# sourceMappingURL=index.js.map