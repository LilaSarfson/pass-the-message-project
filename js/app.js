// Tu código aquí

let form = document.forms["messages"];
// let form = document.querySelector("form");

form.addEventListener('submit', function (e) {
    console.log("Información sobre el objeto event: ", e)
    e.preventDefault() // Curioso sobre lo que hace esto? Mira como se comporta el formulario cuando haces clic en "Enviar" si esta línea está comentada. 

    let infoCaja = e.target.elements["message"].value;
    // let infoCaja = document.forms["messages"].elements["message"].value; alternativa a la línea 10
    // let infoCaja = document.querySelector(#message);

    console.log("Hemos hecho clic en el botón de submit!", infoCaja)

    let retornoPalabra = document.querySelector(".message-content");
    retornoPalabra.textContent = infoCaja;

    if (infoCaja == "") {
        let enterValue = document.querySelector("h5");
        enterValue.classList.remove("feedback");

        setTimeout(delete1, 2000);
        function delete1() {
            enterValue.classList.add("feedback");
        }

    }
    else {
        // textContent es una propiedad común en todos los Nodos HTML que nos permite obtener y/o actualizar la información textual entre los 'tags' del HTML <h4>hello world</h4>
        document.querySelector(".message-content").textContent = infoCaja;
    }


    return;
})
