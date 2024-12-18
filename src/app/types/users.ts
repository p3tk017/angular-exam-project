export interface User {
    _id: Object,
    name: string,
    email: string,
    password: string,
}

export interface UserForAuth {
    name: string,
    email: string,
    password: string,
    _id: string,
}