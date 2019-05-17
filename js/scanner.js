import QrScanner from './qr-scanner.min.js';
QrScanner.WORKER_PATH = './js/qr-scanner-worker.min.js';
const video = document.getElementById('qr-video');
const camQrResult = document.getElementById('cam-qr-result');
function setResult(label, result) {
label.textContent = result;
openPage(result);
};

// ####### Web Cam Scanning #######
const scanner = new QrScanner(video, result => setResult(camQrResult, result));
scanner.start();

// ###### Opens the webpage #######
function openPage(result){
window.open(result, "_self");
}