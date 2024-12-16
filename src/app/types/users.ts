export interface User {
    _id: string,
    name: string,
    email: string,
    password: string,
}

export interface UserForAuth {
    name: string,
    email: string,
    password: string,
    _id: Object,
}