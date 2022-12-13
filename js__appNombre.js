/**========================================================================
 * ?                                ABOUT
 * @author         :  Edgardo Ferreyra
 * @email          :  ed20052006@hotmail.com
 * @repo           :  
 * @createdOn      :  14/05/2022
 * @description    :  
 *========================================================================**/
/**
 * description
 * 
 * Usado para la Carga de Nombres Solo Una Ves
 */
varNombresG.innerHTML = "";

let valorInicio = varInicio[0].getAttribute("value");
const varGeneral = document.querySelector(".general");
const varMuestraDiv = document.querySelector(".muestraNombre");
//placeholder="Una sola palabra, en minúsculas"
varNombreG.setAttribute("placeholder", "Minimo 4 letras")

if (valorInicio == "false") {
    valorInicio1 = false;
    /*
      Solo alinicio carga los valores desde global.js
    */
    varMuertes = 0;
    varNacimientos = 0;

    varMuestraDiv.removeAttribute("hidden");

    /*
        Boton para ingresar el Nombre
    */
    vBoton.addEventListener("click", () => {
        nNivel.Inicia(Number(varNivelC[0].value));
        nNivel.ColorNivel();

        let varTempNombre = varNombre[0].value;
        varHamurabi.CantAños = parseInt(varAnos[0].value);

        varHamurabi.Nombre = varTempNombre.trim();

        /*
          Tiene que contener 4 o mas caracteres
        */
        if (varHamurabi.Nombre.length <= 4) {
            vBoton.setAttribute("hidden", "hidden");
            const tiempo_1 = verMensajes.ShowNombreAño(`
            Largo de el nombre es menor a 5 cararteres
            `, "rojo", 3000, "DI1");
            setTimeout(() => vBoton.removeAttribute("hidden"), tiempo_1);
        }
        if (varHamurabi.CantAños < minAños) {
            vBoton.setAttribute("hidden", "hidden");
            const tiempo_1 = verMensajes.ShowNombreAño(`
        Cantidad minima de Años para jugar son ${minAños}
        `, "rojo", 3000, "DI2");
            setTimeout(() => vBoton.removeAttribute("hidden"), tiempo_1);
        }
        if (varHamurabi.Nombre.length > 4 && varHamurabi.CantAños >= minAños) {
            vValorRec4.setAttribute("hidden", "hidden");
            let bb1 = vBoton.getAttribute("value");
            vBoton.setAttribute("value", "Procesando....");
            varInicio[0].setAttribute("value", "true");
            setTimeout(() => {
                vBoton.setAttribute("value", bb1);
                varInicio[0].setAttribute("value", "true");
                varGeneral.removeAttribute("hidden");
                varMuestraDiv.setAttribute("hidden", "");
                varNombresG.innerHTML = `Nombre : <br><b>${varNombre[0].value}</b><br><br>
                Nivel Seleccionado : <br><b>${nNivel.TextNivel}</b><br>`;
                varGDatos.removeAttribute("hidden");
                Estado();
                nNivel.EjecutarRnd();
                varHamurabi.NivelJuego = nNivel.Nivel;
                varEstadoHamurabi.NivelJuego = varHamurabi.NivelJuego;
                varCompraVenta.VVen = nNivel.RnDVenta;
                varCompraVenta.VCom = nNivel.RnDCompra;
                muestraRND(varCompraVenta.VVen, varCompraVenta.VCom);
            }, 2000);
        }
    })
}

varRandom = RnD(1, 10);