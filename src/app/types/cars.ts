import { Driver } from "./drivers";

export interface Car {
    _id: string,
    number: number,
    manufacturer: string,
    model: string,
    driver1: Driver,
    driver2: Driver,
    imageUrl: string,
    owner: string
}