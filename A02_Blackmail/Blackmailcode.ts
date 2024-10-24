namespace L02_Blackmail{
    console.log("start");
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let mail: HTMLElement = <HTMLElement>document.querySelector("div#mail");
        mail.addEventListener("click", placeLetter);
        document.addEventListener("keydown", Character);
        console.log(_event);
    }

    function placeLetter(_event: MouseEvent): void {
        let X: number = _event.offsetX;
        let Y: number = _event.offsetY;
    }

    function Character(_event: KeyboardEvent): void {
        
    } 
}