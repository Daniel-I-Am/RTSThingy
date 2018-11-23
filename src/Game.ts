class Game {
    private canvas: HTMLCanvasElement;

    public constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    }
}

const game = new Game(<HTMLCanvasElement>document.getElementById("canvas"));