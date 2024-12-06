namespace Vogelhaus{

    window.addEventListener("load", handleload);
    let crc2: CanvasRenderingContext2D;

    function handleload(_event:Event): void{
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if(!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        Cloud();
    }

    function Cloud(): void {
        const gradient = crc2.createLinearGradient( 0, 0, 0, 100);
        gradient.addColorStop(0,"grey");
        crc2.fillStyle = gradient;
        crc2.fillRect( 250, 75, 250, 100);
    }

}