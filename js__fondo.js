/**========================================================================
 * ?                                ABOUT
 * @author         :  Edgardo Ferreyra
 * @email          :  ed20052006@hotmail.com
 * @repo           :  
 * @createdOn      :  2022-05-16
 * @description    :  
 *========================================================================**/

/*
  Cambia de Dibujo de Fondo segun la Densidad estado.js
*/
CargaFondoPantalla = () => {
    if (varHamurabi.Alimento < varEstadoHamurabi.MinAlimento) {
        //!  AQUI VA EL FINAL POR QUEDARTE SIN ALIMENTO
        CierraMal();
        varTodoIMG.setAttribute("class", "Todo5");
    } else if (varHamurabi.Poblacion < varEstadoHamurabi.MinPoblacion) {
        //!  AQUI VA EL FINAL POR MATAR A MUCHOS
        CierraMal();
        varTodoIMG.setAttribute("class", "Todo4");
    } else if (varHamurabi.Densidad < varHamurabi.DensidadFoto.Todo2) {
        varTodoIMG.setAttribute("class", "Todo2");
    } else if (varHamurabi.Densidad > varHamurabi.DensidadFoto.Todo3) {
        varTodoIMG.setAttribute("class", "Todo3");
    } else if (varHamurabi.Densidad > varHamurabi.DensidadFoto.Todo1) {
        varTodoIMG.setAttribute("class", "Todo1");
    }
};

CierraMal = () => {
    varHamurabi.Etapa--;
    varHamurabi.CantAños = varHamurabi.Etapa;
    varHamurabi.LlegoFinal = true;
    limpiaBotones(0);
    varGeneral.setAttribute("hidden", " ");
    varDetalleC.removeAttribute("hidden");
    BtnPasar.removeAttribute("hidden");
};