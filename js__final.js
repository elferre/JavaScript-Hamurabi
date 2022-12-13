/**========================================================================
 * ?                                ABOUT
 * @author         :  Edgardo Ferreyra
 * @email          :  ed20052006@hotmail.com
 * @repo           :  
 * @createdOn      :  14/05/2022
 * @description    :  
 *========================================================================**/
class FinalCreate {
    constructor() {

    }
    BorrarYCrear_Graph() {

        document.querySelector("#graph").remove();
        const divi = document.createElement("div");
        divi.id = "graph";
        divi.appendChild(document.createTextNode(""));
        const contei = document.querySelector("#PreMorris");
        const app = document.querySelector("#graphError");
        contei.insertBefore(divi, app);


    }
    CargaLosDatos() {
        if (finalKeys.length > 0) {
            Morris.Line({
                element: 'graph',
                data: year_data,
                xkey: 'Periodo',
                ykeys: finalKeys,
                labels: finalLabels,
                behaveLikeLine: true,
                lineColors: ['#0b62a4', '#7A92A3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed', '#ABEBC6',
                    '#1E8798', '#87871B', '#90560C', '##22AD17', '#D98880', '#308CCB', '#A6B15F', '#FF5733'
                ],
                trendLineColors: ['#0b62a4', '#7A92A3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed', '#ABEBC6',
                    '#1E8798', '#87871B', '#90560C', '##22AD17', '#D98880', '#308CCB', '#A6B15F', '#FF5733'
                ],
                resize: true,
                smooth: true,
                hideHover: 'auto',
                parseTime: false,
                xLabels: ""
            });
            /*        
                                year_data = [
                        { "period": "2012", "licensed": 3407, "sorned": 660 },
                        { "period": "2011", "licensed": 3351, "sorned": 629 },
                        { "period": "2010", "licensed": 3269, "sorned": 618 },
                        { "period": "2013", "licensed": 3215, "sorned": 622 }
                    ];
                    Morris.Line({
                        element: 'graph',
                        data: year_data,
                        xkey: 'period',
                        ykeys: ['licensed', 'sorned'],
                        labels: ['Licensed', 'SORN']
                    });
            */

        }
    }

}
let finalKeys = ['Alimento', 'Dinero', 'Muertes', 'Nacimiento', 'Tierra', 'Poblacion', "Densi",
    'VCompra', 'VVenta', "CAlim", "CTierra", "VAlim", "VTierra", "AlimPobla"
];
let finalLabels = ['Alimento', 'Plata', 'Muertes', 'Nacimientos', 'Tierra', 'Poblacíon', "Densidad Poblacion",
    'V.Canje Compra', 'V.Canje Venta', "Compra Alimento", "Compra Tierra", "Vende Alimento", "Vende Tierra", "Alimento p/Poblacion"
];

const MuestraFinal = new FinalCreate();

let ValorTempIndex = [];

