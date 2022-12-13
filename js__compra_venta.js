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
 * Botones en la parte general de Comprar / Vender
 */
vCompra.addEventListener("click", () => {
    varGDatos.removeAttribute("hidden");
    varCompraVenta.varCCAlim = 0;
    varCompraVenta.varCCTier = 0;
    varCompraVenta.varCVAlim = 0;
    varCompraVenta.varCVTier = 0;
    vOperacionValorC.value = 0;
    vAlimPoblacionC.value = 0;
    let vv = vDropdownCompra.getAttribute("hidden");
    if (vv == "hidden") {
        vDropdownVenta.setAttribute("hidden", "hidden");
        vEsplica.setAttribute("hidden", "hidden");
        vDropdownCompra.removeAttribute("hidden");
    } else {
        vDropdownCompra.setAttribute("hidden", "hidden");
    }
})
vVenta.addEventListener("click", () => {
    varGDatos.removeAttribute("hidden");
    varCompraVenta.varCCAlim = 0;
    varCompraVenta.varCCTier = 0;
    varCompraVenta.varCVAlim = 0;
    varCompraVenta.varCVTier = 0;
    vOperacionValorC.value = 0;
    vAlimPoblacionC.value = 0;
    let vv = vDropdownVenta.getAttribute("hidden");
    if (vv == "hidden") {
        vDropdownCompra.setAttribute("hidden", "hidden");
        vEsplica.setAttribute("hidden", "hidden");
        vDropdownVenta.removeAttribute("hidden");
    } else {
        vDropdownVenta.setAttribute("hidden", "hidden");
    }
})

/**
 * description
 * 
 * la parte de Compra
 * dropdownCompra1 = Alimentos (oPcion=1)
 * dropdownCompra2 = Tierra (oPcion=2)
 */

vCompraAlimento.addEventListener("click", () => {
    /*
    se Pulso en comprar Alimento   
     */
    oPcion = 1;
    limpiaBotones(oPcion);
});

vCompraTierra.addEventListener("click", () => {
    /*
    se Pulso en comprar Tierra   
     */
    oPcion = 2;
    limpiaBotones(oPcion);

});

/**
 * description
 * 
 * la parte de Venta
 * dropdownVenta1 = Alimentos (oPcion=3)
 * dropdownVenta1 = Tierra (oPcion=4)
 */

vVentaAlimento.addEventListener("click", () => {
    /*
    se Pulso en Vender Alimento   
     */
    oPcion = 3;
    limpiaBotones(oPcion);
});

vVentaTierra.addEventListener("click", () => {
    /*
    se Pulso en Vender Tierra   
     */
    oPcion = 4;

    limpiaBotones(oPcion);
});

