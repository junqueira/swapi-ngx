export interface IUser {
    last_login?: string;
    name?: string;
    email?: string;
    username?: string;
    birthdate?: string;
    created_at?: string;
}

export class User implements IUser {
    last_login?: string = "";
    name?: string = "";
    email?: string = "";
    username?: string = "";
    birthdate?: string = "";
    created_at?: string = "";

    constructor(i: IUser) {
        this.last_login = i.last_login;
        this.name = i.name;
        this.email = i.email;
        this.username = i.username;
        this.birthdate = i.birthdate;
        this.created_at = i.created_at;
    }
    
}
