"use strict";
var L02_Blackmail;
(function (L02_Blackmail) {
    console.log("start");
    let pickedCharacter = "S";
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let div1 = document.querySelector("div#mail");
        div1.addEventListener("click", placeLetter);
        document.addEventListener("keydown", Character);
        console.log(_event);
    }
    function placeLetter(_event) {
        let X = _event.offsetX;
        let Y = _event.offsetY;
        let div1 = _event.target;
        let letter = document.createElement("span");
        div1.appendChild(letter);
        letter.textContent = pickedCharacter;
        letter.style.left = X + "px";
        letter.style.top = Y + "px";
    }
    function Character(_event) {
        pickedCharacter = _event.key;
    }
})(L02_Blackmail || (L02_Blackmail = {}));
//# sourceMappingURL=Blackmailcode.js.map