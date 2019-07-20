import { logging } from 'protractor';

interface Name {
    title: string;
    first: string;
    last: string;
}
interface Location {
    street: string;
    city: string;
    state: string;
    postcode:string;
}
interface Login {
    username: string;
    password: string;
}
interface DataOfBirth {
    date: Date;
    age: number;
}
interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}
export interface Contact {  
    gender:string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: DataOfBirth;
    phone: string;
    cell: string;
    picture: Picture;

}