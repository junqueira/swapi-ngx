import { Record } from 'immutable';
import { ErrorApi } from './error-api';

const ErrorGenericoRecord = Record({
    _body: "",
    ok: false,
    status: 0,
    statusText: "",
    type: 0,
    url: ""
});

export interface IErrorGenerico {
    _body?: string;
    ok?: boolean;
    status?: number;
    statusText?: string;
    type?: number;
    url?: string;
}

export class ErrorGenerico extends ErrorGenericoRecord implements IErrorGenerico {
    _body?: string;
    ok?: boolean;
    status?: number;
    statusText?: string;
    type?: number;
    url?: string;
    constructor(i: IErrorGenerico) {
        super(i);
    }
}
