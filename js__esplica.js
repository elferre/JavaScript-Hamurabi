/**========================================================================
 * ?                                ABOUT
 * @author         :  Edgardo Ferreyra
 * @email          :  ed20052006@hotmail.com
 * @repo           :  
 * @createdOn      :  14/05/2022
 * @description    :  
 *========================================================================**/
/*
 * varEexplica3 = Visualmente es <<
 * varEexplica4 = Visualmente es <
 * varEexplica5 = Visualmente es 1
 * varEexplica6 = Visualmente es 2
 * varEexplica7 = Visualmente es 3
 * varEexplica8 = Visualmente es 4
 * varEexplica9 = Visualmente es 4
 * varEexplica10 = Visualmente es 4
 * varEexplica11 = Visualmente es >
 * varEexplica12 = Visualmente es >>
 */

varEexplica3.addEventListener("click", () => {
    explicaTodo.InicialPagina();
    visualizaPagBotones(explicaTodo.Pagina);
    varExplica[0].innerHTML = explicaTodo.innerHTML(explicaTodo.Pagina);
});
varEexplica4.addEventListener("click", () => {
    let restaPagina = explicaTodo.Pagina - 1;
    if (restaPagina == (explicaTodo.PrimeraPagina - 1)) { restaPagina = explicaTodo.PrimeraPagina; }
    explicaTodo.CargaPagina(restaPagina);
    visualizaPagBotones(explicaTodo.Pagina);
    varExplica[0].innerHTML = explicaTodo.innerHTML(explicaTodo.Pagina);
});
varEexplica5.addEventListener("click", () => {
    explicaTodo.CargaPagina(1);
    visualizaPagBotones(explicaTodo.Pagina);
    varExplica[0].innerHTML = explicaTodo.innerHTML(explicaTodo.Pagina);
});
varEexplica6.addEventListener("click", () => {
    explicaTodo.CargaPagina(2);
    visualizaPagBotones(explicaTodo.Pagina);
    varExplica[0].innerHTML = explicaTodo.innerHTML(explicaTodo.Pagina);
});
varEexplica7.addEventListener("click", () => {
    explicaTodo.CargaPagina(3);
    visualizaPagBotones(explicaTodo.Pagina);
    varExplica[0].innerHTML = explicaTodo.innerHTML(explicaTodo.Pagina);
});
varEexplica8.addEventListener("click", () => {
    explicaTodo.CargaPagina(4);
    visualizaPagBotones(explicaTodo.Pagina);
    varExplica[0].innerHTML = explicaTodo.innerHTML(explicaTodo.Pagina);
});
varEexplica9.addEventListener("click", () => {
    explicaTodo.CargaPagina(5);
    visualizaPagBotones(explicaTodo.Pagina);
    varExplica[0].innerHTML = explicaTodo.innerHTML(explicaTodo.Pagina);
});
varEexplica10.addEventListener("click", () => {
    explicaTodo.CargaPagina(6);
    visualizaPagBotones(explicaTodo.Pagina);
    varExplica[0].innerHTML = explicaTodo.innerHTML(explicaTodo.Pagina);
});
varEexplica11.addEventListener("click", () => {
    let restaPagina = explicaTodo.Pagina + 1;
    if (restaPagina == (explicaTodo.UltimaPagina + 1)) { restaPagina = explicaTodo.UltimaPagina; }
    explicaTodo.CargaPagina(restaPagina);
    visualizaPagBotones(explicaTodo.Pagina);
    varExplica[0].innerHTML = explicaTodo.innerHTML(explicaTodo.Pagina);
});
varEexplica12.addEventListener("click", () => {
    explicaTodo.FinalPagina();
    visualizaPagBotones(explicaTodo.Pagina);
    varExplica[0].innerHTML = explicaTodo.innerHTML(explicaTodo.Pagina);
});


vExplica.addEventListener("click", () => {
    explicaTodo.InicialPagina();
    visualizaPagBotones(explicaTodo.Pagina);
    let vv = vEsplica.getAttribute("hidden");
    if (vv == "hidden") {
        varGDatos.setAttribute("hidden", "hidden");
        vDropdownCompra.setAttribute("hidden", "hidden");
        vDropdownVenta.setAttribute("hidden", "hidden");
        vEsplica.removeAttribute("hidden");
    } else {
        vEsplica.setAttribute("hidden", "hidden");
        varGDatos.removeAttribute("hidden");
    }

    varExplica[0].innerHTML = explicaTodo.innerHTML(explicaTodo.Pagina);
})

