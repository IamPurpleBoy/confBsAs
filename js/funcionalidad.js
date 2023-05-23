function validarEmail() {
    let email=document.getElementById("email").value
    console.log(`email: ${email}`)
    if (!email.includes("@")) {
        document.getElementById("mensaje").innerHTML="El usuario debe conenter un  @ "
        document.getElementById("mensaje").className="bg-danger m-2 p-2 rounded"
    } else if(!email.includes(".")) {
        document.getElementById("mensaje").innerHTML="El usuario debe contener el . "
        document.getElementById("mensaje").className="bg-warning m-2 p-2 rounded"
        
    } else {
        document.getElementById("mensaje").innerHTML=""
        document.getElementById("mensaje").className=""

    }
}