function Final() {
    if (varHamurabi.Etapa == (varHamurabi.CantAños + 1)) {
        varHamurabi.LlegoFinal = true;
    }

    /**
     * description
     * 
     * Se llego al final del mismo
     */
    if (varHamurabi.LlegoFinal == true) {
        limpiaBotones();
        varGeneral.setAttribute("hidden", " ");
        varMuestraDiv.setAttribute("hidden", "");
        varFinal.removeAttribute("hidden");
        varParaFinal.innerHTML = `Nombre : ${varHamurabi.Nombre} - ${nNivel.TextNivel}`;
        ValorTempIndex = [];
        // varFinal.innerHTML = "hidden hidden hidden hidden hiddenhiddenhiddenhiddenhiddenhiddenhidden";
        for (index = 0; index <= varHamurabi.Etapa; index++) {
            year_data[index] = {

                "Periodo": "Año :" + romanize(index) + "",
                "Alimento": varHamurabi.statAlimento[index],
                "Dinero": varHamurabi.statDinero[index],
                "Muertes": varHamurabi.statMuertes[index],
                "Nacimiento": varHamurabi.statNacimientos[index],
                "Poblacion": varHamurabi.statPoblacion[index],
                "Densi": varHamurabi.statDensidad[index],
                "Tierra": varHamurabi.statTierra[index],
                "VCompra": varHamurabi.statValorCompra[index],
                "VVenta": varHamurabi.statValorVenta[index],
                "CAlim": varHamurabi.statCantCompraAlimento[index],
                "CTierra": varHamurabi.statCantCompraTierra[index],
                "VAlim": varHamurabi.statCantVentaAlimento[index],
                "VTierra": varHamurabi.statCantVentaTierra[index],
                "AlimPobla": varHamurabi.statAliPoblacion[index]
            };
            ValorTempIndex.push(index);
        };
        MuestraFinal.CargaLosDatos();
        //  MuestraFinal.BorrarYCrear_Graph();
        varTablaFinal.AbrirTabla("border=2");
        varTablaFinal.AbrirTr();
        varTablaFinal.AgregarTd("Periodo", "__varTablaFinal");
        for (index = 0; index <= varHamurabi.Etapa; index++) {
            varTablaFinal.AgregarTd("" + romanize(index) + "");
        }
        varTablaFinal.CerrarTr();

        _CargaTablaFinal(finalLabels[0], varHamurabi.Etapa, varHamurabi.statAlimento, 1);
        _CargaTablaFinal(finalLabels[1], varHamurabi.Etapa, varHamurabi.statDinero, 2);
        _CargaTablaFinal(finalLabels[2], varHamurabi.Etapa, varHamurabi.statMuertes, 3);
        _CargaTablaFinal(finalLabels[3], varHamurabi.Etapa, varHamurabi.statNacimientos, 4);
        _CargaTablaFinal(finalLabels[4], varHamurabi.Etapa, varHamurabi.statTierra, 5);
        _CargaTablaFinal(finalLabels[5], varHamurabi.Etapa, varHamurabi.statPoblacion, 6);
        _CargaTablaFinal(finalLabels[6], varHamurabi.Etapa, varHamurabi.statDensidad, 7);
        _CargaTablaFinal(finalLabels[7], varHamurabi.Etapa, varHamurabi.statValorCompra, 8);
        _CargaTablaFinal(finalLabels[8], varHamurabi.Etapa, varHamurabi.statValorVenta, 9);
        _CargaTablaFinal(finalLabels[9], varHamurabi.Etapa, varHamurabi.statCantCompraAlimento, 10);
        _CargaTablaFinal(finalLabels[10], varHamurabi.Etapa, varHamurabi.statCantCompraTierra, 11);
        _CargaTablaFinal(finalLabels[11], varHamurabi.Etapa, varHamurabi.statCantVentaAlimento, 12);
        _CargaTablaFinal(finalLabels[12], varHamurabi.Etapa, varHamurabi.statCantVentaTierra, 13);
        _CargaTablaFinal(finalLabels[13], varHamurabi.Etapa, varHamurabi.statAliPoblacion, 14);

        varTablaFinal.CerrarTabla();
        varTablaFinalI.innerHTML = varTablaFinal.Resultado();
    }
}

function _CargaTablaFinal(__Texto, __Indexa, __array, __ValorClass) {
    //varTablaFinal.AbrirTr();
    varTablaFinal.AgregarTrVer1("__NO" + __ValorClass, "idTD" + __ValorClass);
    varTablaFinal.AgregarTd(__Texto, "__NOaaa" + __ValorClass);
    // varTablaFinal.AgregarTdVer1(__Texto, "__NO" + __ValorClass, "idTD" + __ValorClass);
    for (index = 0; index <= __Indexa; index++) {
        if (__array[index] == 0) {
            varTablaFinal.AgregarTd(" ");
        } else {
            varTablaFinal.AgregarTd(__array[index]);
        }
    }
    varTablaFinal.CerrarTr();
}


