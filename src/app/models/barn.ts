export class Barn {
    barnId: number;
    barnName: string;
    barnSize: number;
    ownerId: number;

    constructor(barnId: number, barnName: string, barnSize: number, ownerId: number) {
        this.barnId = barnId;
        this.barnName = barnName;
        this.barnSize = barnSize;
        this.ownerId = ownerId
    }
}