import { Driver } from "./drivers";

export interface Car {
    number: number,
    manufacturer: string,
    model: string,
    driver1: Driver,
    driver2: Driver,
    owner: string
}