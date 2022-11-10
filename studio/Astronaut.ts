import { Payload } from "./Payload";

export class Astronaut implements Payload {
    public massKg: number;
    public readonly name: string;

    constructor(massKg: number, name: string) {
        this.massKg = massKg;
        this.name = name;
    }
}