function generateQR() {
    const link = document.getElementById("link").value;
    const qr = document.getElementById("qrcode");
    const download = document.getElementById("download");

    if (!link) {
        alert("Enter a link first");
        return;
    }

    qr.innerHTML = "";
    qr.className = "show";

    new QRCode(qr, {
        text: link,
        width: 200,
        height: 200
    });

    download.style.display = "block";
}

function downloadQR() {
    const img = document.querySelector("#qrcode img");

    if (!img) {
        alert("Generate a QR code first");
        return;
    }

    const link = document.createElement("a");

    link.href = img.src;
    link.download = "qrcode.png";
    link.click();
}