class ClassExplica {
    constructor() {
        this.Pagina = 0;
        this.PrimeraPagina = 1;
        this.UltimaPagina = 6;
    }
    CargaPagina(NumPagina) {
        this.Pagina = Number(NumPagina);
    }
    InicialPagina() { this.Pagina = this.PrimeraPagina; }
    FinalPagina() { this.Pagina = this.UltimaPagina; }
    innerHTML(NumPagina) {
        const RetPag1 = `
        Se trata de un Dictador (Hamurabi) que tiene que:<br>
        1) no obstante tiene que seleccionar si quiere Comprar <br>
        o Vender.<br><br>
        1.1) si se da en Comprar se da la posibilidad de que <br>
        compre Alimento o Tierra dicho valor se multiplica por el <br>
        Valor de Canje de COMPRA y ese es el dinero que<br>
        se descuenta al mismo tiempo se aumenta la Tierra<br>
        o Alimento que Vendio<br>
        <br>
        `;
        const RetPag2 = `
        1.2) si se da en Vender se da la posibilidad de que <br>
        venda Alimento o Tierra dicho valor se multiplica por el <br>
        Valor de Canje de VENTA y ese es el dinero sumado<br>
        al actual al mismo tiempo se disminuye la Tierra <br>
        o Alimento que Vendio<br><br>
        2) Alimentar a la Poblacion, la misma es decontada de <br>
        Alimento Actual<br>
        <br>
        `;
        const RetPag3 = `
        3) en consecuencia se debe tener en cuenta que<br>
        puede haber Nacimientos o Muertes.<br>
        <br>
        las mismas se dan en relacion <b>Poblacion</b> y <b>Alimento para Poblacion</b><br>
        <br>
        <br>
        `;
        const RetPag4 = `
        En base al Nivel seleccionado ( ${nNivel.TextNivel} )<br><br>
        Las Muertes estan en relacion a ${nNivel.RnDnivelMuertes}<br>
        Los Nacimientos estan en relacion a ${nNivel.RnDnivelNacimientos}<br>
        <br>Valor de Canje <br><br>
        <table  class="VDesdeHastaTable">
        <tr><td></td><td class="VDesdeHasta">Desde</td><td class="VDesdeHasta">Hasta</td></tr>
        <tr><td>Compra</td><td class="VDesdeHasta">${nNivel.ValorRnDCompra[0]}</td><td class="VDesdeHasta">${nNivel.ValorRnDCompra[1]}</td></tr>
        <tr><td>Venta</td><td class="VDesdeHasta">${nNivel.ValorRnDVenta[0]}</td><td class="VDesdeHasta">${nNivel.ValorRnDVenta[1]}</td></tr>
        </table>
        <br>
        `;
        let numeroAL1 = numeroALetras(varEstadoHamurabi.MinAlimento, {
            plural: ' ',
            singular: ' ',
            centPlural: ' ',
            centSingular: ' '
        });
        let numeroAL2 = numeroALetras(varEstadoHamurabi.MinPoblacion, {
            plural: ' ',
            singular: ' ',
            centPlural: ' ',
            centSingular: ' '
        });
        numeroAL2 = numeroAL2.toLowerCase();
        numeroAL1 = numeroAL1.toLowerCase();
        const RetPag5 = `
        Cuando los Alimentos lleguen a un valor menor <br>
        a ${numeroAL1} (${varEstadoHamurabi.MinAlimento}) perderas asi aun no <br>
        hallas terminados los Años <br> <br><br>
        Cuando la Poblacion llegue a un valor menor <br>
        a ${numeroAL2} (${varEstadoHamurabi.MinPoblacion}) perderas asi aun <br>
        no hallas terminados los Años <br> <br>
        <br>
        `;
        const RetPag6 = `
        Se Agradece al curso recibido por @SoyDalto<br>
        <br>se intento poner los conocimientos adquiridos<br><br>
        la version del juego es ${valorVersion}
        <br>
        `;
        switch (NumPagina) {
            case 1:
                return RetPag1;
                break;
            case 2:
                return RetPag2;
                break;
            case 3:
                return RetPag3;
                break;
            case 4:
                return RetPag4;
                break;
            case 5:
                return RetPag5;
                break;
            case 6:
                return RetPag6;
                break;
            default:
                return "";
                break;
        }
    }
}