vOperacionEnviar.addEventListener("click", () => {
    /*
    se Pulso en Enviar 
     */
    if (parseInt(vOperacionValorC.value) > 0 &&
        comparaVenta(parseInt(vOperacionValorC.value), oPcion, varCompraVenta.VCom, varCompraVenta.VVen, parseInt(vAlimPoblacionC.value)) == 0) {
        varHamurabi.Random = RnD(1, 10);
        limpiaBotones();
        switch (oPcion) {
            case 1:
                varCompraVenta.varCCAlim = parseInt(vOperacionValorC.value);
                break;
            case 2:
                varCompraVenta.varCCTier = parseInt(vOperacionValorC.value);
                break;
            case 3:
                varCompraVenta.varCVAlim = parseInt(vOperacionValorC.value);
                break;
            case 4:
                varCompraVenta.varCVTier = parseInt(vOperacionValorC.value);
                break;
            default:
                break;
        }
        vValorRec4.setAttribute("hidden", "hidden");
        vProce1[0].innerHTML = `Se esta Procesando el Pedido<br><br>
    en momentos podra continuar<br><br>
    Espere por favor....
    `;
        vProce.removeAttribute("hidden");
        varGDatos.setAttribute("hidden", "hidden");
        setTimeout(() => {
            limpiaBotones(0);
            //!  AQUI VA EL FINAL  EL PEDIRPASAR.JS
            if (varHamurabi.CantAños == varHamurabi.Etapa) {
                varGeneral.setAttribute("hidden", " ");
                varDetalleC.removeAttribute("hidden");
                BtnPasar.removeAttribute("hidden");
            };
            Estado();
            varBotonesDown.removeAttribute("hidden");
            setTimeout(() => {
                nNivel.EjecutarRnd();
                varCompraVenta.VVen = nNivel.RnDVenta;
                varCompraVenta.VCom = nNivel.RnDCompra;
                muestraRND(varCompraVenta.VVen, varCompraVenta.VCom);

            }, 500);
        }, 1500);
        /*
          Parte donde es Menor o Igual a Cero
        */
    } else if (parseInt(vOperacionValorC.value) <= 0) {
        vValorRec4.setAttribute("hidden", "hidden");
        vProce1[0].innerHTML = `<div class="ErrorMenor0">Se ingreso mal<br><br>
        Cantidad es igual o menor a Cero (0)<br><br>
        Espere por favor....</div>
        `;
        limpiaBotones(0);
        varGDatos.setAttribute("hidden", "hidden");
        vProce.removeAttribute("hidden");
        setTimeout(() => {
            limpiaBotones(oPcion);
            // varBotonesDown.removeAttribute("hidden");
        }, 2000);
    } else if (comparaVenta(parseInt(vOperacionValorC.value), oPcion, varCompraVenta.VCom, varCompraVenta.VVen, parseInt(vAlimPoblacionC.value)) == 2) {
        /*
          Parte donde sale que no podes Vender lo que no Tenes Alimento
        */
        vValorRec4.setAttribute("hidden", "hidden");
        vProce1[0].innerHTML = `<div class="ErrorMenor0">Se ingreso mal<br><br>
          No tenes Suficiente para la Venta Alimento<br><br>
          Espere por favor....</div>
          `;
        limpiaBotones(0);
        varGDatos.setAttribute("hidden", "hidden");
        vProce.removeAttribute("hidden");
        setTimeout(() => {
            limpiaBotones(oPcion);
        }, 2000);
    } else if (comparaVenta(parseInt(vOperacionValorC.value), oPcion, varCompraVenta.VCom, varCompraVenta.VVen, parseInt(vAlimPoblacionC.value)) == 4) {
        /*
          Parte donde sale que no podes Vender lo que no Tenes Alimento
        */
        vValorRec4.setAttribute("hidden", "hidden");
        vProce1[0].innerHTML = `<div class="ErrorMenor0">Se ingreso mal<br><br>
          No pusiste Alimento para la Pablacion<br><br>
          Espere por favor....</div>
          `;
        limpiaBotones(0);
        varGDatos.setAttribute("hidden", "hidden");
        vProce.removeAttribute("hidden");
        setTimeout(() => {
            limpiaBotones(oPcion);
        }, 2000);
    } else if (comparaVenta(parseInt(vOperacionValorC.value), oPcion, varCompraVenta.VCom, varCompraVenta.VVen, parseInt(vAlimPoblacionC.value)) == 3) {
        /*
          Parte donde sale que no podes Vender lo que no Tenes Tierra
        */
        vValorRec4.setAttribute("hidden", "hidden");
        vProce1[0].innerHTML = `<div class="ErrorMenor0">Se ingreso mal<br><br>
          No tenes Suficiente para la Venta Tierra<br><br>
          Espere por favor....</div>
          `;
        limpiaBotones(0);
        varGDatos.setAttribute("hidden", "hidden");
        vProce.removeAttribute("hidden");
        setTimeout(() => {
            limpiaBotones(oPcion);
        }, 2000);
    } else if (comparaVenta(parseInt(vOperacionValorC.value), oPcion, varCompraVenta.VCom, varCompraVenta.VVen, parseInt(vAlimPoblacionC.value)) == 1) {
        /*
          Parte donde sale que no podes Comprarlo que no Tenes
        */
        let a = parseInt(varHamurabi.Dinero / varCompraVenta.VCom);
        vValorRec4.setAttribute("hidden", "hidden");
        vProce1[0].innerHTML = `<div class="ErrorMenor0">Se ingreso mal<br><br>
          No tenes Suficiente para la Compra<br>
          El Valor Mayor es ${a} recuerde que siempre se recomienda quedarse con algo de Dinero<br>
          Espere por favor....</div>
          `;
        limpiaBotones(0);
        varGDatos.setAttribute("hidden", "hidden");
        vProce.removeAttribute("hidden");
        setTimeout(() => {
            limpiaBotones(oPcion);
        }, 2000);
    }
});

