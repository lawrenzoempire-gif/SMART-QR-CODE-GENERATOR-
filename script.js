function genarateQR(){
    const link = document.
    getElementById("link").value;

    const qr = document.
    getElementById("qrcode");

    const download = document.
    getElementById("download");

    if (!link) return alert("Enter a link first");

    qr.innerHTML ="";
    qr.className ="show";

    new QRCode(qr, link);

    download.style.display ="block"
}

function downloadQR() {
    const img = document.
    querySelector("#qrcode img");

    const link = document.
    createElement ("a");

    link. href =img.src;
    link.download = "qrcode.png";
    link.click();

}
