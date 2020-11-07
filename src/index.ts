class AimBooster {
    private squares: number;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor(
        squares: number = 25,
        strokeStyle: string = '#636e72',
        lineWidth: number = 0.1
    ) {
        this.canvas = this.getCanvas();
        this.ctx = this.getContext();
        this.ctx.strokeStyle = strokeStyle;
        this.ctx.lineWidth = lineWidth;
        this.squares = squares;
        this.initGame();
    }

    getCanvas(): HTMLCanvasElement {
        const canvas: HTMLCanvasElement = document.getElementsByClassName('game')[0] as HTMLCanvasElement;
        if(!canvas) {
            throw new Error('Canvas not found!');
        }
        return canvas;
    }

    getContext(): CanvasRenderingContext2D {
        const ctx: CanvasRenderingContext2D | null = this.canvas.getContext('2d');
        if(!ctx) {
            throw new Error('2d context not supported!');
        }
        return ctx;
    }

    initGame(): void {
        // Get rid of blurry canvas bg
        this.ctx.translate(0.5, 0.5);
        const canvasWidth: number = this.canvas.width;
        const sqrW: number = canvasWidth / this.squares;
        for(let i = 0; i < this.squares; i++) {
            for(let j = 0; j < this.squares; j++) {
                this.ctx.strokeRect(i*sqrW, j*sqrW, sqrW, sqrW);
            }
        }
    }
}