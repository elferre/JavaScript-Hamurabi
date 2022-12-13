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
 * Cambio de Pantalla de Fondo
 *
function Pantalla(valor) {
    let error_func;
    error_func = true;
    const Imgg = document.getElementById("TodoIMG");
    if (valor == 1) {
        error_func = true;
        Imgg.setAttribute("class", "Todo1");
    };
    if (valor == 2) {
        error_func = true;
        Imgg.setAttribute("class", "Todo2");
    };
    if (valor == 3) {
        error_func = true;
        Imgg.setAttribute("class", "Todo3");
    };
    if (error_func == false) {
        Imgg.setAttribute("class", "Todo1");
    };
};
*/

function randomize() {
    /**
     * Retorna Valor aleatorio entre [0 , 1)
     */
    const rmz = Math.random();
    return rmz;
}

function RnD(Min, Max, Dec) {
    /**
     * description
     *
     * Igual al Randomize pero con seleccion de rango
     */
    if (Dec == null || Dec == undefined) Dec = 0;
    const u = randomize();
    const uu = (u * (Max - Min + 1)) + Min;
    if (Dec <= 0) {
        return Math.floor(uu);
    } else {
        return uu.toFixed(Dec);
    }

}

function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
}

// comparaVenta(parseInt(vOperacionValorC[0].value), oPcion, varCompraVenta.VCom, varCompraVenta.VVen)
/**
 * description
 * 
 * Usada en compra_venta.js
 * 
 * varTipo = 1,2,3,4
 * 1 Compra Alimento
 * 2 Compra Tierra
 * 3 Venta Alimento
 * 4 Venta Tierra
 * 
 * Retorna 0 = ok
 * 1 = Mal Compra
 * 2 = Mal Venta Alimento
 * 3 = Mal Venta Tierra
 * 4 = Mal Alimento Poblacion
 */
comparaVenta = (varOperacion, varTipo, varCompra, VarVenta, VarAlimPo) => {
    let h = 0;
    if (VarAlimPo == 0) {
        return 4;
    } else {
        if (varTipo == 1) {
            h = varOperacion * varCompra;
            if (h > varHamurabi.Dinero) {
                return 1;
            } else { return 0; }
        } else if (varTipo == 2) {
            h = varOperacion * varCompra;
            if (h > varHamurabi.Dinero) {
                return 1;
            } else { return 0; }
        } else if (varTipo == 3) {
            h = varOperacion;
            if (h > varHamurabi.Alimento) {
                return 2;
            } else { return 0; }
        } else if (varTipo == 4) {
            h = varOperacion;
            if (h > varHamurabi.Tierra) {
                return 3;
            } else { return 0; }
        }
    }
}


muestraRND = (Val1, Val2) => {
    varGDatosC.innerHTML = `Venta : <br><b>${Val1}</b><br>
    Compra : <br><b>${Val2}</b><br>`;
}

/**========================================================================
 **                           FUNCTION NAME romanize
 *?  Pasar numeros a Numeros Romanos I,II,III,IV,V, etc
 *@param name valor numero a pasar  
 *@return String
 *@fuente https://www.iteramos.com/pregunta/98049/Convertir-un-numero-en-un-numero-romano-en-javaScript
 *
 * 
 *========================================================================**/
function romanize(num) {
    if (isNaN(num)) return NaN;
    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman = "",
        i = 3;
    while (i--) roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}
/*============================ END OF FUNCTION ============================ romanize */


/**========================================================================
 **                           FUNCTION NAME numeroALetras
 *?  Pasar numeros a Letras
 *@param name valor numero a pasar  
 *@return String
 *@fuente https://gist.github.com/alfchee/e563340276f89b22042a
 *
 * @example
 * ```js
Modo de uso: 500,34 USD
    numeroALetrasss = numeroALetras(500.34, {
        plural: 'dólares estadounidenses',
        singular: 'dólar estadounidense',
        centPlural: 'centavos',
        centSingular: 'centavo'
    });
 * ```
 * 
 *========================================================================**/