/**
 * description
 * 
 * Botones de Sacar o Agregar
 * 
 * let finalKeys = ['Alimento', 'Dinero', 'Muertes', 'Nacimiento', 'Tierra', 'Poblacion',
    'VCompra', 'VVenta', "CAlim", "CTierra", "VAlim", "VTierra"
];
let finalLabels = ['Alimento', 'Plata', 'Muertes', 'Nacimientos', 'Tierra', 'Poblacíon',
    'V.Canje Compra', 'V.Canje Venta', "Compra Alimento", "Compra Tierra", "Vende Alimento", "Vende Tierra"
];
 */
/*
varBtn1.setAttribute("value", "Sacar Alimento");
varBtn2.setAttribute("value", "Sacar Plata");
varBtn3.setAttribute("value", "Sacar Muertes");
varBtn4.setAttribute("value", "Sacar Nacimientos");
varBtn5.setAttribute("value", "Sacar Tierra");
varBtn6.setAttribute("value", "Sacar Poblacíon");
varBtn7.setAttribute("value", "Sacar V.Canje Compra");
varBtn8.setAttribute("value", "Sacar V.Canje Venta");
varBtn9.setAttribute("value", "Sacar Compra Alimento");
varBtn10.setAttribute("value", "Sacar Compra Tierra");
varBtn11.setAttribute("value", "Sacar Vende Alimento");
varBtn12.setAttribute("value", "Sacar Vende Tierra");
varBtn13.setAttribute("value", "Sacar Densidad Poblacion");
*/
let varidTD1, varidTD2, varidTD3, varidTD4, varidTD5, varidTD6, varidTD7, varidTD8, varidTD9,
    varidTD10, varidTD11, varidTD12, varidTD13, varidTD14;

let varPaso = false;

varBotonOpenX.addEventListener("click", () => {
    if (varPaso == false) {
        varidTD1 = document.getElementById("idTD1");
        varidTD2 = document.getElementById("idTD2");
        varidTD3 = document.getElementById("idTD3");
        varidTD4 = document.getElementById("idTD4");
        varidTD5 = document.getElementById("idTD5");
        varidTD6 = document.getElementById("idTD6");
        varidTD7 = document.getElementById("idTD7");
        varidTD8 = document.getElementById("idTD8");
        varidTD9 = document.getElementById("idTD9");
        varidTD10 = document.getElementById("idTD10");
        varidTD11 = document.getElementById("idTD11");
        varidTD12 = document.getElementById("idTD12");
        varidTD13 = document.getElementById("idTD13");
        varidTD14 = document.getElementById("idTD14");
        varidTD1.setAttribute("class", "__NO1");
        varidTD2.setAttribute("class", "__NO1");
        varidTD3.setAttribute("class", "__NO1");
        varidTD4.setAttribute("class", "__NO1");
        varidTD5.setAttribute("class", "__NO1");
        varidTD6.setAttribute("class", "__NO1");
        varidTD7.setAttribute("class", "__NO1");
        varidTD8.setAttribute("class", "__NO1");
        varidTD9.setAttribute("class", "__NO1");
        varidTD10.setAttribute("class", "__NO1");
        varidTD11.setAttribute("class", "__NO1'");
        varidTD12.setAttribute("class", "__NO1");
        varidTD13.setAttribute("class", "__NO1");
        varidTD14.setAttribute("class", "__NO1");
        varPaso = true;
    }
    varPos_class.removeAttribute("hidden");
    varBotonOpenX.setAttribute("hidden", "hidden");
})

