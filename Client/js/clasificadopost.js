let request = new XMLHttpRequest();

//request.addEventListener("progress", updateProgress);
request.addEventListener("load", transferComplete);
request.addEventListener("error", transferFailed);
request.addEventListener("abort", transferCanceled);

function transferComplete(evt) {
    console.log("The transfer is complete.");
    if(evt.target.status===200){
        window.location.replace("./home.html")
    } else {
        window.alert("ha ocurrido un error");
    }
}

function transferFailed(evt) {
    console.log("An error occurred while transferring the file.");
}

function transferCanceled(evt) {
    console.log("The transfer has been canceled by the user.");
}

document.getElementById("contactin").value=JSON.parse(sessionStorage.datos).correo;

document.getElementById("formulario").addEventListener("submit",function (e) {
    e.preventDefault();
    let formito= new FormData(document.getElementById("formulario"));
    formito.set("id_usuario", JSON.parse(sessionStorage.datos).correo);
    request.open("POST", document.getElementById("formulario").action);
    request.send(formito);
});