const numeroALetras = (function() {
    function Unidades(num) {

        switch (num) {
            case 1:
                return 'UN';
            case 2:
                return 'DOS';
            case 3:
                return 'TRES';
            case 4:
                return 'CUATRO';
            case 5:
                return 'CINCO';
            case 6:
                return 'SEIS';
            case 7:
                return 'SIETE';
            case 8:
                return 'OCHO';
            case 9:
                return 'NUEVE';
        }

        return '';
    } //Unidades()


    function Decenas(num) {

        let decena = Math.floor(num / 10);
        let unidad = num - (decena * 10);

        switch (decena) {
            case 1:
                switch (unidad) {
                    case 0:
                        return 'DIEZ';
                    case 1:
                        return 'ONCE';
                    case 2:
                        return 'DOCE';
                    case 3:
                        return 'TRECE';
                    case 4:
                        return 'CATORCE';
                    case 5:
                        return 'QUINCE';
                    default:
                        return 'DIECI' + Unidades(unidad);
                }
            case 2:
                switch (unidad) {
                    case 0:
                        return 'VEINTE';
                    default:
                        return 'VEINTI' + Unidades(unidad);
                }
            case 3:
                return DecenasY('TREINTA', unidad);
            case 4:
                return DecenasY('CUARENTA', unidad);
            case 5:
                return DecenasY('CINCUENTA', unidad);
            case 6:
                return DecenasY('SESENTA', unidad);
            case 7:
                return DecenasY('SETENTA', unidad);
            case 8:
                return DecenasY('OCHENTA', unidad);
            case 9:
                return DecenasY('NOVENTA', unidad);
            case 0:
                return Unidades(unidad);
        }
    } //Unidades()

    function DecenasY(strSin, numUnidades) {
        if (numUnidades > 0)
            return strSin + ' Y ' + Unidades(numUnidades)

        return strSin;
    } //DecenasY()

    function Centenas(num) {
        let centenas = Math.floor(num / 100);
        let decenas = num - (centenas * 100);

        switch (centenas) {
            case 1:
                if (decenas > 0)
                    return 'CIENTO ' + Decenas(decenas);
                return 'CIEN';
            case 2:
                return 'DOSCIENTOS ' + Decenas(decenas);
            case 3:
                return 'TRESCIENTOS ' + Decenas(decenas);
            case 4:
                return 'CUATROCIENTOS ' + Decenas(decenas);
            case 5:
                return 'QUINIENTOS ' + Decenas(decenas);
            case 6:
                return 'SEISCIENTOS ' + Decenas(decenas);
            case 7:
                return 'SETECIENTOS ' + Decenas(decenas);
            case 8:
                return 'OCHOCIENTOS ' + Decenas(decenas);
            case 9:
                return 'NOVECIENTOS ' + Decenas(decenas);
        }

        return Decenas(decenas);
    } //Centenas()

    function Seccion(num, divisor, strSingular, strPlural) {
        let cientos = Math.floor(num / divisor)
        let resto = num - (cientos * divisor)

        let letras = '';

        if (cientos > 0)
            if (cientos > 1)
                letras = Centenas(cientos) + ' ' + strPlural;
            else
                letras = strSingular;

        if (resto > 0)
            letras += '';

        return letras;
    } //Seccion()

    function Miles(num) {
        let divisor = 1000;
        let cientos = Math.floor(num / divisor)
        let resto = num - (cientos * divisor)

        let strMiles = Seccion(num, divisor, 'UN MIL', 'MIL');
        let strCentenas = Centenas(resto);

        if (strMiles == '')
            return strCentenas;

        return strMiles + ' ' + strCentenas;
    } //Miles()

    function Millones(num) {
        let divisor = 1000000;
        let cientos = Math.floor(num / divisor)
        let resto = num - (cientos * divisor)

        let strMillones = Seccion(num, divisor, 'UN MILLON DE', 'MILLONES DE');
        let strMiles = Miles(resto);

        if (strMillones == '')
            return strMiles;

        return strMillones + ' ' + strMiles;
    } //Millones()

    return function NumeroALetras(num, currency) {
        currency = currency || {};
        let data = {
            numero: num,
            enteros: Math.floor(num),
            centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
            letrasCentavos: '',
            letrasMonedaPlural: currency.plural || 'PESOS CHILENOS', //'PESOS', 'Dólares', 'Bolívares', 'etcs'
            letrasMonedaSingular: currency.singular || 'PESO CHILENO', //'PESO', 'Dólar', 'Bolivar', 'etc'
            letrasMonedaCentavoPlural: currency.centPlural || 'CHIQUI PESOS CHILENOS',
            letrasMonedaCentavoSingular: currency.centSingular || 'CHIQUI PESO CHILENO'
        };

        if (data.centavos > 0) {
            data.letrasCentavos = 'CON ' + (function() {
                if (data.centavos == 1)
                    return Millones(data.centavos) + ' ' + data.letrasMonedaCentavoSingular;
                else
                    return Millones(data.centavos) + ' ' + data.letrasMonedaCentavoPlural;
            })();
        };

        if (data.enteros == 0)
            return 'CERO ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
        if (data.enteros == 1)
            return Millones(data.enteros) + ' ' + data.letrasMonedaSingular + ' ' + data.letrasCentavos;
        else
            return Millones(data.enteros) + ' ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
    };

})();

/*============================ END OF FUNCTION ============================ numeroALetras */