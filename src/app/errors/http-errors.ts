import { ErrorGenerico } from "../models/error-generico";
import { isNullOrUndefined } from "util";
import { ErrorApi } from "../models/error-api";
import { ModalService } from "../globals/modal.service";
import { Injectable } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";

@Injectable()
export class HttpErrors {
    //private translatePipe: TranslatePipe = new TranslatePipe()
    constructor(
        private modalService: ModalService
    ) { }

    verifyErrorModal(errorGenerico: ErrorGenerico) {
        if (isNullOrUndefined(errorGenerico.get('_body')) || errorGenerico.get('_body') == "") {
            this.modalService.exibeModalErroApi(new ErrorApi({
                error: "Internal server error",
                message: "An error happened. Contact a service center."
            }));
        } else {
            this.modalService.exibeModalErroApi(new ErrorApi(JSON.parse(errorGenerico.get('_body'))));
        }
    }
}
