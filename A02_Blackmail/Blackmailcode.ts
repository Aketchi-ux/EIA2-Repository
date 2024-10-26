namespace L02_Blackmail{
    console.log("start");
    let pickedCharacter: string ="S";
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let div1: HTMLElement = <HTMLElement>document.querySelector("div#mail");
        div1.addEventListener("click", placeLetter);
        document.addEventListener("keydown", Character);
        console.log(_event);
    }

    function placeLetter(_event: MouseEvent): void {
        let X: number = _event.offsetX;
        let Y: number = _event.offsetY;

        let div1: HTMLElement = <HTMLElement>_event.target;
        let letter : HTMLSpanElement = document.createElement("span");
        div1.appendChild(letter);

        letter.textContent = pickedCharacter;
        letter.style.left = X + "px";
        letter.style.top = Y + "px";

    }

    function Character(_event: KeyboardEvent): void {
        pickedCharacter = _event.key;
    } 
}