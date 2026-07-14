// tmp.js – TMP-Erkennung

export function markTmp(file){
    return {
        file,
        status: "TMP",
        remove: true,
        type: "temp"
    };
}

