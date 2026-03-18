function downloadFile(type) {
    let filePath = "";

    if (type === "exe") {
        filePath = "files/app.exe";
    } else if (type === "apk") {
        filePath = "files/app.apk";
    }

    // Création d’un lien temporaire
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}