const explicaTodo = new ClassExplica();

const visualizaPagBotones = (NumPagina) => {
    switch (NumPagina) {
        case 1:
            visualizaMenuFechas(0, 0, 0, 1, 1, 1, 1, 1, 1, 1);
            break;
        case 2:
            visualizaMenuFechas(1, 1, 1, 0, 1, 1, 1, 1, 1, 1);
            break;
        case 3:
            visualizaMenuFechas(1, 1, 1, 1, 0, 1, 1, 1, 1, 1);
            break;
        case 4:
            visualizaMenuFechas(1, 1, 1, 1, 1, 0, 1, 1, 1, 1);
            break;
        case 5:
            visualizaMenuFechas(1, 1, 1, 1, 1, 1, 0, 1, 1, 1);
            break;
        case 6:
            visualizaMenuFechas(1, 1, 1, 1, 1, 1, 1, 0, 0, 0);
            break;
        default:
            visualizaMenuFechas(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            break;
    }
};

function visualizaMenuFechas(Pag__0, Pag_0, Pag1, Pag2, Pag3, Pag4, Pag5, Pag6, Pag_6, Pag__6) {
    if (Pag__0 == 1) {
        varEexplica3.removeAttribute("hidden");
    } else {
        varEexplica3.setAttribute("hidden", "hidden");
    }
    if (Pag_0 == 1) {
        varEexplica4.removeAttribute("hidden");
    } else {
        varEexplica4.setAttribute("hidden", "hidden");
    }
    if (Pag1 == 1) {
        varEexplica5.removeAttribute("hidden");
    } else {
        varEexplica5.setAttribute("hidden", "hidden");
    }
    if (Pag2 == 1) {
        varEexplica6.removeAttribute("hidden");
    } else {
        varEexplica6.setAttribute("hidden", "hidden");
    }
    if (Pag3 == 1) {
        varEexplica7.removeAttribute("hidden");
    } else {
        varEexplica7.setAttribute("hidden", "hidden");
    }
    if (Pag4 == 1) {
        varEexplica8.removeAttribute("hidden");
    } else {
        varEexplica8.setAttribute("hidden", "hidden");
    }
    if (Pag5 == 1) {
        varEexplica9.removeAttribute("hidden");
    } else {
        varEexplica9.setAttribute("hidden", "hidden");
    }
    if (Pag6 == 1) {
        varEexplica10.removeAttribute("hidden");
    } else {
        varEexplica10.setAttribute("hidden", "hidden");
    }
    if (Pag_6 == 1) {
        varEexplica11.removeAttribute("hidden");
    } else {
        varEexplica11.setAttribute("hidden", "hidden");
    }
    if (Pag__6 == 1) {
        varEexplica12.removeAttribute("hidden");
    } else {
        varEexplica12.setAttribute("hidden", "hidden");
    }

    if (Pag__0 == 0) {
        varica3.removeAttribute("hidden");
    } else {
        varica3.setAttribute("hidden", "hidden");
    }
    if (Pag_0 == 0) {
        varica4.removeAttribute("hidden");
    } else {
        varica4.setAttribute("hidden", "hidden");
    }
    if (Pag1 == 0) {
        varica5.removeAttribute("hidden");
    } else {
        varica5.setAttribute("hidden", "hidden");
    }
    if (Pag2 == 0) {
        varica6.removeAttribute("hidden");
    } else {
        varica6.setAttribute("hidden", "hidden");
    }
    if (Pag3 == 0) {
        varica7.removeAttribute("hidden");
    } else {
        varica7.setAttribute("hidden", "hidden");
    }
    if (Pag4 == 0) {
        varica8.removeAttribute("hidden");
    } else {
        varica8.setAttribute("hidden", "hidden");
    }
    if (Pag5 == 0) {
        varica9.removeAttribute("hidden");
    } else {
        varica9.setAttribute("hidden", "hidden");
    }
    if (Pag6 == 0) {
        varica10.removeAttribute("hidden");
    } else {
        varica10.setAttribute("hidden", "hidden");
    }
    if (Pag_6 == 0) {
        varica11.removeAttribute("hidden");
    } else {
        varica11.setAttribute("hidden", "hidden");
    }
    if (Pag__6 == 0) {
        varica12.removeAttribute("hidden");
    } else {
        varica12.setAttribute("hidden", "hidden");
    }

};