varBotonX.addEventListener("click", () => {
    varPos_class.setAttribute("hidden", "hidden");
    varBotonOpenX.removeAttribute("hidden");
})
varBtn1.addEventListener("click", () => {
    // Boton Tierra
    let ValorTempKeys = [];
    let ValorTempLabels = [];
    if (varStatus1.getAttribute("value") == "1") {
        varBtn1.innerHTML = "Agregar Alimento";
        varidTD1.setAttribute("class", "__NO1s");
        varBtn1.setAttribute("class", "Final__BotonesFinal-Btn--Agregar");
        for (let index = 0; index < finalLabels.length; index++) {
            const elementLabels = finalLabels[index];
            const elementKeys = finalKeys[index];
            if (elementKeys != "Alimento") {
                ValorTempLabels.push(elementLabels);
                ValorTempKeys.push(elementKeys);
            }
        }
        varStatus1.setAttribute("value", "0");
    } else {
        varidTD1.setAttribute("class", "__NO1");
        varBtn1.innerHTML = "Sacar Alimento";
        varBtn1.setAttribute("class", "Final__BotonesFinal-Btn");
        ValorTempLabels = finalLabels;
        ValorTempKeys = finalKeys;

        ValorTempLabels.push("Alimento");
        ValorTempKeys.push("Alimento");


        varStatus1.setAttribute("value", "1");
    }
    finalKeys = ValorTempKeys;
    finalLabels = ValorTempLabels;

    MuestraFinal.BorrarYCrear_Graph();
    MuestraFinal.CargaLosDatos();

})

varBtn2.addEventListener("click", () => {
    // Boton Tierra
    let ValorTempKeys = [];
    let ValorTempLabels = [];
    if (varStatus2.getAttribute("value") == "1") {
        varidTD2.setAttribute("class", "__NO1s");
        varBtn2.innerHTML = "Agregar Plata";
        varBtn2.setAttribute("class", "Final__BotonesFinal-Btn--Agregar");
        for (let index = 0; index < finalLabels.length; index++) {
            const elementLabels = finalLabels[index];
            const elementKeys = finalKeys[index];
            if (elementKeys != "Dinero") {
                ValorTempLabels.push(elementLabels);
                ValorTempKeys.push(elementKeys);
            }
        }
        varStatus2.setAttribute("value", "0");
    } else {
        varidTD2.setAttribute("class", "__NO1");
        varBtn2.innerHTML = "Sacar Plata";
        varBtn2.setAttribute("class", "Final__BotonesFinal-Btn");
        ValorTempLabels = finalLabels;
        ValorTempKeys = finalKeys;

        ValorTempLabels.push("Plata");
        ValorTempKeys.push("Dinero");

        varStatus2.setAttribute("value", "1");
    }
    finalKeys = ValorTempKeys;
    finalLabels = ValorTempLabels;

    MuestraFinal.BorrarYCrear_Graph();
    MuestraFinal.CargaLosDatos();
})

varBtn3.addEventListener("click", () => {
    // Boton Tierra
    let ValorTempKeys = [];
    let ValorTempLabels = [];
    if (varStatus3.getAttribute("value") == "1") {
        varidTD3.setAttribute("class", "__NO1s");
        varBtn3.innerHTML = "Agregar Muertes";
        varBtn3.setAttribute("class", "Final__BotonesFinal-Btn--Agregar");
        for (let index = 0; index < finalLabels.length; index++) {
            const elementLabels = finalLabels[index];
            const elementKeys = finalKeys[index];
            if (elementKeys != "Muertes") {
                ValorTempLabels.push(elementLabels);
                ValorTempKeys.push(elementKeys);
            }
        }
        varStatus3.setAttribute("value", "0");
    } else {
        varidTD3.setAttribute("class", "__NO1");
        varBtn3.innerHTML = "Sacar Muertes";
        varBtn3.setAttribute("class", "Final__BotonesFinal-Btn");
        ValorTempLabels = finalLabels;
        ValorTempKeys = finalKeys;

        ValorTempLabels.push("Muertes");
        ValorTempKeys.push("Muertes");

        varStatus3.setAttribute("value", "1");
    }
    finalKeys = ValorTempKeys;
    finalLabels = ValorTempLabels;

    MuestraFinal.BorrarYCrear_Graph();
    MuestraFinal.CargaLosDatos();
})

