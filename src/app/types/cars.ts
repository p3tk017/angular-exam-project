import { Driver } from "./drivers";

export interface Car {
    _id: string,
    number: number;
    manufacturer: string;
    model: string;
    imageUrl: string;
    driver1: {
        name: string;
        age: number;
        nationality: string;
    };
    driver2: {
        name: string;
        age: number;
        nationality: string;
    };
    owner: {_id: string};
}