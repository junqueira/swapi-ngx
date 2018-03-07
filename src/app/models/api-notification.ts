export interface IApiNotification {
    id?: number;
    level?: string;
    message?: string;
    status?: string;
    subject?: string;
}

export class ApiNotification implements IApiNotification {
    id?: number = 0;
    level?: string = "";
    message?: string = "";
    status?: string = "";
    subject?: string = "";

    constructor(i: IApiNotification) {
        this.id = i.id;
        this.level = i.level;
        this.message = i.message;
        this.status = i.status;
        this.subject = i.subject;
    }
}