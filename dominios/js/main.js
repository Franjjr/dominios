
function procesarDatos() {
    let inputArt = document.getElementById("arti").value;
    let inputAdj = document.getElementById("adje").value;
    let inputNom = document.getElementById("nomb").value;

    let dataArrayart = inputArt.split(" ");
    let dataArrayadj = inputAdj.split(" ");
    let dataArraynom = inputNom.split(" ");

    let resultados = [];
    let com = document.getElementById("com").checked;
    let es = document.getElementById("es").checked;

    if (com == true) {
        for (let i = 0; i < dataArrayart.length; i++) {
            for (let j = 0; j < dataArrayadj.length; j++) {
                for (let k = 0; k < dataArraynom.length; k++) {
                    resultados.push(dataArrayart[i] + dataArrayadj[j] + dataArraynom[k] + ".com");
                }
            }
        }
    }
    else if (es == true) {
        for (let i = 0; i < dataArrayart.length; i++) {
            for (let j = 0; j < dataArrayadj.length; j++) {
                for (let k = 0; k < dataArraynom.length; k++) {
                    resultados.push(dataArrayart[i] + dataArrayadj[j] + dataArraynom[k] + ".es");
                }
            }
        }
    }
    else if (es == true && com == true) {
        for (let i = 0; i < dataArrayart.length; i++) {
            for (let j = 0; j < dataArrayadj.length; j++) {
                for (let k = 0; k < dataArraynom.length; k++) {
                    resultados.push(dataArrayart[i] + dataArrayadj[j] + dataArraynom[k] + ".com")
                }
            }
        }
    }
    else {
        for (let i = 0; i < dataArrayart.length; i++) {
            for (let j = 0; j < dataArrayadj.length; j++) {
                for (let k = 0; k < dataArraynom.length; k++) {
                    resultados.push(dataArrayart[i] + dataArrayadj[j] + dataArraynom[k]);
                }
            }
        }
    }
    console.log(resultados);
    document.getElementById("resultado").innerHTML = resultados.join("</br>");
}
