document.getElementById("close-button").onclick = function () {
    document.getElementById("image-modal-container").style.display = "none";
}

function viewModalImage(image_name) {
    document.getElementById("modal-image").src = image_name;
    document.getElementById("image-modal-container").style.display = "block";
}