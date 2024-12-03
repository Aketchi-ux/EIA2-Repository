namespace L8 {

    window.addEventListener("load", handleload);
    let crc2: CanvasRenderingContext2D;

    function handleload(_event:Event): void{
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if(!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        Color();
    }
    function Color(): void {
        const gradient = crc2.createLinearGradient(0, 0, 0, 100);
        gradient.addColorStop(0,"black");
        gradient.addColorStop(0.5, "red");
        gradient.addColorStop(1.0, "gold");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 200, 100);
    };
    
}