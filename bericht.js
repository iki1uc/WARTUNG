// bericht.js – Globaler Wartungsbericht

import { scanSystems } from "./scan.js";
import { markError } from "./fehler.js";
import { markTmp } from "./tmp.js";

export function wartungsBericht(){

    const systems = scanSystems();

    const fehler = [
        markError("LEGO/old_core.js"),
        markError("GO/tmp_scan.js"),
        markError("CLOCK/time_old.js")
    ];

    const tmp = [
        markTmp("LE/tmp"),
        markTmp("RIZ/tmp"),
        markTmp("TET/tmp")
    ];

    return {
        systems,
        fehler,
        tmp,
        status: "WARTUNG-AKTIV"
    };
}

