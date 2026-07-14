
// fehler.js – Fehler-Markierung

export function markError(file){
    return {
        file,
        status: "ERROR",
        fixable: true,
        type: "system"
    };
}
