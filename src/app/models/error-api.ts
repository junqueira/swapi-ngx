import { Record } from 'immutable';

const ErrorApiRecord = Record({
    timestamp: 0,
    status: 0,
    error: "",
    exception: "",
    message: null,
    path: ""
});

export interface IErrorApi {
    timestamp?: number;
    status?: number;
    error?: string;
    exception?: string;
    message?: any;
    path?: string;
}

export class ErrorApi extends ErrorApiRecord implements IErrorApi {
    timestamp?: number;
    status?: number;
    error?: string;
    exception?: string;
    message?: any;
    path?: string; 

    constructor(i: IErrorApi) {
        super(i);
    }
}
