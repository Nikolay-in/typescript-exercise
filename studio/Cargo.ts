import { Payload } from "./Payload";

export class Cargo implements Payload {
    public massKg: number;
    public material: string;

    constructor(massKg: number, material: string) {
        this.massKg = massKg;
        this.material = material;
    }
}