varBtn4.addEventListener("click", () => {
    // Boton Tierra
    let ValorTempKeys = [];
    let ValorTempLabels = [];
    if (varStatus4.getAttribute("value") == "1") {
        varidTD4.setAttribute("class", "__NO1s");
        varBtn4.innerHTML = "Agregar Nacimiento";
        varBtn4.setAttribute("class", "Final__BotonesFinal-Btn--Agregar");
        for (let index = 0; index < finalLabels.length; index++) {
            const elementLabels = finalLabels[index];
            const elementKeys = finalKeys[index];
            if (elementKeys != "Nacimiento") {
                ValorTempLabels.push(elementLabels);
                ValorTempKeys.push(elementKeys);
            }
        }
        varStatus4.setAttribute("value", "0");
    } else {
        varidTD4.setAttribute("class", "__NO1");
        varBtn4.innerHTML = "Sacar Nacimiento";
        varBtn4.setAttribute("class", "Final__BotonesFinal-Btn");
        ValorTempLabels = finalLabels;
        ValorTempKeys = finalKeys;

        ValorTempLabels.push("Nacimiento");
        ValorTempKeys.push("Nacimiento");

        varStatus4.setAttribute("value", "1");
    }
    finalKeys = ValorTempKeys;
    finalLabels = ValorTempLabels;

    MuestraFinal.BorrarYCrear_Graph();
    MuestraFinal.CargaLosDatos();
})

varBtn5.addEventListener("click", () => {
    // Boton Tierra
    let ValorTempKeys = [];
    let ValorTempLabels = [];
    if (varStatus5.getAttribute("value") == "1") {
        varidTD5.setAttribute("class", "__NO1s");
        varBtn5.innerHTML = "Agregar Tierra";
        varBtn5.setAttribute("class", "Final__BotonesFinal-Btn--Agregar");
        for (let index = 0; index < finalLabels.length; index++) {
            const elementLabels = finalLabels[index];
            const elementKeys = finalKeys[index];
            if (elementKeys != "Tierra") {
                ValorTempLabels.push(elementLabels);
                ValorTempKeys.push(elementKeys);
            }
        }
        varStatus5.setAttribute("value", "0");
    } else {
        varidTD5.setAttribute("class", "__NO1");
        varBtn5.innerHTML = "Sacar Tierra";
        varBtn5.setAttribute("class", "Final__BotonesFinal-Btn");
        ValorTempLabels = finalLabels;
        ValorTempKeys = finalKeys;

        ValorTempLabels.push("Tierra");
        ValorTempKeys.push("Tierra");

        varStatus5.setAttribute("value", "1");
    }
    finalKeys = ValorTempKeys;
    finalLabels = ValorTempLabels;

    MuestraFinal.BorrarYCrear_Graph();
    MuestraFinal.CargaLosDatos();
})

varBtn6.addEventListener("click", () => {
    // Boton Tierra
    let ValorTempKeys = [];
    let ValorTempLabels = [];
    if (varStatus6.getAttribute("value") == "1") {
        varidTD6.setAttribute("class", "__NO1s");
        varBtn6.innerHTML = "Agregar Poblacíon";
        varBtn6.setAttribute("class", "Final__BotonesFinal-Btn--Agregar");
        for (let index = 0; index < finalLabels.length; index++) {
            const elementLabels = finalLabels[index];
            const elementKeys = finalKeys[index];
            if (elementKeys != "Poblacion") {
                ValorTempLabels.push(elementLabels);
                ValorTempKeys.push(elementKeys);
            }
        }
        varStatus6.setAttribute("value", "0");
    } else {
        varidTD6.setAttribute("class", "__NO1");
        varBtn6.innerHTML = "Sacar Poblacíon";
        varBtn6.setAttribute("class", "Final__BotonesFinal-Btn");
        ValorTempLabels = finalLabels;
        ValorTempKeys = finalKeys;

        ValorTempLabels.push("Poblacíon");
        ValorTempKeys.push("Poblacion");

        varStatus6.setAttribute("value", "1");
    }
    finalKeys = ValorTempKeys;
    finalLabels = ValorTempLabels;

    MuestraFinal.BorrarYCrear_Graph();
    MuestraFinal.CargaLosDatos();
})

