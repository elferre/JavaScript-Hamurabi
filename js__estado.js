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
 *  Compra
 * dropdownCompra1 = Alimentos (oPcion=1)
 * dropdownCompra2 = Tierra (oPcion=2)
 * 
 * la parte de Venta
 * dropdownVenta1 = Alimentos (oPcion=3)
 * dropdownVenta1 = Tierra (oPcion=4)
 */

function Estado(Valor) {
    if (Valor == null && Valor == undefined) {
        if (valorInicio1 == true) {
            varEstadoHamurabi.SubirDatos(varHamurabi.Poblacion, Number(vAlimPoblacionC.value));
            varEstadoHamurabi.RealizarCalculos();
            varMuertes = RnD(1, nNivel.RnDnivelMuertes) + varEstadoHamurabi.Matar;
            varNacimientos = RnD(1, nNivel.RnDnivelNacimientos) + varEstadoHamurabi.Nacer;
            varHamurabi.Sumar(varNacimientos, varCompraVenta.varCCAlim, varCompraVenta.varCCTier);
            varHamurabi.Restar(varMuertes, varCompraVenta.varCVAlim, varCompraVenta.varCVTier);
            // * VENDI
            let a, b, c;
            a = (varCompraVenta.VVen * varCompraVenta.varCVAlim) + (varCompraVenta.VVen * varCompraVenta.varCVTier);
            a = Number(a.toFixed(2));
            varHamurabi.Sumar(null, null, null, a);
            // * COMPRE
            b = (varCompraVenta.VCom * varCompraVenta.varCCAlim) + (varCompraVenta.VCom * varCompraVenta.varCCTier);
            b = Number(b.toFixed(2));
            varHamurabi.Restar(null, null, null, b);
            varHamurabi.SumarEtapa();
        } else {
            valorInicio1 = true;
        }
        varHamurabi.Alimento -= Number(vAlimPoblacionC.value)
        varHamurabi.CargarEstadistica(
            //        Nac, Mue, Pob, Ali, Tie, Din, VVen, VCom
            // let varCCAlim,varCCTier,varCVAlim,varCVTier
            varNacimientos,
            varMuertes,
            varHamurabi.Poblacion,
            varHamurabi.Alimento,
            varHamurabi.Tierra,
            Number(varHamurabi.Dinero.toFixed(2)),
            Number(varCompraVenta.VVen),
            Number(varCompraVenta.VCom),
            varCompraVenta.varCCAlim, varCompraVenta.varCCTier, varCompraVenta.varCVAlim, varCompraVenta.varCVTier,
            Number(vAlimPoblacionC.value)
        );
    }
    varHamurabi.CargarDensidad();
    CargaFondoPantalla();
    varDetalle.innerHTML = "";
    c = varHamurabi.Dinero;
    c = c.toFixed(2);
    varDetalle.innerHTML = `
            Poblacion : <b>${varHamurabi.Poblacion}</b> U</br>
            Dinero : <b>${c}</b> $</br>
            Alimento : <b>${varHamurabi.Alimento }</b> kg</br>
            Tierra : <b>${addCommas(varHamurabi.Tierra)}</b> m2</br></br>
            Densidad Poblacion : <b>${addCommas(varHamurabi.Densidad.toFixed(2))}</b> U</br>
            Cant. Muertes : <b class="rojo">${varMuertes}</b> U</br>
            Cant. Nacimientos : <b class="verde">${varNacimientos}</b> U</br></br>
            Etapa Actual : <b>${varHamurabi.Etapa} de ${varHamurabi.CantAños}</b> </br>
            Valor Canje : <b>${varHamurabi.Random} </b> </br>
            `;

}