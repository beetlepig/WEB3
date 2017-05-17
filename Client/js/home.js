
let id_usu;
let profilepic;

if(!sessionStorage.datos){
    window.location.replace('./');
} else {
    profilepic= "http://localhost:3000/Users/"+JSON.parse(sessionStorage.datos).profilePic;
    id_usu= JSON.parse(sessionStorage.datos).correo;

    console.log("entro: " +profilepic)
}

function clickbuton() {
    console.log("nigger");
    window.location.replace("/posti.html");
}