varBtn7.addEventListener("click", () => {
    // Boton Tierra
    let ValorTempKeys = [];
    let ValorTempLabels = [];
    if (varStatus7.getAttribute("value") == "1") {
        varidTD8.setAttribute("class", "__NO1s");
        varBtn7.innerHTML = "Agregar V.Canje Compra";
        varBtn7.setAttribute("class", "Final__BotonesFinal-Btn--Agregar");
        for (let index = 0; index < finalLabels.length; index++) {
            const elementLabels = finalLabels[index];
            const elementKeys = finalKeys[index];
            if (elementKeys != "VCompra") {
                ValorTempLabels.push(elementLabels);
                ValorTempKeys.push(elementKeys);
            }
        }
        varStatus7.setAttribute("value", "0");
    } else {
        varidTD8.setAttribute("class", "__NO1");
        varBtn7.innerHTML = "Sacar V.Canje Compra";
        varBtn7.setAttribute("class", "Final__BotonesFinal-Btn");
        ValorTempLabels = finalLabels;
        ValorTempKeys = finalKeys;

        ValorTempLabels.push("V.Canje Compra");
        ValorTempKeys.push("VCompra");

        varStatus7.setAttribute("value", "1");
    }
    finalKeys = ValorTempKeys;
    finalLabels = ValorTempLabels;

    MuestraFinal.BorrarYCrear_Graph();
    MuestraFinal.CargaLosDatos();
})

varBtn8.addEventListener("click", () => {
    // Boton Tierra
    let ValorTempKeys = [];
    let ValorTempLabels = [];
    if (varStatus8.getAttribute("value") == "1") {
        varidTD9.setAttribute("class", "__NO1s");
        varBtn8.innerHTML = "Agregar V.Canje Venta";
        varBtn8.setAttribute("class", "Final__BotonesFinal-Btn--Agregar");
        for (let index = 0; index < finalLabels.length; index++) {
            const elementLabels = finalLabels[index];
            const elementKeys = finalKeys[index];
            if (elementKeys != "VVenta") {
                ValorTempLabels.push(elementLabels);
                ValorTempKeys.push(elementKeys);
            }
        }
        varStatus8.setAttribute("value", "0");
    } else {
        varidTD9.setAttribute("class", "__NO1");
        varBtn8.innerHTML = "Sacar V.Canje Venta";
        varBtn8.setAttribute("class", "Final__BotonesFinal-Btn");
        ValorTempLabels = finalLabels;
        ValorTempKeys = finalKeys;

        ValorTempLabels.push("V.Canje Venta");
        ValorTempKeys.push("VVenta");

        varStatus8.setAttribute("value", "1");
    }
    finalKeys = ValorTempKeys;
    finalLabels = ValorTempLabels;

    MuestraFinal.BorrarYCrear_Graph();
    MuestraFinal.CargaLosDatos();
})

varBtn9.addEventListener("click", () => {
    // Boton Tierra
    let ValorTempKeys = [];
    let ValorTempLabels = [];
    if (varStatus9.getAttribute("value") == "1") {
        varidTD10.setAttribute("class", "__NO1s");
        varBtn9.innerHTML = "Agregar Compra Alimento";
        varBtn9.setAttribute("class", "Final__BotonesFinal-Btn--Agregar");
        for (let index = 0; index < finalLabels.length; index++) {
            const elementLabels = finalLabels[index];
            const elementKeys = finalKeys[index];
            if (elementKeys != "CAlim") {
                ValorTempLabels.push(elementLabels);
                ValorTempKeys.push(elementKeys);
            }
        }
        varStatus9.setAttribute("value", "0");
    } else {
        varidTD10.setAttribute("class", "__NO1");
        varBtn9.innerHTML = "Sacar Compra Alimento";
        varBtn9.setAttribute("class", "Final__BotonesFinal-Btn");
        ValorTempLabels = finalLabels;
        ValorTempKeys = finalKeys;

        ValorTempLabels.push("Compra Alimento");
        ValorTempKeys.push("CAlim");

        varStatus9.setAttribute("value", "1");
    }
    finalKeys = ValorTempKeys;
    finalLabels = ValorTempLabels;

    MuestraFinal.BorrarYCrear_Graph();
    MuestraFinal.CargaLosDatos();
})