vOperacionCancelar.addEventListener("click", () => {
    /*
    se Pulso en Cancelar
     */
    limpiaBotones();
    vValorRec4.setAttribute("hidden", "hidden");
    vProce1[0].innerHTML = `Se esta Cancelando estaopcion<br><br>
    en momentos podra continuar<br><br>
    Espere por favor....
    `;
    vProce.removeAttribute("hidden");
    varGDatos.setAttribute("hidden", "hidden");
    setTimeout(() => {
        vOperacionValorC.value = 0;
        limpiaBotones(0);
        varBotonesDown.removeAttribute("hidden");
    }, 1000);
});


/**
 * description
 * 
 * funcion que limpia los botones de Compra y Venta del Sub menu
 */
function limpiaBotones(oPcionoPcion) {
    vDropdownVenta.setAttribute("hidden", "hidden");
    vDropdownCompra.setAttribute("hidden", "hidden");
    varBotonesDown.setAttribute("hidden", "hidden");
    varOp1.setAttribute("hidden", "hidden");
    varOp2.setAttribute("hidden", "hidden");
    varOp3.setAttribute("hidden", "hidden");
    varOp4.setAttribute("hidden", "hidden");
    vOperacionEnviar.setAttribute("hidden", "hidden");
    vOperacionCancelar.setAttribute("hidden", "hidden");
    vOperacionValor.setAttribute("hidden", "hidden");
    vAlimPoblacion.setAttribute("hidden", "hidden");
    vProce.setAttribute("hidden", "hidden");
    vValorRec4.setAttribute("hidden", "hidden");
    varAlimPoblacion.setAttribute("hidden", "hidden");
    switch (oPcionoPcion) {
        case 1:
            varOp1.removeAttribute("hidden");
            vOperacionEnviar.removeAttribute("hidden");
            vOperacionCancelar.removeAttribute("hidden");
            varGDatos.removeAttribute("hidden");
            vValorRec4.removeAttribute("hidden");
            vAlimPoblacion.removeAttribute("hidden");
            vOperacionValor.removeAttribute("hidden");
            break;
        case 2:
            varOp2.removeAttribute("hidden");
            vOperacionEnviar.removeAttribute("hidden");
            vOperacionCancelar.removeAttribute("hidden");
            varGDatos.removeAttribute("hidden");
            vValorRec4.removeAttribute("hidden");
            vAlimPoblacion.removeAttribute("hidden");
            vOperacionValor.removeAttribute("hidden");
            break;
        case 3:
            varOp3.removeAttribute("hidden");
            vOperacionEnviar.removeAttribute("hidden");
            vOperacionCancelar.removeAttribute("hidden");
            varGDatos.removeAttribute("hidden");
            vValorRec4.removeAttribute("hidden");
            vAlimPoblacion.removeAttribute("hidden");
            vOperacionValor.removeAttribute("hidden");
            break;
        case 4:
            varOp4.removeAttribute("hidden");
            vOperacionEnviar.removeAttribute("hidden");
            vOperacionCancelar.removeAttribute("hidden");
            varGDatos.removeAttribute("hidden");
            vValorRec4.removeAttribute("hidden");
            vAlimPoblacion.removeAttribute("hidden");
            vOperacionValor.removeAttribute("hidden");
            break;

        default:
            varGDatos.removeAttribute("hidden");
            break;
    }

}