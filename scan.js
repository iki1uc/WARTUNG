// scan.js – System-Scanner

export const SYSTEMS = [
    "LE",
    "LEGO",
    "GO",
    "CLOCK",
    "TET",
    "RIZ",
    "HOME",
    "lage",
    "octa²",
    "octa³",
    "698869",
    "SET",
    "IN",
    "MROR",
    "3TH",
    "RUN8",
    "O12",
    "SYS",
    "TEM",
    "ID",
    "OP",
    "3hit90",
    "SETUP",
    "ROOT"
];

export function scanSystems(){
    return SYSTEMS.map(name => ({
        name,
        status: "SCAN",
        error: false,
        tmp: false
    }));
}