varBtn10.addEventListener("click", () => {
    // Boton Tierra
    let ValorTempKeys = [];
    let ValorTempLabels = [];
    if (varStatus10.getAttribute("value") == "1") {
        varidTD11.setAttribute("class", "__NO1s");
        varBtn10.innerHTML = "Agregar Compra Tierra";
        varBtn10.setAttribute("class", "Final__BotonesFinal-Btn--Agregar");
        for (let index = 0; index < finalLabels.length; index++) {
            const elementLabels = finalLabels[index];
            const elementKeys = finalKeys[index];
            if (elementKeys != "CTierra") {
                ValorTempLabels.push(elementLabels);
                ValorTempKeys.push(elementKeys);
            }
        }
        varStatus10.setAttribute("value", "0");
    } else {
        varidTD11.setAttribute("class", "__NO1");
        varBtn10.innerHTML = "Sacar Compra Tierra";
        varBtn10.setAttribute("class", "Final__BotonesFinal-Btn");
        ValorTempLabels = finalLabels;
        ValorTempKeys = finalKeys;

        ValorTempLabels.push("Compra Tierra");
        ValorTempKeys.push("CTierra");

        varStatus10.setAttribute("value", "1");
    }
    finalKeys = ValorTempKeys;
    finalLabels = ValorTempLabels;

    MuestraFinal.BorrarYCrear_Graph();
    MuestraFinal.CargaLosDatos();
})

varBtn11.addEventListener("click", () => {
    // Boton Tierra
    let ValorTempKeys = [];
    let ValorTempLabels = [];
    if (varStatus11.getAttribute("value") == "1") {
        varidTD12.setAttribute("class", "__NO1s");
        varBtn11.innerHTML = "Agregar Vende Alimento";
        varBtn11.setAttribute("class", "Final__BotonesFinal-Btn--Agregar");
        for (let index = 0; index < finalLabels.length; index++) {
            const elementLabels = finalLabels[index];
            const elementKeys = finalKeys[index];
            if (elementKeys != "VAlim") {
                ValorTempLabels.push(elementLabels);
                ValorTempKeys.push(elementKeys);
            }
        }
        varStatus11.setAttribute("value", "0");
    } else {
        varidTD12.setAttribute("class", "__NO1");
        varBtn11.innerHTML = "Sacar Vende Alimento";
        varBtn11.setAttribute("class", "Final__BotonesFinal-Btn");
        ValorTempLabels = finalLabels;
        ValorTempKeys = finalKeys;

        ValorTempLabels.push("Vende Alimento");
        ValorTempKeys.push("VAlim");

        varStatus11.setAttribute("value", "1");
    }
    finalKeys = ValorTempKeys;
    finalLabels = ValorTempLabels;

    MuestraFinal.BorrarYCrear_Graph();
    MuestraFinal.CargaLosDatos();
})

varBtn12.addEventListener("click", () => {
    // Boton Tierra
    let ValorTempKeys = [];
    let ValorTempLabels = [];
    if (varStatus12.getAttribute("value") == "1") {
        varidTD13.setAttribute("class", "__NO1s");
        varBtn12.innerHTML = "Agregar Vende Tierra";
        varBtn12.setAttribute("class", "Final__BotonesFinal-Btn--Agregar");
        for (let index = 0; index < finalLabels.length; index++) {
            const elementLabels = finalLabels[index];
            const elementKeys = finalKeys[index];
            if (elementKeys != "VTierra") {
                ValorTempLabels.push(elementLabels);
                ValorTempKeys.push(elementKeys);
            }
        }
        varStatus12.setAttribute("value", "0");
    } else {
        varidTD13.setAttribute("class", "__NO1");
        varBtn12.innerHTML = "Sacar Vende Tierra";
        varBtn12.setAttribute("class", "Final__BotonesFinal-Btn");
        ValorTempLabels = finalLabels;
        ValorTempKeys = finalKeys;

        ValorTempLabels.push("Vende Tierra");
        ValorTempKeys.push("VTierra");

        varStatus12.setAttribute("value", "1");
    }
    finalKeys = ValorTempKeys;
    finalLabels = ValorTempLabels;

    MuestraFinal.BorrarYCrear_Graph();
    MuestraFinal.CargaLosDatos();
})
varBtn13.addEventListener("click", () => {
    // Boton Tierra
    let ValorTempKeys = [];
    let ValorTempLabels = [];
    if (varStatus13.getAttribute("value") == "1") {
        varidTD7.setAttribute("class", "__NO1s");
        varBtn13.innerHTML = "Agregar Densidad Poblacion";
        varBtn13.setAttribute("class", "Final__BotonesFinal-Btn--Agregar");
        for (let index = 0; index < finalLabels.length; index++) {
            const elementLabels = finalLabels[index];
            const elementKeys = finalKeys[index];
            if (elementKeys != "Densi") {
                ValorTempLabels.push(elementLabels);
                ValorTempKeys.push(elementKeys);
            }
        }
        varStatus13.setAttribute("value", "0");
    } else {
        varidTD7.setAttribute("class", "__NO1");
        varBtn13.innerHTML = "Sacar Densidad Poblacion";
        varBtn13.setAttribute("class", "Final__BotonesFinal-Btn");
        ValorTempLabels = finalLabels;
        ValorTempKeys = finalKeys;

        ValorTempLabels.push("Densidad Poblacion");
        ValorTempKeys.push("Densi");

        varStatus13.setAttribute("value", "1");
    }
    finalKeys = ValorTempKeys;
    finalLabels = ValorTempLabels;

    MuestraFinal.BorrarYCrear_Graph();
    MuestraFinal.CargaLosDatos();
})

varBtn14.addEventListener("click", () => {
    // Boton Tierra
    let ValorTempKeys = [];
    let ValorTempLabels = [];
    if (varStatus14.getAttribute("value") == "1") {
        varidTD14.setAttribute("class", "__NO1s");
        varBtn14.innerHTML = "Agregar Alimento p/Poblacion";
        varBtn14.setAttribute("class", "Final__BotonesFinal-Btn--Agregar");
        for (let index = 0; index < finalLabels.length; index++) {
            const elementLabels = finalLabels[index];
            const elementKeys = finalKeys[index];
            if (elementKeys != "AlimPobla") {
                ValorTempLabels.push(elementLabels);
                ValorTempKeys.push(elementKeys);
            }
        }
        varStatus14.setAttribute("value", "0");
    } else {
        varidTD14.setAttribute("class", "__NO1");
        varBtn14.innerHTML = "Sacar Alimento p/Poblacion";
        varBtn14.setAttribute("class", "Final__BotonesFinal-Btn");
        ValorTempLabels = finalLabels;
        ValorTempKeys = finalKeys;

        ValorTempLabels.push("Alimento p/Poblacion");
        ValorTempKeys.push("AlimPobla");

        varStatus14.setAttribute("value", "1");
    }
    finalKeys = ValorTempKeys;
    finalLabels = ValorTempLabels;

    MuestraFinal.BorrarYCrear_Graph();
    MuestraFinal.CargaLosDatos();
})